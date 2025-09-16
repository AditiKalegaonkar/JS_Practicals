/*
Write a JavaScript program that will create an array and perform following operations
• To remove specific element from the array.
• Check if an array contains a specified value.
• To empty an array
*/



var arr = []; 

function show(){
    var ele = document.getElementById('ele').value;
    let size = parseInt(document.getElementById('size').value);
    if(arr.length >= size){
        document.getElementById("result1").innerHTML = "Array size limit reached!";
        document.getElementById("result1").style.color = "#FE7743";
        return;
    }
    else{
        arr.push(ele);
        let text1 = "";
        for(var i = 0; i < arr.length; i++){
            text1 += arr[i] + " ";
        }
        document.getElementById("result1").innerHTML = text1;
        document.getElementById("result1").style.color = "#FE7743";
    }
}

function remove(){
    var ele = document.getElementById('ele1').value;
    var newarr = [];
    let text1 = "";
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == ele) continue;
        else{
            newarr.push(arr[i]);
            text1 += arr[i] + " ";
        }
    }
    document.getElementById("result2").innerHTML = "Array elements: "  + text1;
    document.getElementById("result2").style.color = "#FE7743";

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == ele) arr.splice(i,1);
    }

    let text2 = "";
    for(var i = 0; i < arr.length; i++){
        text2 += arr[i] + " ";
    }

    document.getElementById("result3").innerHTML = "Array elements: "  + text2;
    document.getElementById("result3").style.color ="#FE7743";
}

function search(){
    var ele = document.getElementById('ele2').value;
    var flag = 0,idx = -1;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == ele){
            flag = 1;
            idx = i;
            break;
        }
    }
    if(flag){
        document.getElementById("result4").innerHTML = "Found at index " + idx;
        document.getElementById("result4").style.color = "#FE7743";
    }
    else{
        document.getElementById("result4").innerHTML = "Element not found";
        document.getElementById("result4").style.color = "#FE7743";
    }

    idx = arr.indexOf(ele);
    if(idx == -1){
        document.getElementById("result5").innerHTML = "Element not found";
        document.getElementById("result5").style.color = "#FE7743";
    }
    else{
        document.getElementById("result5").innerHTML = "Found at index " + idx;
        document.getElementById("result5").style.color = "#FE7743";
    }
}

function Delete(){
    let text1 = "";
    for(var i = arr.length-1; i >= 0; i--){
        arr.pop();
        text1 += arr[i] + " ";
    }
    document.getElementById("result6").innerHTML = "Array elements: "  + text1;
    document.getElementById("result6").style.color = "#FE7743";

    let text2 = "";
    arr.splice(0,arr.length);
    for(var i = 0; i < arr.length; i++){
        text2 += arr[i] + " ";
    }
    document.getElementById("result7").innerHTML = "Array elements: " + text2;
    document.getElementById("result7").style.color = "#FE7743";
}