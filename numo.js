//master function raised from button
function check(mobile, name){
    var mobilenumber = (""+mobile).split("");
    var personname = (""+name).split("");
    alert("You Have Entered Name: "+name); 
    chaldean(personname);
    if(mobilenumber.length!=10){
        alert("Enterred Mobile Number "+mobile+"is not 10 Digits");
    } else{
        single(mobilenumber);
    }
}

//Calculate till Sigle Digit
function single(num){
    var sumvalue = 0;
for(var i=0; i<num.length;i++){
    sumvalue += parseInt(num[i]);
}
var num = (""+sumvalue).split("");
if(num.length>1){
    single(num);
}else{
    alert("Sum is: "+sumvalue); return sumvalue;
}
}

//Convert String to respective Integer and passes to Single() for calculation till single digit
function chaldean(personname){
var namearray="";
for(i=0;i<personname.length;i++){
        if(personname[i]=="A" || personname[i]=="a" || personname[i]=="i" || personname[i]=="I" || personname[i]=="J" || personname[i]=="j" || personname[i]=="Q" || personname[i]=="q" || personname[i]=="Y" || personname[i]=="y"){
        namearray = namearray+"1";
    }else if(personname[i]=="B" || personname[i]=="b" || personname[i]=="K" || personname[i]=="k" || personname[i]=="R" || personname[i]=="r"){
       namearray = namearray+"2";
    }else if(personname[i]=="C" || personname[i]=="c" || personname[i]=="G" || personname[i]=="g" || personname[i]=="L" || personname[i]=="l" || personname[i]=="S" || personname[i]=="s"){
       namearray = namearray+"3";
    }else if(personname[i]=="D" || personname[i]=="d" || personname[i]=="M" || personname[i]=="m" || personname[i]=="T" || personname[i]=="t"){
        namearray = namearray+"4";
    }else if(personname[i]=="E" || personname[i]=="e" || personname[i]=="H" || personname[i]=="h" || personname[i]=="N" || personname[i]=="n" || personname[i]=="X" || personname[i]=="x"){
        namearray = namearray+"5";
    }else if(personname[i]=="U" || personname[i]=="u" || personname[i]=="V" || personname[i]=="v" || personname[i]=="W" || personname[i]=="w"){
        namearray = namearray+"6";
    }else if(personname[i]=="O" || personname[i]=="o" || personname[i]=="Z" || personname[i]=="z"){
        namearray = namearray+"7";
    }else if(personname[i]=="F" || personname[i]=="f" || personname[i]=="P" || personname[i]=="p"){
        namearray = namearray+"8";
    }else{
    }
    }
    single(namearray);
 
}