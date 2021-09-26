const transactionsIncomeArea = document.querySelector('.transactions__incomeArea');
const transation = document.querySelector('.transation');
const transactionTemp = document.querySelector('.transactionTemp');
const transationName = document.querySelector('.transation__name');
const transactionAmount = document.querySelector('.transaction__amount');

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

let root = document.documentElement;
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
    root.style.setProperty('--whiteColor', '#1a1919');
    root.style.setProperty('--blackColor', '#fff');
}
const darkColor = () => {
    root.style.setProperty('--blackColor', '#1a1919');
    root.style.setProperty('--whiteColor', '#fff');
}

const saveBtn = () => {
    let name = inputName.value;
    let amount = inputAmount.value;
    let select = selectCategory.value;

    if (name != "" && amount != 0 && select != "none") {
        incomeTransaction();
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

const incomeTransaction = () =>{
    const tempTrans = transactionTemp.content.cloneNode(true);
    transation.setAttribute('id', id);
    const sallaryName = transation.querySelector('.sallaryName');
    tempTrans.querySelector('.sallaryName').textContent = inputName.value;
    const sallary = transation.querySelector('.sallary');
    tempTrans.querySelector('.sallary').textContent = inputAmount.value + ' zł';
    transactionsIncomeArea.appendChild(tempTrans);
    id++;
}

btnCancel.addEventListener('click', cancelTransaction);
addBtnTransaction.addEventListener('click', addTransaction);
styleBtnLight.addEventListener('click', lightColor);
styleBtnDark.addEventListener('click', darkColor);
btnSave.addEventListener('click', saveBtn);
btnCancel.addEventListener('click', cancelBtn);