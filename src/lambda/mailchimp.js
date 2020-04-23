var Mailchimp = require("mailchimp-api-v3");
var mailchimp = new Mailchimp(process.env.apiKey);

exports.handler = async (event) => {
  const email = event.queryStringParameters.email;
  const listId = process.env.listId;
  const result = await mailchimp
    .post(`/lists/${listId}/members`, {
      email_address: email,
      status: "subscribed",
    })
    .then((result) => ({
      statusCode: 200,
      body: JSON.stringify(result),
    }))
    .catch((err) => ({
      statusCode: 500,
      body: JSON.stringify(err),
    }));
  return result;
};
