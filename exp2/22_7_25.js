function ForLoop() {
    const input = document.getElementById("num1").value;
    const n = Number(input);
    if (!input || isNaN(n) || n <= 0) {
        alert("Please enter a positive number for multiplication");
        return;
    }

    let text1 = "";
    for (let i = 1; i <= 10; i++) {
        let prod = n * i;
        text1 += `${n} x ${i} = ${prod}<br>`;
    }
    document.getElementById("result1").innerHTML = text1;
    document.getElementById("result1").style.color = "black";
}

function whileLoop() {
    const input = document.getElementById("num2").value;
    const n = Number(input);
    if (!input || isNaN(n) || n <= 0) {
        alert("Please enter a positive number for multiplication");
        return;
    }

    let i = 1;
    let text1 = "";
    while (i <= 10) {
        let prod = n * i;
        text1 += `${n} x ${i} = ${prod}<br>`;
        i++;
    }
    document.getElementById("result2").innerHTML = text1;
    document.getElementById("result2").style.color = "black";
}

function doWhile() {
    const input = document.getElementById("num3").value;
    const n = Number(input);
    if (!input || isNaN(n) || n <= 0) {
        alert("Please enter a positive number for multiplication");
        return;
    }

    let i = 1;
    let text1 = "";
    do {
        let prod = n * i;
        text1 += `${n} x ${i} = ${prod}<br>`;
        i++;
    } while (i <= 10);
    
    document.getElementById("result3").innerHTML = text1;
    document.getElementById("result3").style.color = "black";
}

function Reset() {
    const id = event.target.id;
    if (id === "R1") {
        document.getElementById("num1").value = "";
        document.getElementById("result1").innerHTML = "";
    } else if (id === "R2") {
        document.getElementById("num2").value = "";
        document.getElementById("result2").innerHTML = "";
    } else {
        document.getElementById("num3").value = "";
        document.getElementById("result3").innerHTML = "";
    }
}
