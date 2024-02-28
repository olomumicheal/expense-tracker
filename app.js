const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

expenseForm.addEventListener('submit', addExpense);
function addExpense(event){
    event.preventDefault();


const expenseNameInput = document.getElementById('expenseName');
const expenseAmountInput = document.getElementById("expenseAmount");

const expenseName = expenseNameInput.value;
const expenseAmount = parseFloat(expenseAmountInput.value);

if(expenseName && !isNaN(expenseAmount)){
    const expenseItem = document.createElement("li");
    expenseItem.innerHTML = `
    <span>${expenseName}</span>
    <span>${expenseAmount.toFixed(2)}</span>
    <button class="delete-btn">Delete</button>
    `;

    expenseList.appendChild(expenseItem);

    expenseNameInput.value = '';
    expenseAmountInput.value = '';

    const deleteBtn = expenseItem.querySelector('.delete-btn');
    deleteBtn.addEventListener("click", () => {
        expenseItem.remove();
    });
}else{
    alert("please enter valid expense name and amount");
}
}