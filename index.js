let townSelect = document.querySelector("#town")
let departmentSelect = document.querySelector("#department")
let staffSelect = document.querySelector("#staff")
let teamSelect = document.querySelector("#team")
let timeSelect = document.querySelector("#time")
let btn = document.querySelector("#btn")
let obj = {}
let towns = [
    'Москва', 'Санкт-Петербург',
    'Екатеринбург', 'Пенза',
    'Брянск', 'Тамбов', 'Орел'
]

let departments = {
    0: ['001', '002'],
    1: ['355', '573'],
    2: ['477', '836'],
    3: ['493', '856'],
    4: ['033', '282'],
    5: ['087'],
    6: ['363']
}

let staff = {
    001: ['Петров', 'Сидоров', 'Козлов'],
    002: ['Иванов', 'Колганова', 'Вьюгин'],
    355: ['Белов', 'Рябов'],
    573: ['Козлова', 'Никитин', 'Алексеев'],
    477: ['Алексеева', 'Щербаков', 'Кисленко'],
    836: ['Минина', 'Петрова', 'Иванова'],
    493: ['Васильев', 'Бауков'],
    856: ['Минин', 'Берюкова', 'Белянин'],
    033: ['Миронова', 'Панина', 'Безруков'],
    282: ['Прохоров', 'Калинин'],
    087: ['Дедышева', 'Учуватов', 'Майоров'],
    363: ['Щербаков', 'Кострова', 'Баранова'],
}

for (let i = 0; i < towns.length; i++) {
    let option = document.createElement("option")
    option.innerText = towns[i]
    option.id = "town" + `${i}`
    option.value = i
    townSelect.append(option)
}

for (key in departments) {
    departments[key].forEach((element) => {
        addOption(element, departmentSelect)
    });
}
for (key in staff) {
    staff[key].forEach((element) => {
        addOption(element, staffSelect)
    });
}

function addOption(value, select){
    let option = document.createElement("option")
    option.innerText = value
    option.value = value
    select.append(option)
}

townSelect.onchange = function (event) {
    let value = event.target.value
    obj.town = towns[value]
    for (key in departments) {
        if (value == key) {
            departmentSelect.innerHTML = '<option value="" disabled selected>Цех</option>'
            departments[key].forEach(element => {
                departmentSelect.innerHTML+=`<option value="${element}">${element}</option>`
            });
        }
    }
}

departmentSelect.onchange = function (event) {
    let value = event.target.value
    obj.department = value
    for (key in staff) {
        if (value == key) {
            staffSelect.innerHTML = '<option value="" disabled selected>Сотрудники</option>'
            staff[key].forEach(element => {
                staffSelect.innerHTML+=`<option value="${element}">${element}</option>`
            });
        }
    }
}
staffSelect.onchange = function (event) {
    let value = event.target.value
    obj.staff = value
}
teamSelect.onchange = function (event) {
    let value = event.target.value
    obj.team = value
}
timeSelect.onchange = function (event) {
    let value = event.target.value
    obj.time = value
}
btn.onclick = function (event) {
    let objectString = JSON.stringify(obj);
    document.cookie = "myobject=" + objectString + "; expires="+ (new Date()).toDateString();
}
btn1.onclick = function (event) {
    let cookies = document.cookie;
    div = document.createElement("div")
    div.innerText = cookies
    document.body.append(div)
}



