// let b1=document.getElementById("b1")
// b1.addEventListener("click",increase())
function increase(id,p,prix){
    let input1=document.getElementById(id)
    // value inc
  let val=parseInt(input1.value)
  val=val+1
  input1.value=val
//   price inc
let price=p*val
document.getElementById(prix).innerHTML=price
// inc total
let tot=document.getElementById("s")
tot.innerHTML=parseInt(tot.innerHTML)+p
}
function decrease(id,p,prix){
    let input1=document.getElementById(id)
    console.log(input1)
    // value inc
  let val=parseInt(input1.value)
  if(val>0){
  val=val-1
  input1.value=val
//   price inc
let price=parseInt(document.getElementById(prix).innerHTML)
document.getElementById(prix).innerHTML=price-p
let tot=document.getElementById("s")
tot.innerHTML=parseInt(tot.innerHTML)-p
  }
}
function sum(p){
  let a1=document.getElementById(prix).innerHTML=price  
  let r=r+a1
}
function delette(id){
    let elm1=document.getElementById(id)
    let divp=elm1.parentNode
    console.log(divp)
divp.style.display="none"
}