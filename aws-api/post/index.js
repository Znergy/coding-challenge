var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "https://dynamodb.us-west-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    console.log(event.body)

    var id = Math.floor((Math.random() * 10000) + 71) + ''
    var username = event.body.username;
    var title = event.body.title;
    var category = event.body.category;
    var task1 = event.body.task1;
    var task2 = event.body.task2;
    var task3 = event.body.task3;
    var item = {
        'id': id,
        'username': username,
        'title': title,
        'category': category,
        'tasks': [task1, task2, task3]
    }

    var params = {
        TableName: 'todolists',
        Item: {
            'id': id,
            'username': username,
            'title': title,
            'category': category,
            'tasks': [task1, task2, task3]
        }
    };

    docClient.put(params, function(err, data) {
        var callbackMessage;
        if (err) {
            callback(null, err)
        }
        callback(null, {message: 'Todo List successfully added!', item});
    });
};
