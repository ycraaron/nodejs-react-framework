
## Code challenge
Create a service that shows on a map where movies have been filmed in San Francisco. The user should be able to filter the view using autocompletion search.
The data is available on DataSF: Film Locations.

## Links

- Website: [Website](http://13.59.162.183:3000)
- Linkedin Profile: [https://www.linkedin.com/in/craaronyang/]

## Introduction

- Tech stack
     - React+Node.js+MongoDB
- As is specified in code chanllenge, the website is developed according to the basic functionality requirements.

- Since I didn't have any experience related to React or Node.js programming before, this is the first Full-stack React + Node.js web application I have ever built. Your advice would be precious to me to make improvements. Thanks for taking time going through this document. 

## Functionality
### Frontend (React)
     1. Display the map where movies have been filmed in San Francisco.
     2. Provide an autocompletion search bar for user to filter the moives.
### Backend (Node.js)
     1. Collect {lat, lng} data with their addresses using Geocode.
     2. Prepare and process data to be displayed in frontend.

## Design
The whole web application follows the standard MVC pattern and have RESTful API.

## Project structure(exclude dependencies)
The project is built with express, which is a widely used web framework for Node.js
.
 * [models](./models)                                  // Directory for the model files related to collections in MongoDB.
   * [Movie.js](./models/Model.js)                     // Model for MovieSchema
 * [controllers](./controllers)                        // Directory for controller files
   * [MovieController.js](./models/MovieController.js) // Controller for MovieSchema
 * [views](./views)                                    // Directory for HTML templates
   * [index.hjs](./views/index.hjs)                    // Template for main page
 * [src](./src)                                        // Directory for JS source code
   * [components](./src/components)                    // Directory for components
     * [Banner.js](./src/components/Banner.js)         // Bottom bar component
     * [Gmap.js](./src/components/Gmap.js)             // Google Map component
     * [Home.js](./src/components/Home.js)             // Home page component
     * [styles.js](./src/components/styles.js)         // File which exports styles needed in other JS file
   * [utils](./src/utils)                              // Directory for saving those wrapper/helper classes
     * [APImanager.js](./src/utils/APImanager.js)      // Wrapper class for sending requests
   * [app.js](./src/app.js)                            // Entry point for my page             
 * [routes](./routes)                                  // Directory for routers
   * [api.js](./routes/api.js)                         // Router for API call to MovieController
 * [app.js](./app.js)                                  // Entry point for whole App
 

## Built With
* [React](https://reactjs.org/) - The front end I used
* [Node.js](https://nodejs.org/) - Backend
* [npm](https://www.npmjs.com/) - Packagement Management
* [Express](https://expressjs.com/) - Web framework for Node.js
* [Material UI](http://www.material-ui.com/) - UI library
* [Google MAP API](https://developers.google.com/maps/) - Google Map API

## TO DO LIST:
Add infowindow to each marker.
