// require('dotenv').config();
const CosmosClient = require("@azure/cosmos").CosmosClient; // Cosmos library

const endpoint = process.env.endpoint;
const key = process.env.key;

const client = new CosmosClient({endpoint, key}); // client object is initialized

const databaseId = "CounterDB";
const containerId = "visitors";

const database = client.database(databaseId); // access specific database
const container = database.container(containerId); // access specific container

module.exports = async function (context, req) {
     
    // create query to find visitor count data based on name initilized in createNewCounter
    let queryData = {
        query : "SELECT * FROM visitors s WHERE s.name = 'visitorCount' "
    };
    
    // run query and get data
    const { resources: items } = await container.items 
        .query(queryData)
        .fetchAll();

    // console.log(items)
    let visitorObj = items[0]; 
    let visitorId = visitorObj.id
    let visitorValue = visitorObj.visitorNum // visitorNum initialized in createNewCounter

    visitorObj.visitorNum = visitorValue + 1; // increment visitorNum by 1 every time the function is called

    // replace data in table with updated value
    const {resource : updatedItem } = await container
        .item(visitorId)
        .replace(visitorObj);
    
    // console.log(updatedItem.visitorNum)

    const responseMessage = "visitor count updated"

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {message: responseMessage, number: updatedItem.visitorNum} 
    };
}