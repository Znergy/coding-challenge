var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "https://dynamodb.us-west-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    var id = event.id

    var params = {
        TableName: 'todolists',
        Key: {
            'id': id
        }
    }

    docClient.delete(params, function(err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            callback(null, 'Unable to delete item: ' + JSON.stringify(err, null, 2));
        } else {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
            callback(null, 'Todo List successfully Deleted!');
        }
    });
};
