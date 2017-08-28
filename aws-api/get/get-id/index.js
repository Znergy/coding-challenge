var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "https://dynamodb.us-west-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    console.log(event)
    console.log(context)
    var id = event.id

    var params = {
        TableName: 'todolists',
        Key:{
            'id': id
        }
    }

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            callback(null, 'Unable to read item.');
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            callback(null, data);
        }
    })
}
