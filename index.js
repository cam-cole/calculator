var expression = ""

function clearScreen() {
    document.getElementById("result").value = "";
    expression = "";
}

function display(value) {
    document.getElementById("result").value += value;
    expression += value;
}

function operator(value) {
    document.getElementById("result").value = "";
    expression += value;
}

function calculate() {
    var q = eval(expression);

    if (q == Infinity) {
        document.getElementById("result").value = "Error";
    }

    else {
        document.getElementById("result").value = q;
        expression = q
    }

    
    
}