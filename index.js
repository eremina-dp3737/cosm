let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];
cargoHold.forEach ((el) => {
    console.log(`Внимание: груз ${el} проверен`)
    if (el == 'Кристаллы')
    console.log("⚠️ Внимание! Обнаружен ценный груз!")
})
let cargoHold2 = cargoHold.pop();
console.log(`Разгружен последний отсек: ${cargoHold2}`)

let scienceCargo = cargoHold.slice(1, 4)
console.log(scienceCargo)
console.log(cargoHold)