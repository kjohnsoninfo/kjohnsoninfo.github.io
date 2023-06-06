My website can be found here: <a href="https://karajohnson.info/">karajohnson.info</a>. Check out my other projects on the site and feel free to connect with me on LinkedIn!

# Portfolio Website

This code is for my personal website. 

### Prerequisites


* 
* Node.js;
* Custom domain name;

### My Diagram to Visualize the Process

## My Steps
### 1: Host Static Website in GitHub Pages

### 2: Make the website secure

The second step was to make the website use HTTPS for security. I ran into an issue here. I could not use Azure CDN since it was unavailable in my Azure student subscription. As an alternative solution, I decided to use Cloudflare for my security needs and connect the two services.

```
1. Purchase custom domain and add to Cloudflare.
2. Set up Cloudflare DNS by adding an "as-verify" CNAME and a custom domain CNAME pointing to the Azure website URL.
3. Add custom domain to Azure website.
```
These steps ensured that when the user accessed the custom domain it would be routed through the Cloudflare server before reaching the Azure webserver.

### 3: Create CosmosDB database

### 4. Write a script to count the number of visits to my site

### 5. Create API to connect CosmosDB and web application

### 6. Integration

### 7. Front End HTML and CSS

I used a template made by DevCRUD here. Huge thanks to DevCRUD. <br /><br />


