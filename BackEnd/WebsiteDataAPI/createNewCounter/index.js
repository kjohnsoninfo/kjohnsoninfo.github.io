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
     
    // initialize item to be inserted
    let counterCount = {
        "name" : "visitorCount",
        "visitorNum" : 0,
        "id" : "uniqueUser"
    };

    const { resource: createdItem } = await container.items.create(counterCount) // wait for item to be created and insert
    const responseMessage = "Success"

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}