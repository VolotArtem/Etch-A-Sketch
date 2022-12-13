const field = document.querySelector(".field")
const oneBlock = 50; //test name for generate field
const getFullField = (oneBlock) => { return square = oneBlock * oneBlock }//funct for calculate square field 
//funct for add div in field grid РАЗДЕЛИ НА ДВЕ ФУНКЦИИ так как тут еще смена стиля для основного поля грид
const paintFullField = (getFullField) => {
    field.style.gridTemplateColumns = `repeat(${oneBlock}, 1fr)`
    field.style.gridTemplateRows = `repeat(${oneBlock}, 1fr)`
    for (let i = 0; i < getFullField; i++) {
        let block = document.createElement("div");
        field.append(block)
    }

}
paintFullField(getFullField(oneBlock));