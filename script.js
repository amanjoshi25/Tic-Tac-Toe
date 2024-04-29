// // console.log("hey javascript");
// // let a=5;
// // let b=6;
// // console.log("a+b=",a+b)
// //alert("hey its my page")//one time alert
// let a =prompt("Enter a number")
// if(a%5===0){
//     console.log(a,"is multiple is 5")
// }else
// console.log(a,"nt mul is 5")
// //var->global scope ->generally not used
// //let->block scope ->mostly used


// //infinite loop->not try ever in coding ->browser may crash 
// //for of loop->string and arrays m irterate ke liye use krte h
// //for in loop->use for objects and return the keys of object 
// let student={
//     namef:"aman jshi",
//     age:23,cgpa:8,isPass:true
// };
// for(let i in student){
//     console.log(i,student[i]);//key value pair can be print
// }

// let gm=5;
// let user=prompt("guess the number:");
// while(user!=gm){
//     user=prompt("wrong number")
// }
// console.log("congratulation");
// //arrays in js
// //original array ke ander koi chnge nhi hoga niche kisi bhi metho m
// //toString()->array ke ander koi chnge nhi krega
// //unshift()->push at the start in array
// //shift()->dlt from first
// //slice()->have starting index and end index utni hi value dedeta h

// //splice()->ye original array m chnge krega ->add,remove,replace->index,dlt,newValue
  

// //funtion in js
//  function sum(a,b){
//      s=a+b;
//      return s;

// }
// //forEach ->higher orderfuntion hota h->dusre funtion ko as a parameter use kr lenge ya return kr rhe honge
// //forEach ->val,idx,arr ye teen parameter use kr skte h
// //forEach ->A callback is functin passed as argument to another funtion
// let arrs= [5, 6, 5, 6, 65, 5];
//  arrs.forEach(function printVal(val){
//     console.log(val);
    
// });
// //map se  jo bhi value return hogi wo store ho jyegi new variable m
// let newarr=arrs.map((val)=>{return val*2});
// console.log(newarr)
// //reduce ->perform some operation and reduce it at a single value
// const red=arrs.reduce((prev,curr)=>{
//     return prev+curr;
// });
// //DOM
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newG=document.querySelector("#new-btn");
let msgC=document.querySelector(".msg-C");
let msg=document.querySelector("#msg");
let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgC.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
    
});
const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
};
const disabledBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};
const showWinner=(winner)=>{
        msg.innerText=`congratulation,winner is ${winner}`;
        msgC.classList.remove("hide");
        disabledBoxes();
}   
const checkWinner=()=>{
  for(let pattern of winPattern){
    let p1=boxes[pattern[0]].innerText;
    let p2=boxes[pattern[1]].innerText;
    let p3=boxes[pattern[2]].innerText;

    if(p1!="" && p2!="" && p3!=""){
        if(p1===p2 && p2===p3){
          
            console.log("Winner",p1);
            showWinner(p1);}
    
    }
  }
};
newG.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);