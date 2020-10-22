//SELECT THE ELEMENTS
const inputName = document.getElementById('name');
const time = document.getElementById('date');
const income = document.getElementById('amount');
const addBtn = document.querySelector('.expense-btn');
const table = document.getElementById('table');

const del = 'close'
//Create the element to insert
function expenseInput(name, date, amount){
    const text = ` <tr class="text-display">
                    <td class="name">${name}</td>
                    <td class="date">${date}</td>
                    <td class="amount">${amount}
                    <button class="${del}">X</button></td>
                    </tr>`
    const position = 'beforeend'

    table.insertAdjacentHTML(position, text)
}


addBtn.addEventListener('click', function(e){
    const cuDate = time.value;
    const cuAmount = income.value;
    const cuName = inputName.value;
    if(cuDate !== "" && cuName !== "" && cuAmount !== ""){
        expenseInput(cuName, cuDate, cuAmount)
    }
    time.value = ''
    income.value = ''
    inputName.value = ''
    
});

table.addEventListener('click', removeItem)

//Remove of Data
function removeItem(e){
    if(e.target.classList.contains(del)){
        var tr = e.target.parentElement.parentElement
        table.removeChild(tr)
    }
}

