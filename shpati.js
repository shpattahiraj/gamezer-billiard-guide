// Main function to load an external guide script and fetch data
function initializeGamezerBilliardGuide() {
    // Create a script element and set its source URL to your Gamezer guide script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://gamezer.com/your-guide-script.js'; // Replace this with the correct external script URL
    document.body.appendChild(scriptElement); // Append the script to the document

    // When the guide script is successfully loaded
    scriptElement.onload = () => {
        console.log('Gamezer billiard guide script loaded successfully.');
        fetchGamezerData(); // Fetch relevant data
    };

    // Error handling for script loading issues
    scriptElement.onerror = () => {
        console.error('Failed to load the Gamezer billiard guide script.');
    };
}

// Function to fetch and log Gamezer data
function fetchGamezerData() {
    const xhr = new XMLHttpRequest();
    const apiUrl = 'https://gamezer.com/api/data'; // Replace with Gamezer's actual API or relevant data URL

    // Open a GET request to the API or resource
    xhr.open('GET', apiUrl, true);

    // Handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Gamezer data received:', xhr.responseText); // Log the API response to the console
            } else {
                console.error('Error fetching data from Gamezer. Status:', xhr.status);
            }
        }
    };

    xhr.send(); // Send the request
}

// Call the main function to initialize the guide
initializeGamezerBilliardGuide();
