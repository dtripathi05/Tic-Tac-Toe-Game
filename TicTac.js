function startGame () {	
		clearBox();	
	document.turn="X";
	if(Math.random() < 0.5)
	{
		document.turn ="O";
	}
	document.winner = null;
	setMessage(document.turn +" "+ " - Get's to Start");
}
function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}
function nextMove(box) {
	if(document.winner != null){		
		setMessage("Game is Already Over !");		
	}
	else if(box.innerText == ""){		
		box.innerText=document.turn;
		switchTurn();			
	}	 
	else{	
		setMessage("That Box is Already Set");
	}
}
function switchTurn(){

	if(checkForWinner(document.turn)=='Won'){		
		setMessage("Congo"+"- "+ document.turn +" "+"! you have Won the Game ");
		document.winner = document.turn;		
	}
	else if(checkForWinner(document.turn)=='Draw'){
		setMessage("Game Draw !"+"- ");
		document.winner = document.turn;		
	}
	else if(document.turn =="X")
	{ 
		document.turn = "O";
		setMessage(document.turn+"'s - Turn");
	}
	else
	{	
		document.turn = "X";
		setMessage(document.turn+"'s - Turn");		
	}	
}
function checkForWinner(move) {
	var result='None';
	if(checkRow(1,2,3,move)||
	   checkRow(4,5,6,move)||
	   checkRow(7,8,9,move)||
	   checkRow(1,4,7,move)||
	   checkRow(2,5,8,move)||
	   checkRow(3,6,9,move)||
	   checkRow(1,5,9,move)||
	   checkRow(3,5,7,move)){
		result = 'Won';
	}
	else if (draw()){
		result = 'Draw';

	}	
	return result; 
}
function checkRow (a,b,c,move) {
	var result = false;
	if($('#b' + a).text()==move && $('#b' + b).text()==move && $('#b' + c).text()==move){
		result =true;
	}
	return result;
}
function clearBox () {
	$('.Box').each(function(){
		$(this).text("");});
}
function draw() {
	var count ='No';
	$(".Box").each(function(){
		if($(this).text()==""){
			count='Yes';
		}
	});
	 var dict = {};
        dict.No = true;
        dict.Yes = false;
        return dict[count];
}

	