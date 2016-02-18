// Give us slides to cycle through
var slide = 0;

function advanceSlide() {
  'use strict';

  console.log('click!');
  switch (slide) {
    case 0:
      drawBrowser(50, 50, 150, 170);
      drawServer(125, 400, 50, 100);
      drawServer(875, 200, 70, 150);
      labelItem(105, 210, 'User', '#1E4164');
      labelItem(90, 510, 'Node.js', '#000');
      labelItem(850, 360, 'Slack', '#38795D');

      // Lay out all our objects
      slide++;
      break;

    case 1:

      // Show the login button and pass the client id, scope, redirect
      drawBrowserControl(50, 50, 150, 170, 50, 30, '#666');
      drawArrow(125, 225, 125, 378, 'v', 'r', 'new');
      drawArrow(180, 450, 800, 290, 'h', 'r', 'new');
      slide++;
      break;

    case 2:

      // Show the user auths
      drawArrow(125, 225, 125, 378, 'v', 'r', 'old');
      drawArrow(180, 450, 800, 290, 'h', 'r', 'old');
      drawArrow(800, 290, 205, 120, 'h', 'l', 'new');
      drawBrowserControl(50, 50, 150, 170, 50, 30, 'green');
      slide++;
      break;

    case 3:

      // get the code
      drawArrow(800, 290, 205, 120, 'h', 'l', 'old');
      drawArrow(205, 120, 800, 290, 'h', 'r', 'new');
      drawArrow(800, 290, 180, 450, 'h', 'l', 'new');


      slide++;
      break;

    case 4:

      // Exchange the code for a token
      drawArrow(205, 120, 800, 290, 'h', 'r', 'old');
      drawArrow(800, 290, 180, 450, 'h', 'l', 'old');
      drawArrow(180, 430, 800, 270, 'h', 'r', 'new');
      drawArrow(800, 310, 180, 470, 'h', 'l', 'new');

      slide++;
      break;

    case 5:

      // Do action on user's behalf
      drawArrow(180, 430, 800, 270, 'h', 'r', 'old');
      drawArrow(800, 310, 180, 470, 'h', 'l', 'old');
      drawArrow(180, 450, 800, 290, 'h', 'r', 'new');

      break;
  }
}

// Listen for clicks
document.getElementById('oauthcanvas')
  .addEventListener('click', advanceSlide);

// Draw our browser


// drawBrowserControl(100, 100, 150, 170, 50, 20, 'red');
//
//
//
// drawServer(500, 500, 50, 100);
//
// drawBrowserControl(100, 100, 150, 170, 40, 20, 'green');
