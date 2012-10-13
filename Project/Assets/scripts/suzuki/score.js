#pragma strict

private var score:int;

function addScore () {
	
	Debug.Log("add",this);
	score++;
	guiText.text = score.ToString();
} 

function subScore () {
	
	score--;
	guiText.text = score.ToString();
} 

function Start () {
	score = 0;
}

function Update () {
	guiText.text = score.ToString();
}