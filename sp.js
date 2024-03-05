// let scores =90;
// let grade;

// if (scores >=80 && scores<=100){
//     console.log("Grade:", grade="A");}
//     else if (scores >=70 && scores<=89){
//     console.log("Grade", grade="B");}
// else {
//     console.log("Faile");
// // }

// let a = prompt("Enter a number");
// if(a%5===0){
// console.log("a", a);
// }
// else{
//     console.log("Not");
// }

// for (let num = 0; num<=100; num++)
// {
// if(num%2 !== 0 ){
//     console.log("Even number of :" , num);
// }

// }
// console.log("This is ended");

// let userName = prompt("enter their full name");
// let res = "@" + userName + userName.length;
// res.trim();
// console.log(res);

// const contentString = "MDN Web Docs";

// document.body.innerHTML = contentString.link("https://developer.mozilla.org/");

// let ii = e;

// if (ii === "a e i o u" ){
//     console.log(`this is vowel ${ii}`);
// }
// else{
//     console.log("This is constant");
// }

// let str1 = "sadnf";

// console.log(str1.slice(1,4));

// let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
// console.log(companies.splice(2, 1, "Ola"));

// function vowel(str){
//     let count = 0;
//     for(let a of str){
//         if(a ==='a'|| a ==="e" || a ==="i" || a==="o" || a ==="u"){
//             count++;

//         }

//     }
//     console.log(count);

// }

// vowel("Geekforeeks");

// let a = [3,4,5,29];
//  let k = (square)=>{
//     let b = square*square;
//     console.log(b);
// }
// a.forEach (k);

// let marks = [80,99,97,40,49,100];

// let a = marks.filter((scored) => {
//     return scored>90;

// });
// console.log(a);

// let age =17;
// let a = age > 18 ? "adult" + age : "junior" + age;
// console.log(a);

// let a = 20;
// if (a>18){
//     console.log("adult");

// }
// else{
//     console.log("junior");
// }

// let a = prompt("Enter a number:");
// let b = a%5 === 0 ? `This number is multiplie of 5 : ${a}` : `This number is not multiplie of 5 : ${a}`;
// console.log(b);
// console.log("Thanks coder");

// let scores = prompt("Enter your score");
// let grades;
// if(scores >=90 && scores<=100){
//    (grades="A");
// }
// else if(scores >=70 && scores <=89){
//   grades = "B";
// }
// else if(scores >=60 && scores <=69){
//     grades = "C";
// }
// else if(scores >=50 && scores <=59){

//     grades = "D";
// }

// else{
// grades = "F";
// }

// let userName = prompt("Enter full name");
// for(let b of userName)
// {
//     console.log(`@${userName}${userName.slice(1)}`);
// }

// let arr = [85, 97, 44, 37, 76, 60];
// let sum  ;
// for (let i=0; i<=arr.length; i++){
//     sum += i;

// }
// console.log(sum);

// let countVow =(str) =>{
//     let count =0;
//     for(let b of str){
//         if(b ==="a" || b ==="e" || b==="i" || b==="o" || b==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVow("ppfdfdaa");

// let number = [1,3,4,6];
// let arr = number.map((inx)=>{

//     return inx%2==0;

// })
// console.log(arr);

// let a = document.createElement("h1");
// let p = document.createElement("button");
// p.innerHTML = "Click me";
// a.innerHTML = "<b>Sandeep</b>";

// document.querySelector("body").append(p);

// document.querySelector("body").prepend(a);
// a.style.color ="red";
// a.style.border ="1px solid yellow";
// a.style.backgroundColor ="pink";
// p.remove();

// let pi = document.createElement("p");
// pi.innerHTML ="<mark> Saurav Babu </mark>";
// pi.style.color ="redd";

// document.querySelector("h1").append(pi);
// let button = document.createElement("button");
// button.innerText= "click me";

// let access = document.querySelector("body").prepend(button);

// button.style.backgroundColor="red";
// button.style.color = "white";

// let p= document.querySelector("p");

// let button = document.createElement("button");

// let btn = document.querySelector("body").prepend(button);
// button.innerHTML = ("click me");
// button.style.color ="red";
// let color="light";

// button.addEventListener("click", ()=>{
// if(color==="light"){
//     color="dark";
//     document.querySelector("body").style.backgroundColor ="black";
// }
// else{
//     color ="light";
//     document.querySelector("body").style.backgroundColor ="red";
// }
// console.log(color);
// }

// );

// let a = document.createElement("h1");
// a.innerHTML ="Hi My name saurav";
// document.querySelector("body").append(a);
// a.style.color ="red";
// a.style.backgroundColor="rgba(140,120,132, 0.5)";

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");

let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = ()=>{
    turnO = true;
    enablBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = "true";

    checkWinner();
  });
});

const disblBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;d
    }
}
const enablBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (winner)=>{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disblBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
   
    let post1val =  boxes[pattern[0]].innerText;
    let post2val = boxes[pattern[1]].innerText;
    let post3val = boxes[pattern[2]].innerText;

    if(post1val != "" && post2val !="" && post3val != ""){
        if(post1val === post2val && post2val === post3val){
            console.log('ou won', post1val);
            showWinner(post1val);
        }
    }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
