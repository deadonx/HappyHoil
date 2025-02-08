let names = document.getElementById('text');
let input = document.getElementById('holder');
let button = document.getElementById('submit');
let title = document.getElementById('title');
function ShowName(valuess) {
  console.log(input.value);
 history.pushState({},(input.value))
 title.innerHTML = (input.value);
  names.innerHTML = (input.value) ;
}

button.addEventListener ('click', () => {
console.log("clicked");
button.style.display = "none";
input.style.display = "none";
ShowName();


});
