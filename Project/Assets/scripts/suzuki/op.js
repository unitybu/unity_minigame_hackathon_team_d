#pragma strict

var texture:Texture;
var skin:GUIStyle;

function Start () {

}

function Update () {

}

function OnGUI(){
	 if (GUI.Button (Rect (0, 0,Screen.width,Screen.height), texture , skin)){
	 	Application.LoadLevel("Stage");
	 }
} 