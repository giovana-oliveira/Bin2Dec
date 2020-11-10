const input = document.getElementById("input");
const output = document.getElementById("result");
const btn = document.getElementById("toDecimalBtn");

input.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        btn.click();
    }
});

btn.addEventListener("click", function(e) {
    var number = input.value;
    var validation = validate (number);
    if (validation) {
        var decimal = toDecimal(number);
        output.innerHTML = decimal;
    }
});

function validate(number) {  
    const characters = /[a-z2-9ç!@#¬£¢§\+\$%\^&\*()_~\-=\[\]{};':"\\|,.<>\/?]/ig;
    const test = characters.test(number);
    if ( number == "" ) {
        alert("Erro! Campo vazio");
    } else if (test) {
        alert("Erro! Caracteres inválidos");
    } else {
        return true;
    }        
}

function toDecimal(number) {
    var index = number.length - 1;
    var exp = 0;
    var decimal = 0;
    var aux = 0;
    while (index >= 0) {
        aux = parseInt(number.charAt(index));
        decimal = decimal + (aux * Math.pow(2, exp));
        index--;
        exp++;
    }
    return decimal;
}