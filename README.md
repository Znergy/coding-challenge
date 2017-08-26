# Coding challenge

#### By: Ryan Jones
#### Version: 08/25/2017

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
* Share via code repository or zip (repo preferred)
