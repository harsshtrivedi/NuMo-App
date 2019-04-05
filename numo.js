function check(mobile, name){
    var mobilenumber = (""+mobile).split("");
    var personname = (""+name).split("");
    alert(name[2]);
    if(mobilenumber.length!=10){
        alert("Enterred Mobile Number "+mobile+"is not 10 Digits");
    } else{
        single(mobilenumber);
    }
}

function single(mobilenumber){
var mobilesum = 0;
for(var i=0; i<mobilenumber.length;i++){
    mobilesum += parseInt(mobilenumber[i]);
}
var mobilenumber = (""+mobilesum).split("");
if(mobilenumber.length>1){
    single(mobilenumber);
}else{
    alert("Sum is: "+mobilesum); exit;
}
}

function chaldean(name){
AIJQY
BKR
CGLS
DMT
EHNX
UVW
OZ
FP
}