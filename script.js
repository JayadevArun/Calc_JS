let input=''

function clickbutton(event){
    let buttonvalue=event.target.innerHTML
    if (buttonvalue==1){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue==2){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue==3){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue==4){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue==5){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue==6){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue==7){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue==8){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue==9){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue==0){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue=='+'){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue=='-'){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue=='*'){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue=='/'){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue=='.'){
        input=document.getElementById('inputid').value;
        input=input+event.target.innerHTML;
        document.getElementById('inputid').value=input
    }
    if (buttonvalue=='%'){
        input=document.getElementById('inputid').value;
        document.getElementById('inputid').value=parseFloat(input)*100
    }
    if (buttonvalue=='AC'){
        document.getElementById('inputid').value=''
        input=''
    }
    if (buttonvalue=='del'){
        input=document.getElementById('inputid').value;
        input=input.slice(0, -1);
        document.getElementById('inputid').value=input
    }
    if (buttonvalue=='='){
        input=document.getElementById('inputid').value;
        input=eval(input)
        document.getElementById('inputid').value=input
    }
}