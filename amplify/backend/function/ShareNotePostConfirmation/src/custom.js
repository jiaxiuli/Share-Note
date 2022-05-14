/*
 * @Author: Shen Shu
 * @Date: 2022-05-13 22:24:04
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-13 22:26:15
 * @FilePath: \Share-Note-Web\amplify\backend\function\ShareNotePostConfirmation\src\custom.js
 * @Description:
 *
 */
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  let date = new Date();
  console.log("event", event);
  if (
    event.request.userAttributes.sub &&
    event.triggerSource !== "PostConfirmation_ConfirmForgotPassword"
  ) {
    let params = {
      Item: {
        __typename: { S: "User" },
        id: { S: event.userName },
        email: { S: event.request.userAttributes.email },
        username: { S: event.userName },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: process.env.User_Table_Name,
    };

    try {
      await ddb.putItem(params).promise();
      console.log("添加到DynamoDB 成功！");
    } catch (error) {
      console.log(error);
    }
  }
  return event;
};
