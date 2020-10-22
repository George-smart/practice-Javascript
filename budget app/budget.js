//Budget Controller
var budgetController = (function(){

// The Object Constructor for the Income and Expenses
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    //the Data for the income and expenses
    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percentage: -1
    }

    return {
        addBudget: function(type, des, val){
            var newItem, ID;
            
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if(type === 'inc'){
                newItem = new Expense(ID, des, val)
            } else if (type === 'exp'){
                newItem = new Expense(ID, des, val)
            }

            data.allItems[type].push(newItem);

            return newItem;
        }
    }

})();


//UI Controller
var UIController = (function(){

    var DOMstrings = {
        inputBtn: '.add__btn',
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'

    }
    
    return {
        getInput: function(){
            return{
                type:  document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value:  document.querySelector(DOMstrings.inputValue).value
            }
        },
        
        addNewItem: function(obj, type){
            // var html, newHtml;

            // if(type === 'inc'){
            //     html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            // } else if(type === 'exp'){
            //     html = '<div class="item clearfix" id="expense-0"><div class="item__description">Apartment rent</div><div class="right clearfix"><div class="item__value">- 900.00</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            // }
            
            // html = newHtml.replace('%id%', obj.id);
            // newHtml = newHtml.replace('%description%', obj.description);
            // newHtml = newHtml.replace('%value%', obj.value);

        },

        getDomStrings: function(){
            return DOMstrings;
        }

    }
    

})();


//App Global Controller
var appController = (function(budgetCtrl, UICtrl){

    //Event listener for the add btn
    var setupEventListener = function(){
        var DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)    
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function(){
        var input, newItem;
        //1. get the input value
        input = UICtrl.getInput()
        //2. add item to the budget controller
        newItem = budgetCtrl.addBudget(input.type, input.description, input.value);
        //3. add item to the UI
        console.log(newItem)
        //4. Calculate and update the budget

        //5. calculate and update the percentage
    }

    return {
        init: function(){
            setupEventListener();
        }
    }

})(budgetController, UIController);

appController.init();