//Select Elements
var input = document.getElementById('add-text');
var container = document.querySelector('.bottom');
var addBtn = document.getElementById('add-btn');
var p = document.getElementsByTagName('p')[0];

var view = "btn";

//Create a function to hold the elements
function inputMessage(message){
    const text = `<div class="colum" >
                        <p>${message}</p>
                        <button class="${view}">View</button>
                    </div>`
    const position = 'beforeend';
    
    container.insertAdjacentHTML(position, text)
}

//Add event Listener
addBtn.addEventListener('click', displayItem);


function displayItem(){
     //get the input value
     const inputValue = input.value;
    
    // update the UI
     if(inputValue !== ''){
        //Remove the p tag
        p.style.display = 'none' 
        var pop = inputMessage(inputValue)
     } else {
         p.style.display = 'block'  
     } 
    input.value = '' 
}

/*

var popUpMess = function(event){
    displayItem();
    var col = event.target;
    if(col.classList.contains(view)){

    }
}

var popUp = function(message){
    const content = `<div class="pop-up"><button class="close">&times;</button><p>${message}</p></div>`

    document.body.insertAdjacentHTML('beforeend', content);
}
*/