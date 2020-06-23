var color1=document.querySelector("#color1");
var color2=document.querySelector("#color2");
var css=document.querySelector("h3")
var body=document.body;

function gradientGen(){
	body.style.background=
	"Linear-gradient(to right, "
	+color1.value 
	+", "
	+color2.value
	+")";

	css.textContent=body.style.background +";";
}
color1.addEventListener("input",gradientGen)
color2.addEventListener("input",gradientGen)

// document.querySelector("#gradient").style.background='linear-gradient(to right, color1, color2)';

// h3.createElement(inputTextNode("linear-gradient(to right, "+color1+", "+color2+")"))