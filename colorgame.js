var colors= generateRandomColors(6);
var numSquares="6" //6 or 3
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var colorDisplay =document.querySelector("#colorDisplay");
var pickedColor=pickColor();
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");
colorDisplay.textContent=pickedColor;

easyButton.addEventListener("click",function(){
	numSquares="3";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0 ; i<squares.length; i++){
		if(colors[i]){ //i>3 means colors[i]==false 
	squares[i].style.background =colors[i];
}
else{
	squares[i].style.display="none";
}
}

})
hardButton.addEventListener("click",function(){
	numSquares="6"
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0 ; i<squares.length; i++){
	squares[i].style.background =colors[i];
	squares[i].style.display="block"; //when you click on easy mode then click on hard mode 
								//if this block sentence isnt there in code then squares[3/4/5].style.display="none"
								// cuz you had previously clicked on easy button
}
})

//to reset everything
resetButton.addEventListener("click",function(){
	messageDisplay.textContent="";
 colors=generateRandomColors(numSquares);	
 pickedColor=pickColor();
 colorDisplay.textContent=pickedColor;
 for(var i=0 ; i<squares.length; i++){
	squares[i].style.background =colors[i];
}
 h1.style.background="steelblue";
 this.textContent="New Game";
});


for(var i=0 ; i<squares.length; i++){
	squares[i].style.background =colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;

		if(clickedColor===pickedColor){
			console.log(clickedColor,pickedColor);
			//if rgba(22, 233, 212)=clickedcolor  rgba(22,233,212)=pickedColor it will be wrong 
			messageDisplay.textContent="Correct";
			changeColors(clickedColor);
			resetButton.textContent="Play Game?";
			h1.style.background=pickedColor;

		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

//for changing colors of all squares once guessed
function changeColors(color){
for(var i=0 ; i<squares.length; i++){
	squares[i].style.background=color;
}
}
//for picking random color as question
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(number){
	var arr =[]
	//creating randomcolors as elements of array
	for(var i=0;i<number;i++){
		var r= Math.floor(Math.random() * 256);
		var g= Math.floor(Math.random() * 256);
		var b= Math.floor(Math.random() * 256);
		arr[i]="rgb(" + r + ", " + g + ", "  + b + ")"; //here the string syntax is vv important
	}
	return arr;
}