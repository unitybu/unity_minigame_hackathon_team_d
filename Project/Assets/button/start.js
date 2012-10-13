#pragma strict

var skin : GUISkin;

var point : int;
var storn : int;

function start () {

}

function OnTriggerEnter(other : Collider) {
	
	if(other.gameObject.tag == "Stone-Player's"){
	
		point++;
		Debug.Log("enter");
				
	}
	
}

function OnTriggerExit(other : Collider) {
	
	if(other.gameObject.tag == "Stone-Player's"){
	
		point--;
		Debug.Log("exit");
				
	}
	
}

function OnGUI () {

	GUI.skin = skin;

	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var scoreText : String = "SCORE: " + point.ToString;
	GUI.Label(Rect(0, 0, sw/2 ,sh/4), scoreText, "score");
	

}