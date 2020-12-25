window.addEventListener("load", function () {
  $('nav').addClass("loaded");
  const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

//Cookies
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function buttonChange(id){
  var value = getCookie("button-" + id)
  if (value == "true") {
      document.cookie = "button-" + id + "=false";
      console.log('New value "false" on ' + 'button-' + id);
      UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Light mode aktivován!', pos: 'bottom-left', status: 'success', timeout: '1800'})
  } else {
      document.cookie = "button-" + id + "=true";
      console.log('New value "true" on ' + 'button-' + id);
      UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Dark mode aktivován!', pos: 'bottom-left', status: 'success', timeout: '1800'})
  }
}
function buttonCheck(id){
  var value = getCookie("button-" + id)
  if (value == "true"){
      document.getElementById(id).checked = true;;
      console.log("Button loaded!")
  }
}
function buttonReturn(item, index) {
buttonCheck(item)
}
function buttonList(){
var buttons = ["switcher"];
buttons.forEach(buttonReturn);
}
window.onload = buttonList();