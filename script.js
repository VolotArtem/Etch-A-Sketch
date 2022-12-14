const body = document.querySelector("body")
const field = document.querySelector(".field")
const oneBlock = 50; //test name for generate field
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
paintFullField(getFullField(oneBlock)); // отрисовка главного холста(поля)
let getBlockField = document.querySelectorAll(".element-field")//получаю нод лист всех созданый элементов на поле
//Функция покраски элемента(div block )
const paint = (element) => {
    console.log(element)
    console.log(element.target)
    element.target.style.backgroundColor = "red"

}
function holdClick() {
    getBlockField.forEach((element) => element.addEventListener("mousemove", paint)) /*фукнция holdclick добавляет прослушиватель Движения мыши и 
    фызова фукции отрисовки*/
    getBlockField.forEach((element) => element.addEventListener("mouseup", stopPaint))
}
/*  фукнция stopPaint добавляет прослушиватель  Отжатого левого клика */
let stopPaint = () => { getBlockField.forEach((element) => element.removeEventListener('mousemove', paint)) }
body.addEventListener("mouseup", stopPaint)/*прослушиватель чтобы вне холста работали все мои прослушки, так удобней рисовать, иначе выйдя из
 холста и отжав там кнопку , фукнция рисования прилипнет к мышке и придется кликать еще раз*/
body.addEventListener("mousedown", holdClick) // для выхода за холст с зажатой клавишей мыши и удобного возврата назад











// getBlockField.forEach((element) => element.addEventListener("mousedown", holdClick = () => {//при нажатом левом клике запускаю фукнцию holdclick

//     getBlockField.forEach((element) => element.addEventListener("mousemove", paint)) /*фукнция holdclick добавляет прослушиватель Движения мыши и
//     фызова фукции отрисовки*/
//     getBlockField.forEach((element) => element.addEventListener("mouseup", stopPaint = () => { /* также фукнция holdclick добавляет прослушиватель
//         Отжатого левого клика (НЕПРАВИЛЬНО ИЗМЕНИ ФУНКЦИЯ ДОЛЖНА ДЕЛАТЬ ЧТО_ТО ОДНО) ивызывает фукнцию stopPaint*/
//         getBlockField.forEach((element) => element.removeEventListener('mousemove', paint)); /* удаляю прослушиватель Движения мыши с фукнцией отрисовки ,
//         для каждого элемента нод листа (for Each)*/
//     }))

// }))