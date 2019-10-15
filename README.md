# Changes made


Added the extra scenario for default commodity. 
- changed index.html for spacing issue
- added /data/marketdefault.sql for the default table
- changed routes/routes.js to add a default route in case of no rows returned


# fruitpal
A simple application showcasing a simple html page posting (index.html) posting to a Node Express stack. The Node express app takes the request parses it and gets the appropriate response. 

**Choice of Technology**

The problem presented is ideal for a single thread request / response process. Node Express is a perfect solution to quickly serve up an application that can do simple request response. More sophisticated approaches like Spring Boot etc could also be done fairly quickly.

**The packages used are**
- express
- mysql for db support
- request
- ejs
- http for a light weight web server
- routes for a rest service
- mocha and chai for test

**Flow**
- Index.html - serves up the initial form for the user input according to the specifications
- app.js -- application - sets up the flow of the application
- routes/routes.js -- routes for node express, specifies the get and post operations
- data/config.js -- configuration to connect to local mysql db 
- views -- simple ejs page to show the results in a table and format 
- test -- test.js to run unit tests, currently primitive tests are created to illustrate the use of the framework

**App**

Clone the project and then run npm install on the *project root* directory. This will download the essential packages. Please note that this will also do a preliminary check for vulnerabilities if you are using a modern node version. 

Once the app installs, run *node app.js* on the terminal / command / bash prompt. Once invoked you would see a message as below:
*Server listening on port 3002*

This denotes the server is up and running. Now you can navigate to the **index.html** page. This presents the initial form for submission. Please input the *fruit*, *the expected price you wish to pay per* **ton**, *the quantity that you wish to buy*. Click Submit.

This submits (*posts*) the form to the server. The server then determines the appropriate *route* as set up in **routes.js** and redirtects the flow appropriately. The result set is captured and returned to the simple *view* in **views**, that shows the requests and response as laid out in the specifications.

**DB**
 a rudimentary database holding just one table *commodity* to store the Overheads against the market and commodity. Currently we assume the additional overhead is in the same table, ideally this would be served through an api call to be incorporated in the calculation.
 -- see ~/data/fruitpal.sql
 
 


**What is happening**
- We set up a simple rest api to accept incoming requests
- the input is protected from injection by using inbuilt mysql functions
- tests are run by running **npm test** command and you will be able to see the tests and results.

**What more post this?**
- We would need to secure the application further (Especially the database).
- Incorporate encryption for end to end (TLS / HTTPS), the data presented does have some sensitive information (pricing), which could be encrypted at rest. Furthermore, nodejs does come with a fairly extensive library of tools that could be used to guage vulnerabilities.
- incorporate ORM for database interaction
- create a load balancer in front of this application to cater to multiple requests 
- create a data model for us to separate the app layer from the data layer
- add more tests
- host the additional overhead cost api on a separate server (Follow the above steps (Security etc) for the same) and call it through the app rather than the simplified table.


**Resources**
- nodejs.org
- github
- https://www.owasp.org
- https://expressjs.com/en/advanced/best-practice-security.html

**Screenshots**
 
- Final Price calculation (https://user-images.githubusercontent.com/52183652/66396631-1f467700-e9a8-11e9-9bb5-d2c3a1b3d34d.png)
- Npm test (https://user-images.githubusercontent.com/52183652/66396679-3dac7280-e9a8-11e9-9e15-174a9ff124a1.png)
- Response to invalid input (https://user-images.githubusercontent.com/52183652/66396800-86642b80-e9a8-11e9-8227-354d76e7e15e.png)

