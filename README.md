My website can be found here: <a href="https://karajohnson.info/">karajohnson.info</a>. Check out my other projects on the site and feel free to connect with me on LinkedIn!

# Cloud Resume Challenge

This code is part of the Cloud Resume Challenge put forth by Forrest Brazeal. Check out the original challenge <a href="https://cloudresumechallenge.dev/docs/the-challenge/">here</a>.  

### Prerequisites

What you need before starting the challenge.

* An Azure account;
* Node.js;
* Custom domain name;

### My Diagram to Visualize the Process

![Diagram Image](https://github.com/kjohnson8781/CloudResumeChallenge/blob/main/diagram.png)

## My Steps
### 1: Host Static Website in Azure Storage

The first step was to set up a static website in Azure. I followed the Azure documentation page found <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website">here</a>. 

### 2: Make the website secure

The second step was to make the website use HTTPS for security. I ran into an issue here. I could not use Azure CDN since it was unavailable in my Azure student subscription. As an alternative solution, I decided to use Cloudflare for my security needs and connect the two services.

```
1. Purchase custom domain and add to Cloudflare.
2. Set up Cloudflare DNS by adding an "as-verify" CNAME and a custom domain CNAME pointing to the Azure website URL.
3. Add custom domain to Azure website.
```
These steps ensured that when the user accessed the custom domain it would be routed through the Cloudflare server before reaching the Azure webserver.

### 3: Create CosmosDB database

The third step was to set up the CosmosDB database in Azure. I followed the Azure documentation page found <a href="https://docs.microsoft.com/en-us/azure/cosmos-db/sql/create-sql-api-nodejs">here</a>. I chose to use the core (SQL) API because I wanted to learn more SQL. This allowed my data to be queried with SQL despite CosmosDB being a NoSQL database. 

### 4. Write a script to count the number of visits to my site

I originally tried to write the visitor counter in my frontend JavaScript file but soon realized that I would run into issues connecting it with the Azure database. Instead, I decided to integrate the script into my API using Azure functions. See next step.

### 5. Create API to connect CosmosDB and web application

This was by far the most challenging part of the project. I knew nothing about Azure functions and struggled in implementing them. After multiple tries, many YouTube videos watched, and documentation read, I was finally able to create the API by using a lot of the information found in the Azure pages <a href="https://docs.microsoft.com/en-us/azure/cosmos-db/sql/create-sql-api-nodejs">here</a> and <a href="https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-node">here</a>

```
1. Create a new function app in Azure. I set Node.js as my language here.
2. Download Azure tools extension in VS Code.
3. Create local function using the Azure function extension in VS Code. I used the HTTP trigger template here because it was the trigger I needed for this project.
4. Initialize CosmosClient in local function to connect to CosmosDB. This requires using the endpoint and key found in the CosmosDB resource in Azure.
5. Create variables to access the specific database using the names set when creating the CosmosDB resource.
6. Write function that queries the database and fetches needed data using SQL. In this case, I queried based on name.
7. Increment value by 1 and replace data with updated value.
8. Ensure function response includes the visitor count data. This will be needed for integration into frontend.
```

### 6. Integration

The sixth step was to integrate the API with the web app by writing a JavaScript file that triggers the function. Since the function is triggered by an HTTP request, the JavaScript file has to send an HTTP GET request to the API.

```
1. Add event listener so the HTTP GET request is sent once the website page has loaded.
2. Create function to get visitor count from the API using the API URL. This can be found in the function app module in Azure. Look for "Get function URL".
3. Fetch HTTP response from API.
4. Write necessary data from HTTP response to local variable.
5. Display variable to HTML file. I used ElementById here. 
```

### 7. Front End HTML and CSS

I used a template made by DevCRUD here because honestly, I am not a web developer and do not have the eye for making a good-looking website from scratch. Huge thanks to DevCRUD. <br /><br />
This was by far the most tedious part of the project and I don't think I'll become a frontend developer any time soon haha. However, I still learned a lot about how to analyze other people's code, how HTML and CSS work together, what bootstrap is, and how grids work in web design. This part was vital to making the final product look polished and finished. My favorite part was seeing the final pieces come together. 

## What I Learned
I came into this project knowing nothing about cloud, basic skills in JavaScript, and a little experience in reading HTML files. This was by far the most challenging project I have tackled personally but I had a ton of fun and learned so much. 

Here is brief description:
```
1. I learned the benefits and purpose of the cloud, what serverless meant, how to navigate the Azure portal and documentation, and how to buy a website domain.
2. I learned how to connect my custom domain and Azure website to Cloudflare so that Cloudflare could protect my website by using CNAME and nameservers.
3. I learned what Azure CosmosDB is and the benefits and disadvantages of the different APIs that can be used with it.
4. I learned what Azure Functions were, what an HTTP trigger meant, how to connect my JavaScript file to CosmosDB, how to hide sensitive information using environmental variables, how to query in SQL, how GET and POST work, and gained a deeper understanding of JavaScript variables and functions.
5. I learned what the fetch API is and how to use it, how JavaScript analyzes function requests and responses, and how to use JavaScript variables in HTML
6. I learned what bootstrap was, how grids work, how to add scripts in HTML files, how CSS and HTML work together, troubleshooting tools, and how to integrate files into Azure.
```

## Next Steps
I am not quite finished with the challenge. My next steps are to create some tests, develop CI/CD to deploy the application automatically, and polish up my blog post and this post for the project!

## Acknowledgements
Huge thanks to DevCRUD, Forrest Brazeal, and Nathan Read.
