function Addition() {
    // let x=100;
    // y=200;
    let x = Number(document.getElementById('num1').value);
    let y = Number(document.getElementById('num2').value);
    document.getElementById("demo").innerHTML = x + y;
}

function Substraction() {
    // let x=100;
    // y=200;
    let x = Number(document.getElementById('num1').value);
    let y = Number(document.getElementById('num2').value);
    document.getElementById("demo").innerHTML = x - y;
}

function Multiplication() {
    // let x=100;
    // y=200;
    let x = Number(document.getElementById('num1').value);
    let y = Number(document.getElementById('num2').value);
    document.getElementById("demo").innerHTML = x * y;
}

function Divison() {
    // let x=100;
    // y=200;
    let x = Number(document.getElementById('num1').value);
    let y = Number(document.getElementById('num2').value);
    document.getElementById("demo").innerHTML = x / y;
}
