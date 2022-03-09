var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// services/SpacesTable/Read.ts
var Read_exports = {};
__export(Read_exports, {
  handler: () => handler
});
var import_aws_sdk = require("aws-sdk");
var TABLE_NAME = process.env.TABLE_NAME;
var PRIMARY_KEY = process.env.PRIMARY_KEY;
var dbClient = new import_aws_sdk.DynamoDB.DocumentClient();
async function handler(event, context) {
  const result = {
    statusCode: 200,
    body: "Hello from DynamoDb"
  };
  try {
    if (event.queryStringParameters) {
      if (PRIMARY_KEY in event.queryStringParameters) {
        const keyValue = event.queryStringParameters[PRIMARY_KEY];
        const queryResponse = await dbClient.query({
          TableName: TABLE_NAME,
          KeyConditionExpression: "#zz = :zzzz",
          ExpressionAttributeNames: {
            "#zz": PRIMARY_KEY
          },
          ExpressionAttributeValues: {
            ":zzzz": keyValue
          }
        }).promise();
        result.body = JSON.stringify(queryResponse);
      }
    } else {
      const queryResponse = await dbClient.scan({
        TableName: TABLE_NAME
      }).promise();
      result.body = JSON.stringify(queryResponse);
    }
  } catch (error) {
    result.body = `Error occured> ${error.message}`;
  }
  ;
  return result;
}
module.exports = __toCommonJS(Read_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
