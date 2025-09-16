// Calculate area of Triangle, Rectangle, Circle and Square
// DOM fundamentals

function areaSq() {
    const s = Number(document.getElementById("side").value);
    if (s <= 0) {
        alert("Side length must be greater than 0");
        return;
    }
    const ans = s * s;
    document.getElementById("result").innerHTML = "Area : " + ans;
    document.getElementById("result").style.color = "black";
}

function areaC() {
    const r = Number(document.getElementById("rad").value);
    if (r <= 0) {
        alert("Radius must be greater than 0");
        return;
    }
    const ans = Math.PI * r * r;
    document.getElementById("result1").innerHTML = "Area : " + ans;
    document.getElementById("result1").style.color = "black";
}

function areaRect() {
    const v1 = Number(document.getElementById("len").value);
    const v2 = Number(document.getElementById("bre").value);
    if (v1 <= 0 || v2 <= 0) {
        alert("Length and Breadth must be greater than 0");
        return;
    }
    const ans = v1 * v2;
    document.getElementById("result2").innerHTML = "Area : " + ans;
    document.getElementById("result2").style.color = "black";
}

function areaTri() {
    const v1 = Number(document.getElementById("s1").value);
    const v2 = Number(document.getElementById("s2").value);
    const v3 = Number(document.getElementById("s3").value);
    if (v1 <= 0 || v2 <= 0 || v3 <= 0) {
        alert("All sides must be greater than 0");
        return;
    }
    const semi = (v1 + v2 + v3) / 2;
    const ans = Math.sqrt(semi * (semi - v1) * (semi - v2) * (semi - v3));
    document.getElementById("result3").innerHTML = "Area : " + ans;
    document.getElementById("result3").style.color = "black";
}


function Reset(){
    if(event.target.id == "R1"){
        document.getElementById("side").value ="";
    }
    else if(event.target.id == "R2"){
        document.getElementById("rad").value = "";
    }
    else if(event.target.id == "R3"){
        document.getElementById("len").value = "";
        document.getElementById("bre").value = "";
    }
    else if(event.target.id == "R4"){
        document.getElementById("v1").value = "";
        document.getElementById("v2").value = "";
        document.getElementById("v3").value = "";
    }
}