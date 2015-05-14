var answer = 1;

function answer3(){
	var radioForm = document.getElementById("radio_form1");
		for (var i = 0; i < radioForm.length; i++) {
			var radioButton = radioForm.elements[i];
			if (radioForm.elements[1].checked) {
				alert('正解!!!!\n￥5,000,000 ');
    			location.href = "question8.html";
				break;		
			}else{
				alert("残念....");
				location.href = "finishpage.html";
				break;
			}
		}

}

function dropout3(){
	ret = confirm("棄権します。本当に宜しいですか？");
	if (ret == true){
    	alert("￥150,0000　獲得です");
    	location.href = "finishpage.html";
  }
}

function load() { 
 	var img = document.getElementById("tmp");
 	var rand = Math.floor( Math.random()*4 ); //今回使用するグラフをランダムに選ぶ
	    img.src = "audience"+rand+".png";  //オーディエンスの図の表示 
	    img.border = 10; 
	    img.width = 500; 
	    img.height = 500; 
	    img.hspace = 80; 
	    img.vspace = 80; 
} 


function fiftyfifty(){
	var erace = new Array();
	for(var i = 0; i < 2; i++){
		var randomNumber = 100;
		while(randomNumber==answer || randomNumber>3){
		randomNumber = Math.floor( Math.random()*4 ); //0-3までの乱数を生成
			erace[i] = randomNumber; //50-50で消す番号を選ぶ。ランダムに。
		}
	}	
	document.getElementById("choice"+erace[0]).style.visibility = "hidden";　
	if(erace[0]==erace[1]){ //ここではまだ、erace[0]とerace[1]が同一の数字、つまり、ひとつしか消えない可能性がある。
		while(erace[0]==erace[1] || erace[1]==answer){
			randomNumber = Math.floor( Math.random()*4 );
			erace[1] = randomNumber;
		}
	}
	document.getElementById("choice"+erace[1]).style.visibility = "hidden";　

}

function hide(){
    document.getElementById("hide").style.visibility = "hidden";　//オーディエンスが使われたら非表示にする
}
function hide1(){
    document.getElementById("hide1").style.visibility = "hidden";　//50-50が使われたら非表示にする
}

// JavaScript Document