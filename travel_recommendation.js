document.addEventListener('DOMContentLoaded', function() {
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
  
    // Add an event listener to the search button
    document.querySelector('.search-btn').addEventListener('click', function() {
        // Get the user input from the search bar and convert it to lowercase
        var userInput = document.querySelector('.search-bar').value.toLowerCase();
  
        // Define arrays of keywords for beaches, temples, and countries
        var beachKeywords = ['beach', 'beaches'];
        var templeKeywords = ['temple', 'temples'];
        var countryKeywords = ['country', 'countries'];
  
        // Check if the user input matches any of the beach keywords
        if (beachKeywords.includes(userInput)) {
            // Display beach-related results
            displayBeachResults();
        }
        // Check if the user input matches any of the temple keywords
        else if (templeKeywords.includes(userInput)) {
            // Display temple-related results
            displayTempleResults();
        }
        // Check if the user input matches any of the country keywords
        else if (countryKeywords.includes(userInput)) {
            // Display country-related results
            displayCountryResults();
        }
        else {
            // Display a message indicating no matching results
            alert('No matching results found.');
        }
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  // Function to display beach-related results
  function displayBeachResults() {
      // Fetch beach recommendations from the JSON data
      fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
              const beaches = data.beaches;
              // Display details of at least two beach recommendations
              displayResults(beaches);
          })
          .catch(error => console.error('Error fetching beach data:', error));
  }
  
  // Function to display temple-related results
  function displayTempleResults() {
      // Fetch temple recommendations from the JSON data
      fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
              const temples = data.temples;
              // Display details of at least two temple recommendations
              displayResults(temples);
          })
          .catch(error => console.error('Error fetching temple data:', error));
  }
  
  // Function to display country-related results
  function displayCountryResults() {
      // Fetch country recommendations from the JSON data
      fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
              const countries = data.countries;
              // Display details of at least two country recommendations
              displayResults(countries);
          })
          .catch(error => console.error('Error fetching country data:', error));
  }
  
  // Function to display recommended places
  function displayResults(data) {
      const recommendedPlacesSection = document.getElementById('recommended-places');
      
      // Clear previous recommendations
      recommendedPlacesSection.innerHTML = '';
      // Display details of at least two recommendations
      for (let i = 0; i < 2; i++) {
          const place = data[i];
          // Create elements to display place details
          const container = document.createElement('div');
          container.classList.add('result-container');
  
          const image = document.createElement('img');
          image.src = place.imageUrl;
          image.alt = place.name;
  
          const name = document.createElement('h2');
          name.textContent = place.name;
  
          const description = document.createElement('p');
          description.textContent = place.description;
  
          // Append elements to container
          container.appendChild(image);
          container.appendChild(name);
          container.appendChild(description);
  
          // Append container to the recommended places section
          recommendedPlacesSection.appendChild(container);
      }
      
      recommendedPlacesSection.style.opacity = '1';
  
  
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // Your existing code here...
  
    // Add an event listener to the clear button
    document.querySelector('.clear-btn').addEventListener('click', function() {
        clearResults();
    });
  });
  
  // Function to clear the results
  function clearResults() {
    const recommendedPlacesSection = document.getElementById('recommended-places');
    // Clear the contents of the recommended-places section
    recommendedPlacesSection.innerHTML = '';
  }
  
  function displayCurrentTimeInCountry(countryTimeZone) {
    const options = { timeZone: countryTimeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const currentTime = new Date().toLocaleTimeString('en-US', options);
    console.log("Current time in " + countryTimeZone + ":", currentTime);
  }