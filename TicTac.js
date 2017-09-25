var turn;
var winner;
function startGame () {	
		clearBox();		
	turn="X";
	if(Math.random() < 0.5)
	{		
		turn="O";
	}	
	winner=null;
	
	setMessage(turn +" "+ " - Get's to Start");
}
function setMessage(msg) {
	$("#message").text(msg);
}
function nextMove(box) {	
		if(winner != null){
		setMessage("Game is Already Over !");		
	}
	else if($(box).text() == ""){		
		$(box).text(turn);
		switchTurn();			
	}	 
	else{	
		setMessage("That Box is Already Set");
	}
}
function switchTurn(){	
	if(checkForResult(turn)=='Won'){	
		setMessage("Congo"+"- "+ turn +" "+"! you have Won the Game ");	
		winner = turn;
		}
		else if(checkForResult(turn)=='Draw'){
		setMessage("Game Draw !"+"- ");
		winner = turn;	
	}
	else if(turn =="X")
	{ 
		turn = "O";
		setMessage(turn+"'s - Turn");
	}
	else
	{	
		turn = "X";
		setMessage(turn+"'s - Turn");		
	}	
}
function checkForResult(move) {
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
	else if (isDraw()){
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
function isDraw() {
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

$(document).ready(function(){
	startGame();
	$(".box").click(function()
	{
		nextMove(this);
	$("#Reset").click(function()
	{
		startGame();
	});
	});
});

	

	