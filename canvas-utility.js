function drawServer(startx, starty, width, height) {
  'use strict';
  let c = document.getElementById('oauthcanvas');
  let ctx = c.getContext('2d');
  ctx.beginPath();

  // ctx.strokeRect(150, 100, 100, 100);
  ctx.strokeStyle = '#000';
  ctx.ellipse(startx, starty, width, 20, 0, 0, 2 * Math.PI);
  ctx.ellipse(startx, starty + height, width, 20, 0, 0, Math.PI);
  ctx.lineTo(startx - width, starty);
  ctx.stroke();
}

function drawBrowser(startx, starty, width, height) {
  'use strict';

  // Size our controls
  let navheight = height / 10;

  let c = document.getElementById('oauthcanvas');
  let ctx = c.getContext('2d');

  // Draw the outer nav
  ctx.strokeStyle = '#1E4164';
  ctx.strokeRect(startx, starty, width, height);

  // Draw the top nav
  ctx.fillStyle = '#1E4164';
  ctx.fillRect(startx, starty, width, navheight);

}

function drawBrowserControl(browserx, browsery, browserwidth, browserheight, contwidth, contheight, color) {
  'use strict';

  // First, clear what's in the browser
  let c = document.getElementById('oauthcanvas');
  let ctx = c.getContext('2d');
  ctx.clearRect(browserx + 1, browsery + (browserheight / 10) + 1, browserwidth - 2, (browserheight * .9 - 2));

  ctx.fillStyle = color;
  let offsetx = (browserwidth - contwidth) / 2;
  let offsety = (browserheight - contheight) / 2;
  ctx.fillRect(browserx + offsetx, browsery + offsety, contwidth, contheight);
}

function labelItem(xpos, ypos, labelText, color) {
  'use strict';

  let c = document.getElementById('oauthcanvas');
  let ctx = c.getContext('2d');
  ctx.fillStyle = color;
  ctx.font = '20px Helvetica';
  ctx.fillText(labelText, xpos, ypos);

}
