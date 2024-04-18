fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    // Extracting country names
    const countries = data.countries.map(country => country.name);
    console.log('Countries:', countries);

    // Extracting city names
    const cities = data.countries.flatMap(country => country.cities.map(city => city.name));
    console.log('Cities:', cities);

    // Extracting temple names
    const temples = data.temples.map(temple => temple.name);
    console.log('Temples:', temples);

    // Extracting beach names
    const beaches = data.beaches.map(beach => beach.name);
    console.log('Beaches:', beaches);
  })
  .catch(error => console.error('Error fetching data:', error));