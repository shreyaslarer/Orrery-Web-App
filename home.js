// Planet details for real-time data
const planetsData = {
  mercury: {
    name: 'Mercury',
    distanceFromSun: '57.9 million km',
    rotationSpeed: '47.87 km/s',
    orbitalPeriod: '88 days',
    atmosphericComposition: 'Thin atmosphere, mostly oxygen, sodium, hydrogen, helium, and potassium',
    surfaceTemperature: '430°C (day), -180°C (night)',
    gravity: '3.7 m/s²',
    moons: 'None',
    rings: 'No',
    recentMissions: 'MESSENGER, Mariner 10',
    geologicalActivity: 'Geologically inactive',
    weatherConditions: 'No weather',
    magneticFieldStrength: '0.000003 gauss',
    radiationLevels: 'High radiation levels',
  },
  venus: {
    name: 'Venus',
    distanceFromSun: '108.2 million km',
    rotationSpeed: '35.02 km/s',
    orbitalPeriod: '225 days',
    atmosphericComposition: 'Thick atmosphere, mostly carbon dioxide',
    surfaceTemperature: '462°C',
    gravity: '8.87 m/s²',
    moons: 'None',
    rings: 'No',
    recentMissions: 'Magellan, Venus Express',
    geologicalActivity: 'Volcanic activity suspected',
    weatherConditions: 'Extreme greenhouse effect',
    magneticFieldStrength: '0.0000004 gauss',
    radiationLevels: 'High radiation levels',
  },
  earth: {
    name: 'Earth',
    distanceFromSun: '149.6 million km',
    rotationSpeed: '29.78 km/s',
    orbitalPeriod: '365.25 days',
    atmosphericComposition: '78% nitrogen, 21% oxygen',
    surfaceTemperature: '15°C (average)',
    gravity: '9.81 m/s²',
    moons: '1 (Moon)',
    rings: 'No',
    recentMissions: 'Apollo, ISS',
    geologicalActivity: 'Active tectonic activity',
    weatherConditions: 'Varied',
    magneticFieldStrength: '0.000035 gauss',
    radiationLevels: 'Low radiation levels',
  },
  mars: {
    name: 'Mars',
    distanceFromSun: '227.9 million km',
    rotationSpeed: '24.077 km/s',
    orbitalPeriod: '687 days',
    atmosphericComposition: 'Thin atmosphere, mostly carbon dioxide',
    surfaceTemperature: '-63°C',
    gravity: '3.71 m/s²',
    moons: '2 (Phobos, Deimos)',
    rings: 'No',
    recentMissions: 'Mars Rovers (Curiosity, Perseverance)',
    geologicalActivity: 'Volcanic activity suspected',
    weatherConditions: 'Dust storms',
    magneticFieldStrength: '0.00004 gauss',
    radiationLevels: 'Higher than Earth, due to thin atmosphere',
  },
  jupiter: {
    name: 'Jupiter',
    distanceFromSun: '778.5 million km',
    rotationSpeed: '13.07 km/s',
    orbitalPeriod: '11.86 years',
    atmosphericComposition: 'Mostly hydrogen and helium',
    surfaceTemperature: '-108°C',
    gravity: '24.79 m/s²',
    moons: '79 (including Io, Europa)',
    rings: 'Yes',
    recentMissions: 'Juno, Galileo',
    geologicalActivity: 'Active atmosphere with storms',
    weatherConditions: 'Giant storms (Great Red Spot)',
    magneticFieldStrength: '0.000012 gauss',
    radiationLevels: 'Extreme radiation levels',
  },
  saturn: {
    name: 'Saturn',
    distanceFromSun: '1.434 billion km',
    rotationSpeed: '9.68 km/s',
    orbitalPeriod: '29.46 years',
    atmosphericComposition: 'Mostly hydrogen and helium',
    surfaceTemperature: '-178°C',
    gravity: '10.44 m/s²',
    moons: '83 (including Titan)',
    rings: 'Yes',
    recentMissions: 'Cassini-Huygens',
    geologicalActivity: 'Inactive, but dynamic atmosphere',
    weatherConditions: 'Strong winds and storms',
    magneticFieldStrength: '0.000002 gauss',
    radiationLevels: 'High radiation levels',
  },
  uranus: {
    name: 'Uranus',
    distanceFromSun: '2.871 billion km',
    rotationSpeed: '6.81 km/s',
    orbitalPeriod: '84 years',
    atmosphericComposition: 'Hydrogen, helium, methane',
    surfaceTemperature: '-197°C',
    gravity: '8.69 m/s²',
    moons: '27 (including Titania, Oberon)',
    rings: 'Yes',
    recentMissions: 'Voyager 2',
    geologicalActivity: 'Inactive',
    weatherConditions: 'Cold, with faint clouds',
    magneticFieldStrength: '0.000001 gauss',
    radiationLevels: 'Moderate radiation levels',
  },
  neptune: {
    name: 'Neptune',
    distanceFromSun: '4.495 billion km',
    rotationSpeed: '5.43 km/s',
    orbitalPeriod: '165 years',
    atmosphericComposition: 'Hydrogen, helium, methane',
    surfaceTemperature: '-214°C',
    gravity: '11.15 m/s²',
    moons: '14 (including Triton)',
    rings: 'Yes',
    recentMissions: 'Voyager 2',
    geologicalActivity: 'Active atmosphere with storms',
    weatherConditions: 'Strong winds',
    magneticFieldStrength: '0.0000006 gauss',
    radiationLevels: 'Low radiation levels',
  },
};

// Display planet real-time data
document.getElementById('planet-data-btn').addEventListener('click', () => {
  const planetDataBox = document.getElementById('planet-data-box');
  
  let planetDetailsHTML = '<h2>Planet Data</h2>';
  Object.keys(planetsData).forEach(planetKey => {
    const planet = planetsData[planetKey];
    planetDetailsHTML += `
      <h3>${planet.name}</h3>
      <p><strong>Distance from Sun:</strong> ${planet.distanceFromSun}</p>
      <p><strong>Rotation Speed:</strong> ${planet.rotationSpeed}</p>
      <p><strong>Orbital Period:</strong> ${planet.orbitalPeriod}</p>
      <p><strong>Atmospheric Composition:</strong> ${planet.atmosphericComposition}</p>
      <p><strong>Surface Temperature:</strong> ${planet.surfaceTemperature}</p>
      <p><strong>Gravity:</strong> ${planet.gravity}</p>
      <p><strong>Moons:</strong> ${planet.moons}</p>
      <p><strong>Rings:</strong> ${planet.rings}</p>
      <p><strong>Recent Missions:</strong> ${planet.recentMissions}</p>
      <p><strong>Geological Activity:</strong> ${planet.geologicalActivity}</p>
      <p><strong>Weather Conditions:</strong> ${planet.weatherConditions}</p>
      <p><strong>Magnetic Field Strength:</strong> ${planet.magneticFieldStrength}</p>
      <p><strong>Radiation Levels:</strong> ${planet.radiationLevels}</p>
      <hr>`;
  });

  planetDataBox.innerHTML = planetDetailsHTML;
  planetDataBox.style.display = 'block';
});

// NASA API integration for real-time data (APOD example)
const apiKey = '2nNvdZMSnV9IkOWlVcWQheprX1A6TLZqkUYUlcMJ'; // Insert your NASA API key here

document.getElementById('show-data-btn').addEventListener('click', () => {
  const realTimeDataBox = document.getElementById('real-time-data-box');
  
  // Fetch real-time data from NASA API (APOD)
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      realTimeDataBox.innerHTML = `
        <h2>NASA Real-Time Data</h2>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Description:</strong> ${data.explanation}</p>
        <img src="${data.url}" alt="Real-time image" style="max-width:100%; height:auto;">`;
      realTimeDataBox.style.display = 'block';
    })
    .catch(error => {
      console.error('Error fetching data from NASA API:', error);
    });
});

// Planet search functionality
document.getElementById('search-btn').addEventListener('click', () => {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const resultBox = document.getElementById('result-box');

  if (planetsData[searchInput]) {
    const planet = planetsData[searchInput];
    resultBox.innerHTML = `
      <h2>${planet.name}</h2>
      <p><strong>Distance from Sun:</strong> ${planet.distanceFromSun}</p>
      <p><strong>Rotation Speed:</strong> ${planet.rotationSpeed}</p>
      <p><strong>Orbital Period:</strong> ${planet.orbitalPeriod}</p>
      <p><strong>Atmospheric Composition:</strong> ${planet.atmosphericComposition}</p>
      <p><strong>Surface Temperature:</strong> ${planet.surfaceTemperature}</p>
      <p><strong>Gravity:</strong> ${planet.gravity}</p>
      <p><strong>Moons:</strong> ${planet.moons}</p>
      <p><strong>Rings:</strong> ${planet.rings}</p>
      <p><strong>Recent Missions:</strong> ${planet.recentMissions}</p>
      <p><strong>Geological Activity:</strong> ${planet.geologicalActivity}</p>
      <p><strong>Weather Conditions:</strong> ${planet.weatherConditions}</p>
      <p><strong>Magnetic Field Strength:</strong> ${planet.magneticFieldStrength}</p>
      <p><strong>Radiation Levels:</strong> ${planet.radiationLevels}</p>`;
    resultBox.style.display = 'block';
  } else {
    resultBox.innerHTML = '<p>Planet not found. Please try again.</p>';
    resultBox.style.display = 'block';
  }
});


// Reference to DOM elements
const missionsButton = document.getElementById('missionsButton');
const missionsContainer = document.getElementById('missionsContainer');
const methodsDiv = document.getElementById('methods');

// Event listener for button click
missionsButton.addEventListener('click', async () => {
    missionsContainer.style.display = 'block'; // Show the container
    await fetchAsteroidData();
});

// Function to fetch asteroid data
async function fetchAsteroidData() {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayDeflectionMethods(data.near_earth_objects); // Pass asteroid data to display
    } catch (error) {
        console.error('Error fetching asteroid data:', error);
    }
}

// Function to fetch and display NASA space mission data (SPACEX Example)
function fetchNASAMissionsData() {
  const missionsDataBox = document.getElementById('missions-data-box');

  // NASA SPACEX API URL
  const nasaSpacexApiUrl = `https://api.spacexdata.com/v4/launches/upcoming?api_key=${apiKey}`;

  // Fetching data from NASA SpaceX API
  fetch(nasaSpacexApiUrl)
    .then(response => response.json())
    .then(data => {
      // Handling the data
      let missionsHTML = '<h2>Upcoming NASA Space Missions</h2>';

      // Iterate through the data to display each mission
      data.forEach(mission => {
        missionsHTML += `
          <div class="mission">
            <h3>${mission.name}</h3>
            <p><strong>Launch Date:</strong> ${new Date(mission.date_utc).toLocaleDateString()}</p>
            <p><strong>Details:</strong> ${mission.details || "Details not available."}</p>
          </div>
          <hr class="mission-separator">
        `;
      });

      // Display the formatted mission data in the HTML container
      missionsDataBox.innerHTML = missionsHTML;
      missionsDataBox.style.display = 'block';
    })
    .catch(error => {
      console.error('Error fetching data from NASA API:', error);
      missionsDataBox.innerHTML = '<p>Error loading data. Please try again later.</p>';
      missionsDataBox.style.display = 'block';
    });
}

// Event listener for the button to fetch data when clicked
document.getElementById('show-missions-btn').addEventListener('click', () => {
  fetchNASAMissionsData();
});

// Function to fetch and display NASA space mission data
function fetchNASAMissionsData() {
  const missionsDataBox = document.getElementById('missions-data-box');
  const nasaSpacexApiUrl = `https://api.spacexdata.com/v4/launches/upcoming?api_key=${apiKey}`;

  fetch(nasaSpacexApiUrl)
    .then(response => response.json())
    .then(data => {
      let missionsHTML = '<h2>Upcoming NASA Space Missions</h2>';
      data.forEach(mission => {
        missionsHTML += `
          <div class="mission">
            <h3>${mission.name}</h3>
            <p><strong>Launch Date:</strong> ${new Date(mission.date_utc).toLocaleDateString()}</p>
            <p><strong>Details:</strong> ${mission.details || "Details not available."}</p>
          </div>
          <hr>
        `;
      });
      missionsDataBox.innerHTML = missionsHTML;
      missionsDataBox.style.display = 'block';
    })
    .catch(error => {
      console.error('Error fetching data from NASA API:', error);
      missionsDataBox.innerHTML = '<p>Error loading data. Please try again later.</p>';
      missionsDataBox.style.display = 'block';
    });
}

const alignmentsDiv = document.getElementById('alignments');

        document.getElementById('fetchAlignments').addEventListener('click', () => {
            fetch(`https://api.le-systeme-solaire.net/rest/bodies/`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    displayAlignments(data);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    alignmentsDiv.innerHTML = 'Error fetching data';
                });
        });

        function displayAlignments(data) {
            alignmentsDiv.innerHTML = ''; // Clear previous content
            const alignments = data.bodies.filter(body => body.isPlanet); // Filter for planets

            if (alignments.length === 0) {
                alignmentsDiv.innerHTML = 'No planetary alignments found.';
                return;
            }

            const ul = document.createElement('ul');
            alignments.forEach(planet => {
                const li = document.createElement('li');
                li.textContent = `Planet: ${planet.englishName}, Mass: ${planet.mass?.massValue} x 10^${planet.mass?.massExponent} kg`;
                ul.appendChild(li);
            });
            alignmentsDiv.appendChild(ul);
        }

        const asteroidDataDiv = document.getElementById('asteroidData');

        document.getElementById('fetchAsteroids').addEventListener('click', () => {
            fetch(`https://api.le-systeme-solaire.net/rest/neo/`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    displayAsteroids(data);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    asteroidDataDiv.innerHTML = 'Error fetching data';
                });
        });

        function displayAsteroids(data) {
            asteroidDataDiv.innerHTML = ''; // Clear previous content
            const asteroids = data.near_earth_objects; // Assuming the response contains 'near_earth_objects'

            if (!asteroids || asteroids.length === 0) {
                asteroidDataDiv.innerHTML = 'No asteroid data found.';
                return;
            }

            const ul = document.createElement('ul');
            for (const date in asteroids) {
                asteroids[date].forEach(asteroid => {
                    const li = document.createElement('li');
                    li.textContent = `Asteroid Name: ${asteroid.name}, Hazardous: ${asteroid.is_potentially_hazardous_asteroid}, Close Approach Date: ${asteroid.close_approach_data[0].close_approach_date}`;
                    ul.appendChild(li);
                });
            }
            asteroidDataDiv.appendChild(ul);
        }


        document.getElementById('fetchAsteroids').addEventListener('click', () => {
            // Update this URL with the actual endpoint for fetching NEOs
            const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
            const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${apiKey}`;

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    displayAsteroids(data);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    asteroidDataDiv.innerHTML = 'Error fetching data';
                });
        });

        function displayAsteroids(data) {
            asteroidDataDiv.innerHTML = ''; // Clear previous content
            const asteroids = data.near_earth_objects; // Access the NEOs data

            if (!asteroids || Object.keys(asteroids).length === 0) {
                asteroidDataDiv.innerHTML = 'No asteroid data found.';
                return;
            }

            const ul = document.createElement('ul');
            for (const date in asteroids) {
                asteroids[date].forEach(asteroid => {
                    const li = document.createElement('li');
                    li.textContent = `Asteroid Name: ${asteroid.name}, Hazardous: ${asteroid.is_potentially_hazardous_asteroid}, Close Approach Date: ${asteroid.close_approach_data[0].close_approach_date}`;
                    ul.appendChild(li);
                });
            }
            asteroidDataDiv.appendChild(ul);
        }


        document.getElementById('fetchDataBtn').addEventListener('click', function() {
          const apiKey = 'V85euJic4uYVvGKpDn3d08i2aP6wawBl9IDZI04L'; // Your NASA API Key
          const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
          
          // Simulated NASA time-related data
          const timeData = [
              {
                  title: "Theory of Relativity and Time Dilation",
                  description: "NASA has explored Einstein's Theory of Relativity, particularly the idea of time dilation. According to relativity, time moves slower for objects traveling close to the speed of light. Astronauts could theoretically age more slowly compared to people on Earth."
              },
              {
                  title: "Gravity and Time",
                  description: "According to Einstein’s General Theory of Relativity, the stronger the gravitational field, the slower time moves. NASA’s study of black holes brings scientists closer to understanding extreme conditions that affect our concept of time."
              },
              {
                  title: "NASA's Work with Wormholes",
                  description: "Wormholes are theoretical passages through space-time. NASA scientists have studied them as mathematical solutions to general relativity, though they are speculative and unproven as a means of time travel."
              },
              {
                  title: "Cosmic Background Radiation",
                  description: "NASA's COBE and WMAP missions have explored the early universe, providing insights into the conditions shortly after the Big Bang, giving us a 'look back in time' at the history of the universe."
              },
              {
                  title: "Simulations and Time Machines in Thought Experiments",
                  description: "NASA scientists engage in theoretical simulations involving space-time. These thought experiments help push the boundaries of our understanding of the universe."
              }
          ];
      
          // Display the data in HTML
          const contentDiv = document.getElementById('content');
          contentDiv.innerHTML = ''; // Clear previous content
      
          timeData.forEach(item => {
              contentDiv.innerHTML += `
                  <h2>${item.title}</h2>
                  <p>${item.description}</p>
              `;
          });
      });

      // Event listener for button click
    document.getElementById('fetchButton').addEventListener('click', function() {
        fetchNEOData();
    });

    function fetchNEOData() {
        // URL for NASA's Near-Earth Object (NEO) feed
        const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-01&end_date=2024-10-08&api_key=${apiKey}`; 

        // Fetch the NEO data
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                displayNEOData(data.near_earth_objects);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                document.getElementById('challengeList').innerHTML = '<li>Error fetching data. Please try again later.</li>';
            });
    }

    function displayNEOData(neoData) {
        const challengeList = document.getElementById('challengeList');
        challengeList.innerHTML = ''; // Clear previous content

        // Loop through NEOs and display their names and details
        for (const date in neoData) {
            neoData[date].forEach(neo => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>${neo.name}</strong> - 
                    Estimated Diameter: ${neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} km to ${neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km<br>
                    Miss Distance: ${neo.close_approach_data[0].miss_distance.kilometers} km<br>
                    Hazardous: ${neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                `;
                challengeList.appendChild(listItem);
            });
        }
    }
    const heatMapButton = document.getElementById('heatMapButton');
        const heatMapImage = document.getElementById('heatMapImage');
        const errorMessage = document.getElementById('errorMessage');
        const heatMapDetails = document.getElementById('heatMapDetails');

        heatMapButton.addEventListener('click', function() {
            fetchHeatMapData();
        });

        function fetchHeatMapData() {
            const url = `https://power.larc.nasa.gov/api/temporal/climatology/2010/2020/annual/2m_air_temperature?community=AG&longitude=-100&latitude=40&format=JSON&api_key=${apiKey}`;

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    // Log the data to inspect
                    console.log(data);

                    // Display the temperature data (for example, displaying a specific temperature value)
                    heatMapDetails.textContent = `Average Annual Temperature (2010-2020): ${data.properties.parameter['2m_air_temperature'].annual_mean['40,-100']} °C`;

                    // Display a placeholder heat map image (customize this part with actual data visualization)
                    heatMapImage.src = 'https://climate.nasa.gov/system/news_items/main_images/3139_PIA23174-web.jpg';

                    errorMessage.textContent = '';  // Clear any previous error messages
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    heatMapImage.src = '';  // Clear image on error
                    heatMapDetails.textContent = '';  // Clear details
                    errorMessage.textContent = 'Error fetching heat map data. Please try again later.';
                });
        }


// Fetch asteroid data from NASA's NeoWs API
async function fetchAsteroidData() {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-01&end_date=2024-10-07&api_key=${apiKey}`);
    const data = await response.json();
    return data.near_earth_objects;
}


// NASA API key

// Elements
// NASA API key

// Elements
const showGraphsBtn = document.getElementById('showGraphsBtn');
const chartsContainer = document.getElementById('charts-container');
const loadingMessage = document.getElementById('loading');

// Fetch asteroid data from NASA's NeoWs API
async function fetchAsteroidData() {
    try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-01&end_date=2024-10-07&api_key=${apiKey}`);
        const data = await response.json();
        return data.near_earth_objects;
    } catch (error) {
        console.error('Error fetching data from NASA API:', error);
        alert('Failed to fetch data from NASA API');
    }
}

// Function to extract relevant data for orbits and flybys
function extractAsteroidData(asteroids) {
    const orbitData = [];
    const flybyData = [];

    Object.values(asteroids).forEach(asteroidArray => {
        asteroidArray.forEach(asteroid => {
            if (asteroid.orbital_data && asteroid.close_approach_data.length > 0) {
                const orbitInfo = {
                    name: asteroid.name,
                    semi_major_axis: parseFloat(asteroid.orbital_data.semi_major_axis),
                    eccentricity: parseFloat(asteroid.orbital_data.eccentricity),
                    orbit_period: parseFloat(asteroid.orbital_data.orbital_period) // Orbital period (days)
                };
                orbitData.push(orbitInfo);

                const flybyInfo = {
                    name: asteroid.name,
                    miss_distance: parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers),
                    approach_date: asteroid.close_approach_data[0].close_approach_date // Close approach date
                };
                flybyData.push(flybyInfo);
            }
        });
    });

    return { orbitData, flybyData };
}

// Function to create a chart showing orbit changes over time
function createOrbitChangeChart(orbitData) {
    const ctx = document.getElementById('orbitChart').getContext('2d');
    const chartData = {
        labels: orbitData.map(a => a.name),
        datasets: [
            {
                label: 'Semi-Major Axis (AU)',
                data: orbitData.map(a => a.semi_major_axis),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false,
                type: 'line'
            },
            {
                label: 'Orbital Period (Days)',
                data: orbitData.map(a => a.orbit_period),
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderWidth: 2,
                fill: false,
                type: 'line'
            }
        ]
    };
    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            }
        }
    });
}

// Function to create a chart showing how close asteroids get to Earth
function createFlybyChart(flybyData) {
    const ctx = document.getElementById('flybyChart').getContext('2d');
    const chartData = {
        labels: flybyData.map(a => a.approach_date),
        datasets: [
            {
                label: 'Miss Distance (km)',
                data: flybyData.map(a => a.miss_distance),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 4,
                type: 'line'
            }
        ]
    };
    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Miss Distance (km)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            }
        }
    });
}

// Function to display the charts when the button is clicked
async function showGraphs() {
    loadingMessage.style.display = 'block'; // Show loading message

    // Fetch asteroid data
    const asteroidData = await fetchAsteroidData();
    const { orbitData, flybyData } = extractAsteroidData(asteroidData);

    loadingMessage.style.display = 'none'; // Hide loading message
    chartsContainer.style.display = 'flex'; // Show charts container

    // Create the charts
    createOrbitChangeChart(orbitData); // Show orbit changes over time
    createFlybyChart(flybyData); // Show close approaches to Earth
}

// Add event listener to the button
showGraphsBtn.addEventListener('click', showGraphs);

// Elements
const arButton = document.getElementById('arButton');
const vrButton = document.getElementById('vrButton');
const featureTitle = document.getElementById('feature-title');
const featureContent = document.getElementById('feature-content');

// Fetch NASA mission data related to AR or VR
async function fetchNasaData() {
    try {
        loadingMessage.style.display = 'block'; // Show loading message
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-01&end_date=2024-10-07&api_key=${apiKey}`);
        const data = await response.json();
        loadingMessage.style.display = 'none'; // Hide loading message
        return data.near_earth_objects;
    } catch (error) {
        console.error('Error fetching NASA data:', error);
        alert('Failed to fetch data from NASA API');
    }
}

// Display AR features
async function showArFeatures() {
    featureTitle.textContent = 'Augmented Reality (AR) in NASA';
    const nasaData = await fetchNasaData();

    // Extract and display a limited amount of data
    const latestAsteroid = nasaData['2024-10-01'][0];

    featureContent.innerHTML = `
        <p><strong>Astronaut Training:</strong> NASA uses AR to assist astronauts in spacewalks and training. AR overlays 3D models and instructions to improve efficiency.</p>
        <p><strong>Mission Support:</strong> Engineers and scientists use AR to visualize the Martian landscape in real time through data from Mars rovers like Curiosity and Perseverance.</p>
        <p><strong>Remote Collaboration:</strong> AR helps ground teams see what astronauts are seeing in space and offer real-time guidance during complex tasks.</p>
        <p><strong>Public AR Experiences:</strong> NASA has developed AR apps that allow the public to project 3D models of spacecraft and planetary landscapes.</p>
        
        <hr>

        <h3>Latest NASA Data:</h3>
        <p><strong>Asteroid Name:</strong> ${latestAsteroid.name}</p>
        <p><strong>Approach Date:</strong> ${latestAsteroid.close_approach_data[0].close_approach_date}</p>
        <p><strong>Miss Distance (km):</strong> ${latestAsteroid.close_approach_data[0].miss_distance.kilometers}</p>
    `;
}

// Display VR features
async function showVrFeatures() {
    featureTitle.textContent = 'Virtual Reality (VR) in NASA';
    const nasaData = await fetchNasaData();

    // Extract and display a limited amount of data
    const latestAsteroid = nasaData['2024-10-01'][0];

    featureContent.innerHTML = `
        <p><strong>Virtual Spacewalks:</strong> NASA uses VR to simulate spacewalks, allowing astronauts to practice operating in zero-gravity environments without real risks.</p>
        <p><strong>Habitat Simulations:</strong> VR simulates life on Mars or the ISS, helping astronauts train for missions in realistic environments.</p>
        <p><strong>Scientific Visualization:</strong> VR is used to visualize large-scale cosmic phenomena, such as planetary movements, asteroid orbits, and black holes.</p>
        <p><strong>Public VR Experiences:</strong> NASA provides virtual reality tours of the International Space Station and Mars, allowing the public to explore these environments virtually.</p>

        <hr>

        <h3>Latest NASA Data:</h3>
        <p><strong>Asteroid Name:</strong> ${latestAsteroid.name}</p>
        <p><strong>Approach Date:</strong> ${latestAsteroid.close_approach_data[0].close_approach_date}</p>
        <p><strong>Miss Distance (km):</strong> ${latestAsteroid.close_approach_data[0].miss_distance.kilometers}</p>
    `;
}

// Add event listeners to buttons
arButton.addEventListener('click', showArFeatures);
vrButton.addEventListener('click', showVrFeatures);

const saveButton = document.getElementById('saveButton');
const shareButton = document.getElementById('shareButton');

// Fetch NASA mission data related to AR or VR
async function fetchNasaData() {
    try {
        loadingMessage.style.display = 'block'; // Show loading message
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-01&end_date=2024-10-07&api_key=${apiKey}`);
        const data = await response.json();
        loadingMessage.style.display = 'none'; // Hide loading message
        return data.near_earth_objects;
    } catch (error) {
        console.error('Error fetching NASA data:', error);
        alert('Failed to fetch data from NASA API');
    }
}

// Display AR features
async function showArFeatures() {
    featureTitle.textContent = 'Augmented Reality (AR) in NASA';
    const nasaData = await fetchNasaData();

    // Extract and display a limited amount of data
    const latestAsteroid = nasaData['2024-10-01'][0];

    featureContent.innerHTML = `
        <p><strong>Astronaut Training:</strong> NASA uses AR to assist astronauts in spacewalks and training. AR overlays 3D models and instructions to improve efficiency.</p>
        <p><strong>Mission Support:</strong> Engineers and scientists use AR to visualize the Martian landscape in real time through data from Mars rovers like Curiosity and Perseverance.</p>
        <p><strong>Remote Collaboration:</strong> AR helps ground teams see what astronauts are seeing in space and offer real-time guidance during complex tasks.</p>
        <p><strong>Public AR Experiences:</strong> NASA has developed AR apps that allow the public to project 3D models of spacecraft and planetary landscapes.</p>
        
        <hr>

        <h3>Latest NASA Data:</h3>
        <p><strong>Asteroid Name:</strong> ${latestAsteroid.name}</p>
        <p><strong>Approach Date:</strong> ${latestAsteroid.close_approach_data[0].close_approach_date}</p>
        <p><strong>Miss Distance (km):</strong> ${latestAsteroid.close_approach_data[0].miss_distance.kilometers}</p>
    `;
}

// Display VR features
async function showVrFeatures() {
    featureTitle.textContent = 'Virtual Reality (VR) in NASA';
    const nasaData = await fetchNasaData();

    // Extract and display a limited amount of data
    const latestAsteroid = nasaData['2024-10-01'][0];

    featureContent.innerHTML = `
        <p><strong>Virtual Spacewalks:</strong> NASA uses VR to simulate spacewalks, allowing astronauts to practice operating in zero-gravity environments without real risks.</p>
        <p><strong>Habitat Simulations:</strong> VR simulates life on Mars or the ISS, helping astronauts train for missions in realistic environments.</p>
        <p><strong>Scientific Visualization:</strong> VR is used to visualize large-scale cosmic phenomena, such as planetary movements, asteroid orbits, and black holes.</p>
        <p><strong>Public VR Experiences:</strong> NASA provides virtual reality tours of the International Space Station and Mars, allowing the public to explore these environments virtually.</p>

        <hr>

        <h3>Latest NASA Data:</h3>
        <p><strong>Asteroid Name:</strong> ${latestAsteroid.name}</p>
        <p><strong>Approach Date:</strong> ${latestAsteroid.close_approach_data[0].close_approach_date}</p>
        <p><strong>Miss Distance (km):</strong> ${latestAsteroid.close_approach_data[0].miss_distance.kilometers}</p>
    `;
}

// Save data locally as a text file
function saveData() {
    const content = `${featureTitle.textContent}\n\n${featureContent.innerText}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nasa_features.txt';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Share data via WhatsApp, Email, and other apps
function shareData() {
    const content = `${featureTitle.textContent}\n\n${featureContent.innerText}`;
    const encodedContent = encodeURIComponent(content);
    
    // WhatsApp share link
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodedContent}`;
    
    // Email share link
    const emailLink = `mailto:?subject=NASA%20AR%20and%20VR%20Features&body=${encodedContent}`;
    
    // Open share options in a new tab
    const options = `
        <p><a href="${whatsappLink}" target="_blank">Share via WhatsApp</a></p>
        <p><a href="${emailLink}" target="_blank">Share via Email</a></p>
    `;
    featureContent.innerHTML += `<hr><h3>Share:</h3>${options}`;
}

// Add event listeners to buttons
arButton.addEventListener('click', showArFeatures);
vrButton.addEventListener('click', showVrFeatures);
saveButton.addEventListener('click', saveData);
shareButton.addEventListener('click', shareData);

const apiKeyWeather = 'edeb3f0189416998f804c4f1e832f605'; // Replace with your weather API key
const apiKeyNasa = 'V85euJic4uYVvGKpDn3d08i2aP6wawBl9IDZI04L';
const city = 'London'; // Change this to your desired city

document.getElementById('showWeatherButton').addEventListener('click', async () => {
    const weatherInfo = document.getElementById('weather-info');
    const solarSystemPhotos = document.getElementById('solar-system-photos');
    
    // Clear previous results
    weatherInfo.innerHTML = '';
    solarSystemPhotos.innerHTML = '';

    // Fetch weather data (example using OpenWeatherMap)
    try {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyWeather}&units=metric`);
        
        // Log the response for debugging
        console.log('Weather Response:', weatherResponse);

        // Check if the response is successful
        if (!weatherResponse.ok) {
            const errorResponse = await weatherResponse.json();
            throw new Error(`Unable to fetch weather data: ${errorResponse.message}`);
        }
        
        const weatherData = await weatherResponse.json();
        const weatherDescription = `Temperature: ${weatherData.main.temp}°C, Weather: ${weatherData.weather[0].description}`;
        weatherInfo.innerHTML = `<h2>Weather Info:</h2><p>${weatherDescription}</p>`;
    } catch (error) {
        weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        console.error('Weather Error:', error);
    }

    // Fetch NASA solar system images
    try {
        const solarSystemResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKeyNasa}`);
        
        // Log the response for debugging
        console.log('NASA Response:', solarSystemResponse);

        // Check if the response is successful
        if (!solarSystemResponse.ok) {
            const errorResponse = await solarSystemResponse.json();
            throw new Error(`Unable to fetch NASA data: ${errorResponse.msg}`);
        }
        
        const solarSystemData = await solarSystemResponse.json();
        solarSystemPhotos.innerHTML = `
            <h2>Solar System Photo:</h2>
            <img src="${solarSystemData.url}" alt="${solarSystemData.title}">
            <p>${solarSystemData.explanation}</p>
        `;
    } catch (error) {
        solarSystemPhotos.innerHTML = '<p>Error fetching solar system images.</p>';
        console.error('NASA Error:', error);
    }
});

 // Function to display deflection methods
 function displayDeflectionMethods() {
    const methodsDiv = document.getElementById('methods'); // Get reference to methods div
    methodsDiv.innerHTML = ''; // Clear previous content

    // Define deflection methods
    const deflectionMethods = [
        {
            name: 'Kinetic Impactor',
            description: 'A spacecraft that crashes into the asteroid at high speed to change its trajectory.',
            effectiveness: 'Depends on the size and speed of the spacecraft.'
        },
        {
            name: 'Gravity Tractor',
            description: 'A spacecraft hovers near the asteroid and uses its gravitational pull to change its orbit over time.',
            effectiveness: 'Effective for small asteroids and requires time to see results.'
        }
    ];

    // Loop through methods and create HTML for each
    deflectionMethods.forEach(method => {
        methodsDiv.innerHTML += `
            <h3>${method.name}</h3>
            <p>${method.description}</p>
            <p><strong>Effectiveness:</strong> ${method.effectiveness}</p>
            <hr>
        `;
    });
}

// Event listener for button click
document.getElementById('missionsButton').addEventListener('click', function() {
    const missionsContainer = document.getElementById('missionsContainer');
    missionsContainer.style.display = 'block'; // Show the container
    displayDeflectionMethods(); // Display methods
});