# Coding challenge

#### By: Ryan Jones
#### Version: 08/25/2017
#### GitHub Repo: [Coding Challenge](https://github.com/znergy/coding-challenge)

## Challenge Outline
### Implement the requirements below to create a basic key/value service:
* _uses node.js or python_
* _Create a RESTful API, we suggest using express or flask but use whatever you are comfortable with_
* _The route should be something like /key but should be versionable_
* _Show some example uses of the service_

### Use Cases:
* _The user should be able to get all keys/values_
* _The user should be able to get a specific key/value_
* _The user should be able to add a key/value_
* _The user should be able to update a key/value_
* _The user should be able to delete a key/value_
* Enable the use of 2 different backing stores of your choice. they can use real data stores or be mocked out to represent. which one is used should be determined via configuration

### Demonstrate Asynchronous Handling
* Simultaneous (make 2 or more calls that are processed asynchronously and when all calls complete results are compiled to a single result object which is returned)
* Chained (make a call the result of which informs a subsequent call)
* The code should be runnable and have some form of demonstration. For example, a user would add a key of 'sports', its value the list of 'baseball', 'hockey' and 'football'
* The code should have automated tests
* Share via code repository

## Installation Instructions
* Clone this repository && Navigate to the directory (coding-challenge)
* Run 'npm install'
* Download MongoDB
  * [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
  * [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
  * [Mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/): Run 'brew install mongodb'
* (For Mac) Open two terminals
  * Terminal One: Run 'mongod'
  * Terminal Two: Run 'mongo'
  * MongoDB should be ready to connect!
* Testing: Run 'npm test'
* Starting the server: 'npm start' (default: dev environment)
  * Change the environment config for Production or Development
    * Prod: Run 'NODE_ENV=prod npm start'
    * Dev: Run 'npm start' or 'NODE_ENV=dev npm start'
* Demo:
  * open 'localhost:4000'
    * Full CRUD using RESTful routes via Express

## My Experience
I had a really great time diving deeper into Express, Mocha, Chai, and MongoDB. It was extremely rewarding creating a RESTful API with Express. I found it to be really enjoyable and testing with Chai and Mocha was great. While I was working through the challenge, I found myself not being content with some of my implementation, specifically for automated testing. I refactored multiple times and in the process learned a ton about the possibilities and shortcomings of different libraries.

## Other Implementations
I also implemented a RESTful API on AWS via API Gateway, Lambda, and DynamoDB. This API can be accessed via the API URLs below. It has full CRUD functionality and is by nature 'serverless'. It uses Lambda functions to talk to DynamoDB, I will leave the actual code to facilitate this in the project directory called 'aws-api'.

Inline-style:
![API Gateway RESTful API w/ CORS](http://imgur.com/a/Py5JB "AWS RESTful API")

## AWS API URLs (Using API Gateway, Lambda, and DynamoDB written in NodeJS)
There is sample data populated you will be able to see by looking at the GET API URL. You can run these API URLs by using a simple AJAX call or in Postman. For information on testing these in Postman, go to the aws-api/{method}/request-body.json file. I also pre-loaded data into DynamoDB, which you can find in the dynamodb-data.json file.
* POST: https://cpnfdjbkta.execute-api.us-west-2.amazonaws.com/prod/api/v1/todolists
* GET: https://cpnfdjbkta.execute-api.us-west-2.amazonaws.com/prod/api/v1/todolists
* GET {id}: https://cpnfdjbkta.execute-api.us-west-2.amazonaws.com/prod/api/v1/todolists/{id}
* PUT: https://cpnfdjbkta.execute-api.us-west-2.amazonaws.com/prod/api/v1/todolists/{id}
* DELETE: https://cpnfdjbkta.execute-api.us-west-2.amazonaws.com/prod/api/v1/todolists/{id}

## Tools && Node Packages
* Express - a lightweight NodeJS framework (npm i —save express)
* Babel - Write ES6 Javascript, Babel translates accordingly (npm i —save-dev babel-cli babel-preset-es2015)
* RimRaf - Using to build a distribution directory, when ’npm build’ is run (npm i -save-dev rimraf )
* Body-Parser - Middleware for parsing the body of the request before the route handler talks to MongoDB (npm i --save body-parser)
* Mongoose - A layer of methods to save, edit, retrieve and delete from mongoDB (npm i --save mongoose)
* Async - Powerful functions for asynchronous javascript (npm i --save async)

### Testing
* Mocha - Flexible NodeJS test framework (npm i —save-dev mocha)
* Assert - Provides a simple set of assertion tests
* Chai - BDD/TDD assertion library for testing (npm i --save-dev chai chai-http)
* Robomongo - To visually see the data in mongoDB
* Postman - To test the API request/responses
