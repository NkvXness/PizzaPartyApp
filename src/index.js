let count = 0;
let pizzaEaters = 0;
let pb = document.querySelector('.pizza')
let button = document.getElementById('load-btn');
let appDouble = document.getElementById('pizzaApp');
let app = document.getElementById('app');
app.innerHTML = `<p>Click 👆 this button</p>`;

Element.prototype.appendBefore = function(element) {
    element.parentNode.insertBefore(this, element);
}, false;

Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;

let titleCounter = document.createElement('h2');
titleCounter.appendAfter(document.querySelector('.pizza'));


let slices = document.createElement('div');
slices.className = 'pizza__slices';


function inputData(data) {
    for (let dataIndex = 0; dataIndex < data.length; ++dataIndex) {
        if (data[dataIndex].eatsPizza === true) {
            pizzaEaters += 1;
        }
        count += 1;
    }
    loaded();
    slicesDrawing(pizzaEaters);
}


function visitorsNumber(count, pizzaEaters) {
    titleCounter.innerHTML = count + ' ' + 'participants' + ' ' + '/' + ' ' + pizzaEaters + ' ' + 'eaters';
}

visitorsNumber(count, pizzaEaters);


function load() {
    app.innerHTML = 'waiting...';
    button.className = 'loading btn';
    count = 0;
    pizzaEaters = 0;
    pizzaBaseVis();
}


function pizzaBaseInvis() {
    pb.style.visibility = 'hidden';
}

pizzaBaseInvis();

function pizzaBaseVis() {
    pb.style.visibility = 'visible';
}


function slicesDrawing(pizzaEaters) {
    let partyMembers = pizzaEaters;
    let deg = 360 / partyMembers;
    let countSlices = 0;
    for (let i = 0; i < partyMembers; i++) {
        let divSlice = document.createElement('div');
        divSlice.className = 'slice';
        divSlice.style.transform = 'rotate(' + countSlices + 'deg)';
        countSlices += deg;
        slices.appendChild(divSlice);
    }
}


function loaded() {
    button.className = 'btn';
    app.innerHTML = `<p>Click 👆 this button</p>`;
    visitorsNumber(count, pizzaEaters);
}


function arrDiv() {
    let cutSlice = document.querySelectorAll('.slice');
    for (let i = 0; i < cutSlice.length; i++) {
        cutSlice[i].remove();
    }
}


document.getElementById('load-btn').addEventListener('click', () => {
    if (count > 0 && pizzaEaters > 0) {
        arrDiv();
        count = 0;
        pizzaEaters = 0;
    }
    load();
    fetch('https://gp-js-test.herokuapp.com/pizza')
        .then((response) => response.json())
        .then(function(data) {
            setTimeout(() => {
                visitorsNumber(count, pizzaEaters);
                slices.appendAfter(document.querySelector('.pepperonis'));
                return inputData(data.party);
            }, 1000);
        });
});
