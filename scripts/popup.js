// popup.js
document.addEventListener('copy', () => {
 navigator.clipboard.readText()
   .then(res => {
     chrome.runtime.sendMessage({
       message: 'search',
       payload: `"${res}"`
     });
   })
 .catch(err => console.log(err));
});

document.addEventListener('DOMContentLoaded', function() {

  var checkButton = document.getElementById('URL');
  checkButton.addEventListener('click', function() {
     chrome.tabs.getSelected(null, function(tab){
    console.log(tab.url);
    if (tab.url == null) {
      return;
    }

    const input = document.createElement('input');
    input.value = tab.url;

    document.body.appendChild(input);
    input.select();

    try {
      if (document.execCommand('copy')) {
        alert("Le lien " + tab.url + " a été copié");
        showBadgeIndicator();
      }
    } catch {
    }

    input.remove();  });
  }, false);

  var checkButton = document.getElementById('GO');
  checkButton.addEventListener('click', function() {
     if (search_engine.value == "googlecom") {
         chrome.tabs.update({url:"https://www.google.com/"}); }
     if (search_engine.value == "googlefr") {
         chrome.tabs.update({url:"https://www.google.fr/"}); }
     if (search_engine.value == "googleca") {
         chrome.tabs.update({url:"https://www.google.ca/"}); }
  }, false);

}, false);
