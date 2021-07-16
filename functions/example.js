exports.handler = async (event) => {
  const { httpMethod } = event;

  if (httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        status: 405,
        title: "Method not allowed",
        message: `Endpoint only accept GET method, you tried: ${httpMethod}`,
      }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify("Hello World"),
  };
};
