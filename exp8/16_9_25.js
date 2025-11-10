var exp = document.getElementById('mouse')
console.log(exp);
exp.addEventListener(
  "mouseover",
  (event) => {
    document.body.style.backgroundColor = "#FF9898";
  }
);

exp.addEventListener(
  "mouseout",
  (event)=>{
    document.body.style.backgroundColor = "#FFD586";
  }
)

var foc = document.getElementById('focus')

foc.addEventListener(
  "focus",
  (event) => { 
    document.body.style.backgroundColor = "#878eeeff";
  }
)

foc.addEventListener(
  "blur",
  (event) => { 
    document.body.style.backgroundColor = "#FFD586";
  }
)

function func(){
  document.getElementById("result").innerHTML = "Your batch is: " + foc.value;
}
