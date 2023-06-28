let displayxyz=document.getElementById("display");
let buttonsxyz=document.getElementsByClassName("btn");

function isOpxyz(opxyz)//cheking the selected button is oprand or not
{
    if(opxyz==='+'||opxyz==='-'||opxyz==='/'||opxyz==='*'){
         return true;
    }
    return false;
}

function clickingxyz(clikedxyz){
    if(displayxyz.innerText===""){
        if(clikedxyz!='0'){
             displayxyz.innerText=displayxyz.innerText+clikedxyz;
        }
    }
    else{
        if(isOpxyz(clikedxyz)&&isOpxyz(displayxyz.innerText[displayxyz.innerText.length-1])){
            displayxyz.innerText=displayxyz.innerText.slice(0,-1);
        }
        displayxyz.innerText=displayxyz.innerText+clikedxyz;
    }

}

function evalxyz(){
    try{
        displayxyz.innerText=eval(displayxyz.innerText);
    }
    catch(err){
        displayxyz.innerText='Error';
    }
}

function clearxyz(){
    displayxyz.innerText="";
}

function backxyz(){
    displayxyz.innerText=displayxyz.innerText.slice(0,-1);
}