#pragma strict

//緑色のストーン ジェネレーター
//呼び出し時：ステージシーンロード時


var otherstone : GameObject;	//作られる緑ストーンのプレハブ
var heavystone : GameObject;	//重い紫ストーンのプレハブ
private var otherstonenum : int;	//緑色のストーンの数カウント用変数

function Start () {
	var prefab : GameObject;

	for(otherstonenum=0 ; otherstonenum<3 ; otherstonenum++){	//3個作る
		var offsx : float = Random.Range(-10,10);		//幅プラスマイナス10の中から
		var offsz : float = Random.Range(-30,30);		//奥行きプラスマイナス30の中から
		var position : Vector3 = transform.position + Vector3(offsx,0,offsz);	//Genaratorオブジェクトを中心にランダムの範囲で出現
		
		if(otherstonenum==0){
			prefab = heavystone;
		}
		else{
			prefab = otherstone;
		}
		Instantiate(prefab, position, transform.rotation);	//緑ストーンオブジェクトを指定の位置に作成
	
	
	}
	
}

function Update () {

}