// Function to clear previous search results
function clearPreviousResults() {
    let resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clears all previous results from the container
}

// Fetch the travel recommendation data
fetch('/travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    // Store the data for use in other functions
    travelData = data;
  })
  .catch(error => console.error('Error fetching travel data:', error));

  // Function to handle the search and display results
function handleSearch() {
    // Get the search keyword from the input
    let keyword = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Define arrays to hold search results for beaches, temples, and countries
    let beaches = travelData.beaches;
    let temples = travelData.temples;
    let countries = travelData.countries;

    // Clear any previous results
    clearPreviousResults();

    // Search and display beach results
    if (keyword.includes('beach')) {
        displayResults(beaches);
    } 
    // Search and display temple results
    else if (keyword.includes('temple')) {
        displayResults(temples);
    } 
    // Search and display country results
    else {
        let countryResults = countries.filter(country => 
            country.name.toLowerCase().includes(keyword) || 
            country.cities.some(city => city.name.toLowerCase().includes(keyword))
        );
        displayResults(countryResults);
    }
}

// Attach event listener to search button
document.getElementById('searchButton').addEventListener('click', handleSearch);

// Function to clear previous search results
function clearPreviousResults() {
    let resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clears all previous results from the container
}

// Function to display results on the right side of the page
function displayResults(results) {
    let resultsContainer = document.getElementById('resultsContainer');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Iterate through the results and create elements to display them
    results.forEach(result => {
        // Create a new div to hold each result
        let resultDiv = document.createElement('div');
        resultDiv.classList.add('result-item');

        // Add image for the result
        let image = document.createElement('img');
        image.src = `images/${result.imageUrl}`; // Set the image source (custom image URLs)
        image.alt = result.name;
        image.classList.add('result-image');
        resultDiv.appendChild(image);

        // Create the text container
        let textContainer = document.createElement('div');
        textContainer.classList.add('result-text');

        // Add a title (place name)
        let title = document.createElement('h3');
        title.innerText = result.name;
        textContainer.appendChild(title);

        // Add a paragraph for the description
        let description = document.createElement('p');
        description.innerText = result.description;
        textContainer.appendChild(description);

        // Add a button for visiting the place
        let button = document.createElement('button');
        button.innerText = 'Visit';
        button.classList.add('visit-button');
        textContainer.appendChild(button);

        // Append the text container to the result div
        resultDiv.appendChild(textContainer);

        // Append the result div to the results container
        resultsContainer.appendChild(resultDiv);
    });
}
