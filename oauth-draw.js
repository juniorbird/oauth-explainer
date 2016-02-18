// Give us slides to cycle through
var slide = 0;

function advanceSlide() {
  'use strict';
  switch (slide) {
    case 0:
      drawBrowser(50, 50, 150, 170);
      drawServer(125, 400, 50, 100);
      labelItem(105, 210, 'User', '#1E4164');
      labelItem(90, 510, 'Node.js', '#000');

      // Lay out all our objects
      slide++;
      break;

    case 1:

      // Show the login button and pass the client id, scope, redirect
      slide++;
      break;

    case 2:

      // Show the user auths and get the code
      slide++;
      break;

    case 3:

      // Exchange the code for a token
      slide++;
      break;

    case 4:

      // Do action on user's behalf
      slide++;
      break;
  }
}

// Listen for clicks
var c = document.getElementById('oauthcanvas')
  .addEventListener('click', advanceSlide());

// Draw our browser


// drawBrowserControl(100, 100, 150, 170, 50, 20, 'red');
//
//
//
// drawServer(500, 500, 50, 100);
//
// drawBrowserControl(100, 100, 150, 170, 40, 20, 'green');
