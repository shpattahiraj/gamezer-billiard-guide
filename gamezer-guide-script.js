// Main function to load an external guide script and fetch data
function initializeGamezerBilliardGuide() {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://shpattahiraj.github.io/gamezer-billiard-guide/gamezer-guide-script.js'; 
    document.body.appendChild(scriptElement);

    scriptElement.onload = () => {
        console.log('Gamezer billiard guide script loaded successfully.');
        // Commenting out the fetchGamezerData() call until CORS issues are resolved
        // fetchGamezerData(); // Fetch relevant data (optional)
    };

    scriptElement.onerror = () => {
        console.error('Failed to load the Gamezer billiard guide script.');
    };
}

// Function to fetch data (disabled due to CORS issue)
function fetchGamezerData() {
    const xhr = new XMLHttpRequest();
    const apiUrl = 'https://gamezer.com/api/data'; // This API request is blocked by CORS

    xhr.open('GET', apiUrl, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Gamezer data received:', xhr.responseText); 
            } else {
                console.error('Error fetching data from Gamezer. Status:', xhr.status);
            }
        }
    };

    xhr.send();
}

// Initialize the guide
initializeGamezerBilliardGuide();
