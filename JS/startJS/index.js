/** CSS, HTML, JS 각자의 역할 */
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function headleClick() {

    title.classList.toggle(CLICKED_CLASS);
    
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
}

function init(){
    title.addEventListener("click", headleClick);
}
init();



/** JS로 이벤트 처리 = 클릭 시 title 색상변경 */
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OHTER_CLOLR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     if( currentColor == BASE_COLOR ){
//         title.style.color = OHTER_CLOLR;
//     }else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("mouseenter", handleClick);
// }
// init();

// function headleOffline(){
//     console.log("bye bye");
// }

// function headleOnline(){
//     console.log("welcome");
// }

// window.addEventListener("offline", headleOffline);
// window.addEventListener("online", headleOnline);

/** JS로 CSS 및 html 변경 */
// const title = document.querySelector("#title");
// title.innerHTML = "Hi Cange JS!"
// title.style.color = "red";
// document.title = "chage log";
// console.dir(title);
// console.dir(document); 



/*
   기초문법 
*/

/** 경고문 */
// alert("Hello!");

/** 출력문 */
// console.log("HEllo!");

/** 변수 */
// a = 221
// b = 200
// x = a + b;
// console.log(x);

/** let : 초기화, 변해도 되는 변수 */
// let a = 221;
// let b = a - 5;
// a = 4
// console.log(b, a);  // 216 4

/** const : 변하지않는 변수 */
// const a = 221;
// let b = a - 5;
// // a = 4 바꿀수 없어.
// console.log(b, a);  // 216 221

/** var : 여러타입의 대체타입 */
// var a = 221; // int
// var b = "HEllo"; // String
// console.log(b + a);  // HEllo221

/** 모두 실행 가능하다! */
// const stCon = "Hello1 ";
// var stVar = "Hello2 ";
// let stLet = " Hello3 ";
// console.log(stCon + stVar + stLet );

/** Array */
// const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(dayOfWeek);
// console.log(dayOfWeek[2]);

// const something = "Something"
// const array = [something, "Hello", 223, true];
// console.log(array[0]); // Something
// console.log(array[3]); // true
// console.log(array[555]); // undefined

/** Object */
// const leeInfo = {
//     name:"Byungjun",
//     age:25,
//     gedner:"Male",
//     isHandsome:true
// }
// console.log(leeInfo);
// console.log(leeInfo.gedner); // Male
// leeInfo.gedner = "Female"
// console.log(leeInfo.gedner); // Female

/** Consle */
// console.log(console);

/** function */
// function sayHEllo(){
//     console.log("Hello!");
// }
// sayHEllo();

// function sayHEllo(potato){
//     console.log("Hello! ", potato);
// }
// sayHEllo("potato!!!");

// function sayHEllo(potato, age){
//     console.log("Hello! ", potato, age);
// }
// sayHEllo("potato!!!", 25);

// function sayHello(name, age){
//     return 'Hello ${name} you are ${age} yeaars old!';
// }
// const greetLEE = sayHello("이병준", 25)
// console.log(greetLEE)

// const calculator = {
//     plus: function(a,b){
//         return a+b;
//     }
// }
// const plus = calculator.plus(5,5)
// console.log(plus) // 10