let arr = [];
let size = 0;

document.getElementById("size").addEventListener("input", e => {
    size = +e.target.value;
    arr = [];
    document.getElementById("out").innerText = "Size set to: " + size;
});

function add() {
    let raw = document.getElementById("obj").value;
    if (arr.length >= size){
        document.getElementById("out").innerText = "Array Overflow!";
    }
    else{
        try {
            arr.push(eval("(" + raw + ")"));
        } catch {
            arr.push(raw);
        }
        document.getElementById("out").innerText = "Array is: " + JSON.stringify(arr);
        document.getElementById("out").style = 
        document.getElementById("obj").value = "";
    }
}

function check() {
    let idx = parseInt(document.getElementById("idx").value);
    if (isNaN(idx) || idx < 0 || idx >= arr.length) {
        document.getElementById("res").innerText = "Invalid index!";
        return;
    }
    let val = arr[idx];

    if (Array.isArray(val)) {
        document.getElementById("res").innerText = "The element is an array.";
    } else {
        document.getElementById("res").innerText = "The element is not an array.";
    }
}