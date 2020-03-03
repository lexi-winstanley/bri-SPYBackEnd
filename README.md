# bri-SPY Back End
[Front End Repository](https://github.com/lexi-winstanley/bri-SPY)

## Motivation 
To create a mobile game that would be low stress and fun to play as well as beautiful to look at. 

## Description
bri-SPY is a "Where's Waldo?" inspired React Native mobile game in which users pinch-to-zoom and pan to find the hidden character, Brian, then double tap to stop the clock and store their time. If their time beats the stored "Best Time" for that image they are notified. 

## Technical Information
This repository is dedicated to the back end of the bri-SPY application which includes custom API routes to facilitate storage of user information and times for specific images. After the application loads the user is presented with a sign-in screen powered by Google Authentication, once the user successfully signs in an API call is made to check if the user exists in the MongoDB database. If they already exist their information is returned to the front end to personalize the user's display and allow for storage of their image solve times. If the user does not exist in the database their information is stored. The user can then choose from the library of images and begin playing. Once they click an image and press the "Start" button, a timer begins and the user can pinch-to-zoom and pan around the image in order to find the hidden icon. Once they find the icon they double tap which stops the timer and makes another API call to determine if they have beat the stored best time for the specific image they chose. The user is alerted on the next screen if they achieved a new best time and is presented with the option to return to the image library or continue to the next image. 

## Role
Technical lead of a three person development team. Collaborated with team members regarding application functionality and design. Helped team members as needed to deliver integration with Google Authentication, timer functionality and was responsible for all other code including the backend as well as styling to comply agreed upon design. Also created custom component to handle pinch-to-zoom, pan and double tap actions during game play. 

## Collaborators
[Edouard](https://github.com/edepaolo)
[Saranda](https://github.com/annda7)

## Technologies Used
JavaScript
<br/>MongoDB
<br/>Mongoose
<br/>Node.js
<br/>Express
<br/>Heroku
<br/>**Node Packages:** 
<br/>express, mongoose
