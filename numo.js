function check(mobile, name){
    var mobilenumber = (""+mobile).split("");
    var personname = (""+name).split("");
    alert("You Have Entered Name: "+name); chaldean(personname);
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

function chaldean(personname){
    alert("Your Name Array is"+ personname);
var namearray;
for(i=0;i<personname.length;i++){
    alert(personname[i]);
    if(personname[i]=="A" || personname[i]=="a" || personname[i]=="J" || personname[i]=="j" || personname[i]=="Q" || personname[i]=="q" || personname[i]=="Y" || personname[i]=="y"){
        alert("Match Found at "+ personname[i]);
    }else if(personname[i]=="B" || personname[i]=="b" || personname[i]=="K" || personname[i]=="k" || personname[i]=="R" || personname[i]=="r"){
        alert("Match Found at "+ personname[i]);
    }else if(personname[i]=="C" || personname[i]=="c" || personname[i]=="G" || personname[i]=="g" || personname[i]=="L" || personname[i]=="l" || personname[i]=="S" || personname[i]=="s"){
        alert("Match Found at "+ personname[i]);
    }else if(personname[i]=="D" || personname[i]=="d" || personname[i]=="M" || personname[i]=="m" || personname[i]=="T" || personname[i]=="t"){
        alert("Match Found at "+ personname[i]);
    }else if(personname[i]=="E" || personname[i]=="e" || personname[i]=="H" || personname[i]=="h" || personname[i]=="N" || personname[i]=="n" || personname[i]=="X" || personname[i]=="x"){
        alert("Match Found at "+ personname[i]);
    }else if(personname[i]=="U" || personname[i]=="u" || personname[i]=="V" || personname[i]=="v" || personname[i]=="W" || personname[i]=="w"){
        alert("Match Found at "+ personname[i]);
    }else if(personname[i]=="O" || personname[i]=="o" || personname[i]=="Z" || personname[i]=="z"){
        alert("Match Found at "+ personname[i]);
    }else if(personname[i]=="F" || personname[i]=="f" || personname[i]=="P" || personname[i]=="p"){
        alert("Match Found at "+ personname[i]);
    }else{
        alert("Didnt Match at "+ personname[i]);
    }
    
}
}