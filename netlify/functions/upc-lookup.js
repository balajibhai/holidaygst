// netlify/functions/upc-lookup.js

exports.handler = async (event) => {
  const upc = event.queryStringParameters.upc;
  const apiUrl = `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`;

  try {
    const response = await fetch(apiUrl);

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(
        `API responded with status ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching UPC data:", error.message);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
