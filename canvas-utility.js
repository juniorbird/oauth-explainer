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
  ctx.clearRect(browserx + 1, browsery + (browserheight / 10) + 1, browserwidth - 2, (browserheight * .9) - 27);

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

function drawArrow(xstart, ystart, xend, yend, vorh, rorl, neworold) {
  'use strict';

  let c = document.getElementById('oauthcanvas');
  let ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(xstart, ystart);
  ctx.lineTo(xend, yend);

  // Draw arrow head
  if (vorh === 'v' && rorl === 'r') {
    ctx.lineTo(xend - 20, yend - 20);
    ctx.moveTo(xend + 20, yend - 20);
    ctx.lineTo(xend, yend);
  } else if (vorh === 'h' && rorl === 'l') {
    ctx.lineTo(xend + 20, yend - 20);
    ctx.moveTo(xend + 20, yend + 20);
    ctx.lineTo(xend, yend);
  } else if (vorh === 'h' && rorl === 'r') {
    ctx.lineTo(xend - 20, yend - 20);
    ctx.moveTo(xend - 20, yend + 20);
    ctx.lineTo(xend, yend);
  }

  if (neworold === 'new') {
    ctx.strokeStyle = '#4A2218';
  } else {
    ctx.strokeStyle = '#fff';
  }

  ctx.stroke();
}

function loadGist(gistId) {
  var element = document.getElementById('code');
  var callbackName = "gist_callback";
  window[callbackName] = function (gistData) {
    delete window[callbackName];
    var html = '<link rel="stylesheet" href="' + gistData.stylesheet + '"></link>';
    html += gistData.div;
    element.innerHTML = html;
    script.parentNode.removeChild(script);
  };
  var script = document.createElement("script");
  script.setAttribute("src", "https://gist.github.com/" + gistId + ".json?callback=" + callbackName);
  document.body.appendChild(script);
}
