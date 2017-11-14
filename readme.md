
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
 * [models](./models)
   * [Movie.js](./models/Model.js)
 * [controllers](./controllers)
   * [MovieController.js](./models/MovieController.js)
 * [views](./views)
   * [index.hjs](./views/index.hjs)
 * [src](./src)
   * [components](./src/components)
     * [Banner.js](./src/components/Banner.js)
     * [Gmap.js](./src/components/Gmap.js)
     * [Home.js](./src/components/Home.js)
     * [styles.js](./src/components/styles.js)
   * [utils](./src/utils)
     * [APImanager.js](./src/utils/APImanager.js)
   * [app.js](./src/app.js) 
 * [routes](./routes)
   * [api.js](./routes/api.js)
 * [app.js](./app.js)

### Model
     
### Controller

### View

### routes

# Built With
* [React](https://reactjs.org/) - The front end I used
* [Node.js](https://nodejs.org/) - Backend
* [npm](https://www.npmjs.com/) - Packagement Management
* [Express](https://expressjs.com/) - Web framework for Node.js
* [Material UI](http://www.material-ui.com/) - UI library
* [Google MAP API](https://developers.google.com/maps/) - Google Map API

# TO DO LIST:
Add infowindow to each marker.
