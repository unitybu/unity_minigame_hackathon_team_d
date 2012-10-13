#pragma strict

var ballPrefab:GameObject;

private var destroyFlag:boolean;
private var fps:int = 60;
private var count:int;

private var createdBall:GameObject;

function Start () 
{

}

 function shotObject()
 {
 
 
 }


function Update () 
{

	/*if(SystemInfo.operatingSystem.Contains("iPhone") || SystemInfo.operatingSystem.Contains("Android")){
	
		for (var touch : Touch in Input.touches) {
			
			if (touch.phase == TouchPhase.Began) {
	        	    
	            //var currentTouchPoint:Vector3 = new Vector3(touch.position.x,   DistanceCameraToStage , touch.position.y); 
			
	        }
		}
		
	}else */
	if(Input.GetButtonDown("Fire1")){
			
			//get screen point
			var screenPoint:Vector3 = Input.mousePosition;
			
			//change z point
			screenPoint.z =  20;
			
			var worldPoint:Vector3 = camera.ScreenToWorldPoint(screenPoint);
			
			var direction:Vector3 = (worldPoint - transform.position).normalized;//vector
			
			createdBall = Instantiate(ballPrefab , transform.position , transform.rotation);
			
			createdBall.rigidbody.velocity = direction *  35.0;
			
			
			//yield new WaitForSeconds(1);
			
			//Destroy(this);
			
			destroyFlag = true;
	}



	if(destroyFlag){
		count++;
		
		if(count / fps >= 2){
			count = 0;
			Destroy(createdBall.gameObject);
			destroyFlag = false;
		 }
	}



}