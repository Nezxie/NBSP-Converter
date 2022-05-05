let button = document.getElementById("convert");
let copyButton=document.getElementById("convertCopy");
let inputField = document.getElementById("input");
let outputField = document.getElementById("output");

function nbsp(){
    let output = inputField.value.split(' ');
    for(let i = 0; i< output.length;i++){
        if(output[i].length==1){
            output[i]+="&nbsp;";
        }
    }
    output=output.join(" ");
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
