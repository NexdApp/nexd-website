var Mailchimp = require("mailchimp-api-v3");
var mailchimp = new Mailchimp("3942cad01030e1f6b1dc97b282d7450e-us19");

exports.handler = async (event, context) => {
  const email = event.queryStringParameters.email;
  let result = await mailchimp
    .post("/lists/6cff90596f/members", {
      email_address: email,
      status: "subscribed",
    })
    .then(function(result) {
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    })
    .catch(function(err) {
      return {
        statusCode: 500,
        body: JSON.stringify(err),
      };
    });
  return result;
};
