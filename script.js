let button = document.getElementById("convert");
let copyButton=document.getElementById("convertCopy");
let inputField = document.getElementById("input");
let outputField = document.getElementById("output");

function nbsp(){
    let output = inputField.value.split(' ');
    let outString="";
    /*
    *someday i will add regex to find all orphans 
    *but not today

    let regex = new RegExp("^([a-z0-9]{5,})$");
    *this goes into if -> test method is the way to go
    ||regex.test(output[i])
    */
    for(let i = 0; i< output.length;i++){
        if(output[i].length==1){

            output[i]+="&nbsp;";
            outString+=output[i];
        }
        else{
            outString=outString+output[i]+" ";
        }
    }
    output=outString.trim();
    return output;    
}

button.addEventListener('click',function(){
    outputField.value=nbsp();  
})


copyButton.addEventListener('click', function(event) {
    outputField.value=nbsp(); 
    outputField.focus();
    outputField.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
})
