#pragma strict

function Start () 
{

}

function Update () 
{
	
}


function OnCollisionEnter(collisionInfo:Collision)
{
	if(collisionInfo.gameObject.tag == "Shot"){
		
		Destroy(collisionInfo.gameObject);
		
		var contorollerObj:GameObject = GameObject.FindGameObjectWithTag("ScoreText");
		contorollerObj.SendMessage("addScore");
		
		//Score.score += 1;
	}
}