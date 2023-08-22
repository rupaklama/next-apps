const fetchData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  try {
    const response = await fetch(
      "https://api.foursquare.com/v3/places/search?query=coffee%20&ll=40.72356013203024%2C-74.07766358411394",
      options
    );

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export { fetchData };
