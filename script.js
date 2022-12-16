const body = document.querySelector("body")
const field = document.querySelector(".field")
const inputColor = document.querySelector(".color")
const colorMode = document.querySelector(".color-mode")
const squareUser = document.querySelector(".square")
const rainbowMode = document.querySelector(".raindow-mode")
const menuButtons = document.querySelectorAll("#switch")
const erase = document.querySelector(".erase")
const clear = document.querySelector(".clear")
let mode;
let oneBlock = 10; //test name for generate field
let color = inputColor.value;
var slider = document.getElementById("myRange");
var output = document.getElementById("slide-text");
output.innerHTML = `${slider.value} X ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = `${slider.value} X ${slider.value}`;
    clearFullField(); //вызов отчистки листа
    paintFullField(getFullField(slider)) // вызов отрисовки листа 
}
const getFullField = (slider) => { return square = slider.value * slider.value }//funct for calculate square field 
//funct for add div in field grid РАЗДЕЛИ НА ДВЕ ФУНКЦИИ так как тут еще смена стиля для основного поля грид
const paintFullField = (getFullField) => {
    field.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
    field.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`
    for (let i = 0; i < getFullField; i++) {
        let block = document.createElement("div");
        block.classList.add("element-field")
        field.append(block)

    }
    getBlockField() // получаю все элементы на поле
    addElementFieldListener() // вызов фукнции для рисования кликом и передивижением мышки с удержанием
}
//функция обновления (отчистки) листа
const clearFullField = () => {
    while (field.firstChild) { //пока у поля есть первый дочерний элемент ,
        field.removeChild(field.firstChild); // удалить на поле дочерний элемент - удалить первый дочерний элемент
    }


}
window.onload = paintFullField(getFullField(slider));// отрисовка главного холста(поля)


//функция получения нод листа всех созданый элементов на поле
function getBlockField() {
    return document.querySelectorAll(".element-field")

}
// function getColor() {

// }
//Функция покраски элемента(div block )
// function paint(element) {

//     selectColorMode();
//     color = inputColor.value;
//     return element.target.style.backgroundColor = color;

// }
function paint(element) {
    if (mode == "color-mode" || mode == undefined) {
        console.log(mode)
        color = inputColor.value;
        return element.target.style.backgroundColor = color;
    } else if (mode == "raindow-mode") {
        console.log(mode)
        color = randomColor()
        console.log(randomColor())
        return element.target.style.backgroundColor = color;
    } else if (mode == "erase") {



        return element.target.style.backgroundColor = "";
    }
}
function raindowPaint(element) {

    color = randomColor()
    console.log(randomColor())
    return element.target.style.backgroundColor = color;
}
/*фукнция holdclick добавляет прослушиватель Движения мыши и  фызова фукции отрисовки*/
function holdClick() {
    getBlockField().forEach((element) => element.addEventListener("mouseenter", paint))
    // getBlockField().forEach((element) => element.addEventListener("click", paint))
    getBlockField().forEach((element) => element.addEventListener("mousedown", paint))
}
/*  фукнция stopPaint добавляет прослушиватель  Отжатого левого клика */
function stopPaint() { getBlockField().forEach((element) => element.removeEventListener('mouseenter', paint)) }
//функция рисования по клику и передвижению мышки
function addElementFieldListener() {
    body.addEventListener("mouseup", stopPaint)/*прослушиватель чтобы вне холста работали все мои прослушки, так удобней рисовать, иначе выйдя из
    холста и отжав там кнопку , фукнция рисования прилипнет к мышке и придется кликать еще раз*/
    body.addEventListener("mousedown", holdClick) // для выхода за холст с зажатой клавишей мыши и удобного возврата назад
}


rainbowMode.addEventListener("click", function () {
    mode = document.querySelector(".raindow-mode")

    return mode = mode.className
})
colorMode.addEventListener("click", function () {
    mode = document.querySelector(".color-mode")
    return mode = mode.className
})
erase.addEventListener("click", function () {
    mode = document.querySelector(".erase")
    return mode = mode.className
})


// кнопка выбора поля пользователем, замени на ползунок
// squareUser.addEventListener("click", function () {
//     oneBlock = prompt("Vvedite") // получения масштаба листа от пользователя

//     clearFullField(); //вызов отчистки листа
//     paintFullField(getFullField(oneBlock)) // вызов отрисовки листа 

// })
function clearFieldButton() { getBlockField().forEach((element) => element.style.backgroundColor = "") }

clear.addEventListener("click", clearFieldButton)
function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return color = `rgb(${r} ,${g}, ${b})`


}


