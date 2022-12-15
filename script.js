const body = document.querySelector("body")
const field = document.querySelector(".field")
const inputColor = document.querySelector(".color")
const colorMode = document.querySelector(".color-mode")
const squareUser = document.querySelector(".square")
let oneBlock = 10; //test name for generate field
const getFullField = (oneBlock) => { return square = oneBlock * oneBlock }//funct for calculate square field 
//funct for add div in field grid РАЗДЕЛИ НА ДВЕ ФУНКЦИИ так как тут еще смена стиля для основного поля грид
const paintFullField = (getFullField) => {
    field.style.gridTemplateColumns = `repeat(${oneBlock}, 1fr)`
    field.style.gridTemplateRows = `repeat(${oneBlock}, 1fr)`
    for (let i = 0; i < getFullField; i++) {
        let block = document.createElement("div");
        block.classList.add("element-field")
        field.append(block)

    }
}
//-------------остановился тут рефреш листа
const clearFullField = () => {
    let block = document.querySelectorAll(".element-field")

}
//-------------остановился тут рефреш листа
paintFullField(getFullField(oneBlock)); // отрисовка главного холста(поля)
const getBlockField = document.querySelectorAll(".element-field")//получаю нод лист всех созданый элементов на поле
//Функция покраски элемента(div block )
const paint = (element) => {
    console.log(element)
    console.log(element.target)
    return element.target.style.backgroundColor = inputColor.value

}
function holdClick() {
    getBlockField.forEach((element) => element.addEventListener("mousemove", paint)) /*фукнция holdclick добавляет прослушиватель Движения мыши и 
    фызова фукции отрисовки*/
    getBlockField.forEach((element) => element.addEventListener("click", paint))
}
/*  фукнция stopPaint добавляет прослушиватель  Отжатого левого клика */
const stopPaint = () => { getBlockField.forEach((element) => element.removeEventListener('mousemove', paint)) }

body.addEventListener("mouseup", stopPaint)/*прослушиватель чтобы вне холста работали все мои прослушки, так удобней рисовать, иначе выйдя из
 холста и отжав там кнопку , фукнция рисования прилипнет к мышке и придется кликать еще раз*/
body.addEventListener("mousedown", holdClick) // для выхода за холст с зажатой клавишей мыши и удобного возврата назад

colorMode.addEventListener("click", paint)

squareUser.addEventListener("click", function () {
    oneBlock = prompt("Vvedite")
    clearFullField();
    paintFullField(getFullField(oneBlock))
})









// getBlockField.forEach((element) => element.addEventListener("mousedown", holdClick = () => {//при нажатом левом клике запускаю фукнцию holdclick

//     getBlockField.forEach((element) => element.addEventListener("mousemove", paint)) /*фукнция holdclick добавляет прослушиватель Движения мыши и
//     фызова фукции отрисовки*/
//     getBlockField.forEach((element) => element.addEventListener("mouseup", stopPaint = () => { /* также фукнция holdclick добавляет прослушиватель
//         Отжатого левого клика (НЕПРАВИЛЬНО ИЗМЕНИ ФУНКЦИЯ ДОЛЖНА ДЕЛАТЬ ЧТО_ТО ОДНО) ивызывает фукнцию stopPaint*/
//         getBlockField.forEach((element) => element.removeEventListener('mousemove', paint)); /* удаляю прослушиватель Движения мыши с фукнцией отрисовки ,
//         для каждого элемента нод листа (for Each)*/
//     }))

// }))