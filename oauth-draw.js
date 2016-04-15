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
      labelItem(140, 300, 'User requests auth', '#4A2218');
      drawArrow(180, 450, 800, 290, 'h', 'r', 'new');
      labelItem(500, 400, 'App passes ClientID', '#4A2218');

      loadGist('658734574a8cc7c0d875');

      slide++;
      break;

    case 2:

      // Show the user auths

      // reset
      drawArrow(125, 225, 125, 378, 'v', 'r', 'old');
      drawArrow(180, 450, 800, 290, 'h', 'r', 'old');
      labelItem(140, 300, 'User requests auth', '#fff');
      labelItem(500, 400, 'App passes ClientID', '#fff');

      // draw new
      drawArrow(800, 290, 205, 120, 'h', 'l', 'new');
      labelItem(350, 150, 'Slack confirms auth', '#4A2218');
      drawBrowserControl(50, 50, 150, 170, 50, 30, 'green');

      slide++;
      break;

    case 3:

      // get the code

      // reset
      drawArrow(800, 290, 205, 120, 'h', 'l', 'old');
      labelItem(350, 150, 'Slack confirms auth', '#fff');

      // draw new
      drawArrow(205, 120, 800, 290, 'h', 'r', 'new');
      labelItem(350, 150, 'User confirms auth', '#4A2218');
      drawArrow(800, 290, 180, 450, 'h', 'l', 'new');
      labelItem(500, 400, 'Slack passes one-time code', '#4A2218');

      loadGist('3215c014203260536fa9');

      slide++;
      break;

    case 4:

      // Exchange the code for a token

      // reset
      drawArrow(205, 120, 800, 290, 'h', 'r', 'old');
      drawArrow(800, 290, 180, 450, 'h', 'l', 'old');
      labelItem(350, 150, 'User confirms auth', '#fff');
      labelItem(500, 400, 'Slack passes one-time code', '#fff');

      // draw new
      drawArrow(180, 430, 800, 270, 'h', 'r', 'new');
      labelItem(180, 330, 'App passes back one-time code and secret', '#4A2218');
      drawArrow(800, 310, 180, 470, 'h', 'l', 'new');
      labelItem(500, 420, 'Slack passes persistent token', '#4A2218');

      loadGist('125d5b0bfc2489f402ce');

      slide++;
      break;

    case 5:

      // Do action on user's behalf

      //reset
      drawArrow(180, 430, 800, 270, 'h', 'r', 'old');
      drawArrow(800, 310, 180, 470, 'h', 'l', 'old');
      labelItem(180, 330, 'App passes back one-time code and secret', '#fff');
      labelItem(500, 420, 'Slack passes persistent token', '#fff');

      // draw new
      drawArrow(180, 450, 800, 290, 'h', 'r', 'new');
      labelItem(500, 400, 'App uses token to make API call', '#4A2218');

      slide++;
      break;

    default:
      return false;
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
