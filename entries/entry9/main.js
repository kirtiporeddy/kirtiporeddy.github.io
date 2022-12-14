var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var six = document.querySelector("#six");

one.addEventListener("click", imageswap); 
	

function imageswap(){
	document.body.style.backgroundImage = "url('images/one.png')";

}

two.addEventListener("click", imageswap); 
	

function imageswap(){
	document.body.style.backgroundImage = "url('images/two.png')";

}

// {two.addEventListener("click");
// 	document.body.style.backgroundImage = "url('images/two.png')";

// }

// {three.addEventListener("click");
// 	document.body.style.backgroundImage = "url('images/three.png')";

// }

// {four.addEventListener("click");
// 	document.body.style.backgroundImage = "url('images/four.png')";

// }

// {six.addEventListener("click");
// 	document.body.style.backgroundImage = "url('images/six.png')";

// }

