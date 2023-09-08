let tower1 = document.getElementById('tower1')
let tower2 = document.getElementById('tower2')
let tower3 = document.getElementById('tower3')
let container = document.getElementById('container')

const time = document.getElementById('timeCount');

let startTime;
let stopTime = 0;

function fixHeightInput() {
    if (height.value > 64) {
        height.value = 64
    } else if (height.value < 1) {
        height.value = 1
    }
}

function startHanoi() {
    while (tower1.firstChild) {
        tower1.removeChild(tower1.firstChild);
    }
    while (tower2.firstChild) {
        tower2.removeChild(tower2.firstChild);
    }
    while (tower3.firstChild) {
        tower3.removeChild(tower3.firstChild);
    }
    column1 = [...Array(Number(height.value)).keys()]
    const containerHeight = height.value * 28 + 55
    container.style.cssText = `height: ${containerHeight}px`
    column1.forEach((element) => {
        let disk = document.createElement('p');
        disk.textContent = ++element
        let width = element + 20;
        disk.style.cssText = `width: ${width}%;`
        tower1.appendChild(disk)
    });
}

function moveDisk(col, dest) {
    if (col == 1 && dest == 2) {
        if (!tower1.firstChild) {return false}
        if (tower2.firstChild) {
            if (Number(tower1.firstChild.textContent) > Number(tower2.firstChild.textContent)) {return false}
        }
        tower2.insertBefore(tower1.firstChild, tower2.firstChild)
    } else if (col == 1 && dest == 3) {
        if (!tower1.firstChild) {return false}
        if (tower3.firstChild) {
            if (Number(tower1.firstChild.textContent) > Number(tower3.firstChild.textContent)) {return false}
        }
        tower3.insertBefore(tower1.firstChild, tower3.firstChild)
    } else if (col == 2 && dest == 1) {
        if (!tower2.firstChild) {return false}
        if (tower1.firstChild) {
            if (Number(tower2.firstChild.textContent) > Number(tower1.firstChild.textContent)) {return false}
        }
        tower1.insertBefore(tower2.firstChild, tower1.firstChild)
    } else if (col == 2 && dest == 3) {
        if (!tower2.firstChild) {return false}
        if (tower3.firstChild) {
            if (Number(tower2.firstChild.textContent) > Number(tower3.firstChild.textContent)) {return false}
        }
        tower3.insertBefore(tower2.firstChild, tower3.firstChild)
    } else if (col == 3 && dest == 1) {
        if (!tower3.firstChild) {return false}
        if (tower1.firstChild) {
            if (Number(tower3.firstChild.textContent) > Number(tower1.firstChild.textContent)) {return false}
        }
        tower1.insertBefore(tower3.firstChild, tower1.firstChild)
    } else if (col == 3 && dest == 2) {
        if (!tower3.firstChild) {return false}
        if (tower2.firstChild) {
            if (Number(tower3.firstChild.textContent) > Number(tower2.firstChild.textContent)) {return false}
        }
        tower2.insertBefore(tower3.firstChild, tower2.firstChild)
    }
}

function endHanoi() {
    let correctAnswer = column1.map((x) => ++x)
    let column2 = []
    let column3 = []
    for (let i = 0; i < tower2.childNodes.length; i++) {
        column2.push(Number(tower2.childNodes[i].textContent))
    }
    for (let i = 0; i < tower3.childNodes.length; i++) {
        column3.push(Number(tower3.childNodes[i].textContent))
    }
    if (JSON.stringify(correctAnswer.concat().sort()) === JSON.stringify(column2.concat().sort())) {
        /*完成時の処理*/
    }
}