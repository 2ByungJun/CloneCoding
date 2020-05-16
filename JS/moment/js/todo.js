const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

/** 입력 받을 값 */
const TODOS_LS = "toDos";
/** 입력 저장할 공간 */
let toDos = [];

/** <li> id에 따라 버튼을 확인 후 삭제 */
function deleteToDo(event){
    /** console.dir로 target 대상인 부모노드를 찾는다. */
        // console.dir(event.target);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    /** Array의 모든 아이템을 통해 함수를 실행하고,
        true인 아이템들만 가지고 새로운 Array를 생성 */
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    /** JSON.stringify : 자바스크립트 object를 string으로 변경 */
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

/** ul에 적은 값에 맞게 <li> object 생성 */
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

/** toDoInput으로 적은 텍스트를 painToDo로 출력 및 저장 후 초기화("") */
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

/** getItem : 저장 TODOS_LS */
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    /** String -> Object로 parse */
    if(loadedToDos !== null ){
        const parsedToDos = JSON.parse(loadedToDos);
        /** forEach : Array에 담겨있는 각각에 한번씩 함수 실행  */
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();