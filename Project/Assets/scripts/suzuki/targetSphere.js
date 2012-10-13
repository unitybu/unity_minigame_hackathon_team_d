#pragma strict

function Start () 
{

}

function Update () 
{
	
}

//in
function OnTriggerEnter(other : Collider) {
	
	Debug.Log("ok"+other.gameObject.name,this);
	if(other.gameObject.name == "button"){
		//button_in = +1
		Debug.Log("ok_add",this);
		var contorollerObj:GameObject = GameObject.FindGameObjectWithTag("ScoreText");
		contorollerObj.SendMessage("addScore");
				
	}
	
}

//out
function OnTriggerExit(other : Collider) {
	
	if(other.gameObject.name == "button"){
		
		//button_out = -1
		Debug.Log("ok_sub",this);
		var contorollerObj:GameObject = GameObject.FindGameObjectWithTag("ScoreText");
		contorollerObj.SendMessage("subScore");
				
	}

}

function OnCollisionEnter(collisionInfo:Collision)
{
	if(collisionInfo.gameObject.tag == "Shot"){
		
		Destroy(collisionInfo.gameObject);
		
//		var contorollerObj:GameObject = GameObject.FindGameObjectWithTag("ScoreText");
//		contorollerObj.SendMessage("addScore");
		
		//Score.score += 1;
	}
}