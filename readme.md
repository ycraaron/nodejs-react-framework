# Code challenge
Create a service that shows on a map where movies have been filmed in San Francisco. The user should be able to filter the view using autocompletion search.
The data is available on DataSF: Film Locations.

# Links

- Website: [http://13.59.162.183:3000]
- Linkedin Profile: [https://www.linkedin.com/in/craaronyang/]

# Introduction
Thanks for taking time going through this document. This is my first React + Node.js web application I have ever built. Your advice would be precious to me to make improvements.

## Design
The design of the whole web application follows the standard MVC pattern and provides RESTful API.
  ### Functionality
    - Frontend (React)
      1. Display the map where movies have been filmed in San Francisco.
      2. Provide an autocompletion search bar for user to filter the moives.
    - Backend (Node.js)
      1. Collect {lat, lng} data with their addresses using Geocode.
      2. Prepare and process data to be displayed in frontend.

# TO DO LIST:
Add label to each marker.
