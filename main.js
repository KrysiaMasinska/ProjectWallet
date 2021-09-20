const transactionsIncomeArea = document.querySelector('.transactions__incomeArea');
const transactionsExspensesArea = document.querySelector('.transactions__exspensesArea');
const moneyAvaliable = document.querySelector('.money__avaliable');
const addBtnTransaction = document.querySelector('.controls__btn--addTransation');
const deleteBtnAllTransaction = document.querySelector('.controls__btn--deleteTransation');
const styleBtnLight = document.querySelector('.styleSelectionBox__btn--light');
const styleBtnDark = document.querySelector('.styleSelectionBox__btn--dark');
const addTransactionPanel = document.querySelector('.addTransactionPanel');

const btnSave = document.querySelector('.panelButtons__btn--save');
const btnCancel = document.querySelector('.panelButtons__btn--cancel');
const btnDelete = document.querySelector('.btnDelete');
const inputName = document.querySelector('#name');
const inputAmount = document.querySelector('#amount');
const selectCategory = document.querySelector('#category');


let id = 1;
let categoryIcon;
let selectedCategory;
let arrayMoney = [0];

const addTransaction = () => {
    addTransactionPanel.style.display = 'flex';
}

const cancelTransaction = () => {
    addTransactionPanel.style.display = 'none';
}

const lightColor = () => {
    document.body.style.background = '#fefefe';
    console.log('light');
}
const darkColor = () => {
    document.body.style.background = '#1a1919'
}

const saveBtn = () => {
    let name = inputName.value;
    let amount = inputAmount.value;
    let select = selectCategory.value;

    if (name != "" && amount != 0 && select != "none") {

        cancelTransaction();
        cancelBtn();
    } else {
        alert('Uzupełnij wszystkie pola');
    }

}

const cancelBtn = () => {
    inputName.value = "";
    inputAmount.value = "";
    selectCategory.value = "none";
}

btnCancel.addEventListener('click', cancelTransaction);
addBtnTransaction.addEventListener('click', addTransaction);
styleBtnLight.addEventListener('click', lightColor);
styleBtnDark.addEventListener('click', darkColor);
btnSave.addEventListener('click', saveBtn);
btnCancel.addEventListener('click', cancelBtn);