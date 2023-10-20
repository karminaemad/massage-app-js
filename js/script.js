var InputEle = document.getElementById("input");
var ButtonEle = document.getElementById("button");
var msgEle = document.getElementById("msg");


ButtonEle.onclick = function(){
    var InputValue = InputEle.value;
    if(InputEle != ""){
        msgEle.innerHTML=InputValue;
        InputEle.value= "";
    }
}
msgEle.style.fontSize="25px";
msgEle.style.marginTop="15px"