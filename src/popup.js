// fetch('./category.json').then(response => response.json()).then(obj => console.log(obj))

// enables <a> html tags to redirect into new tab
// const category = chrome.runtime.getURL("category.json");;
// console.log();

// window.onload = function() {
//   let dashboardButton = document.getElementById('dashboard');
//   dashboardButton.addEventListener('click', function() {
//     window.location.href = './dashboard.html'
//   });
// };


document.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    (function () {
      var ln = links[i];
      var location = ln.href;
      ln.onclick = function () {
        chrome.tabs.create({active: true, url: location});
      };
    })();
  }
});

// check the current active url every 1 second
window.setInterval(checkBrowserFocus, 1000);  

function checkBrowserFocus(){
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    if (tabs[0]) {
      const url = new URL(tabs[0].url)
      document.getElementById("url").innerHTML = "Currently Visiting: " + url.hostname
    }
  });
}