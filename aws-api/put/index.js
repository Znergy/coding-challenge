var AWS = require("aws-sdk")

AWS.config.update({
  region: "us-west-2",
  endpoint: "https://dynamodb.us-west-2.amazonaws.com"
})

var docClient = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {

    var id = event.id
    var title = event.body.title

    var params = {
        TableName: 'todolists',
        Key: {
            "id": id
        },
        UpdateExpression: "set title = :a",
        ExpressionAttributeValues:{
            ":a": title
        },
        ReturnValues:"UPDATED_NEW"
    }

    docClient.update(params, function(err, data) {
        var callbackMessage;
        if (err) {
            callback(null, err)
        }
        callback(null, {message: 'Todolist successfully updated!', data});
    });
};
