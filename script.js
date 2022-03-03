var resultE1 = document.getElementById('result');
var lengthE1 = document.getElementById('length');
var uppercaseE1 = document.getElementById('uppercase');
var lowecaseE1 = document.getElementById('lowercase');
var numberE1 = document.getElementById('numbers');
var symbolsE1 = document.getElementById('symbols');
var generateE1 = document.getElementById('generate');
var clipboardE1 = document.getElementById('clipboard'); 



clipboardE1.addEventListener('click', () =>{
    var textarea =document.createElement('textarea');
    var password = resultE1.innerText;

    if(!password){
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});
 


generateE1.addEventListener('click', ()=>{
    var length = lengthE1.value;
    var hasLower = lowecaseE1.checked;
    var hasUpper = uppercaseE1.checked;
    var hasNumber = numberE1.checked;
    var hasSymbol = symbolsE1.checked;

    resultE1.innerText = genratePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function genratePassword(lower, upper, number, symbols, length){
    let genratePassword ="";
    var typesCount = lower + upper + number + symbols;
    var typesArr = [{lower}, {upper}, {number}, {symbols}]

        if(typesCount === 0) {
            alert('Select atlest 1 option');
            return;
            
        }

        for(let i=0;i<length; i+=typesCount ){
            typesArr.forEach(type =>{
                var funcName = Object.keys(type)[0];
            
                 switch(funcName){
                    case "lower":
                        genratePassword += getRandomLower();
                        break;
                    case "upper":
                        genratePassword += getRandomUpper();
                        break;    
                     case "number":
                            genratePassword += getRandomNumber();
                            break;
                    case "symbol":
                                genratePassword += getRandomSymbol();
                                break;            
                }
                

            });
        }

        var finalPassword = genratePassword.slice(0, length);
        return finalPassword;
}


function getRandomLower(){
   return String.fromCharCode(Math.floor(Math.random()*26) +97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26) +65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) +48);
}

function getRandomSymbol(){
    var symbols= '!@#$%^&*()_+{}<>';
    return symbols[Math.floor(Math.random()*symbols.length)];
}