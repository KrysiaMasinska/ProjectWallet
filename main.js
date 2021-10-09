const transation = document.querySelector(".transation");
const transactionTemp = document.querySelector(".transactionTemp");
const transationName = document.querySelector(".transation__name");
const transactionAmount = document.querySelector(".transaction__amount");

const transactionsExspensesArea = document.querySelector(".transactions__exspensesArea");
const transactionsIncomeArea = document.querySelector(".transactions__incomeArea");
const moneyAvaliable = document.querySelector(".money__avaliable");
const addBtnTransaction = document.querySelector(".controls__btn--addTransation");
const deleteBtnAllTransaction = document.querySelector(".controls__btn--deleteTransation");
const styleBtnLight = document.querySelector(".styleSelectionBox__btn--light");
const styleBtnDark = document.querySelector(".styleSelectionBox__btn--dark");
const addTransactionPanel = document.querySelector(".addTransactionPanel");

const btnSave = document.querySelector(".panelButtons__btn--save");
const btnCancel = document.querySelector(".panelButtons__btn--cancel");
const btnDelete = document.querySelector(".btnDelete");
const inputName = document.querySelector("#name");
const inputAmount = document.querySelector("#amount");
const category = document.querySelector("#category");

let root = document.documentElement;
let ID = 1;
let categoryIcon;
let selectedCategory;
let arrayMoney = [0];

const addTransaction = () => {
  addTransactionPanel.style.display = "flex";
};

const cancelTransaction = () => {
  addTransactionPanel.style.display = "none";
};

const lightColor = () => {
  root.style.setProperty("--whiteColor", "#1a1919");
  root.style.setProperty("--blackColor", "#fff");
};
const darkColor = () => {
  root.style.setProperty("--blackColor", "#1a1919");
  root.style.setProperty("--whiteColor", "#fff");
};

const saveBtn = () => {
  let name = inputName.value;
  let amount = inputAmount.value;
  let select = category.value;

  if (name != "" && amount != 0 && select != "none") {
    newTransaction();
    cancelTransaction();
    cancelBtn();
  } else {
    alert("Uzupełnij wszystkie pola");
  }
};

const cancelBtn = () => {
  inputName.value = "";
  inputAmount.value = "";
  category.value = "none";
};

const deleteTransaction = ID => {
  const deleteTrans = document.getElementById(ID);
  const transactionAmount = parseFloat(deleteTrans.childNodes[3].innerText);
  const indexOfTransaction = arrayMoney.indexOf(transactionAmount);
  
  arrayMoney.splice(indexOfTransaction, 1);
  deleteTrans.parentNode.removeChild(deleteTrans);
  countMoney(arrayMoney);
};

const deleteAll = () =>  {
  const deleteAllTransactions = document.querySelectorAll('.transation');
  deleteAllTransactions.forEach( el =>{
    el.remove();
  })
}

const newTransaction = () => {
  const tempTrans = transactionTemp.content.cloneNode(true);
  selectCategory();
  checkCategory(selectedCategory);
  tempTrans.querySelector(".transation").setAttribute("id", ID);
  tempTrans.querySelector('.icon').setAttribute('class', categoryIcon);
  tempTrans.querySelector('.sallaryName').textContent = inputName.value;
  tempTrans.querySelector(".sallary").textContent = inputAmount.value + " zł";
  tempTrans.querySelector(".btnDelete").setAttribute("onclick", `deleteTransaction(${ID})`);

  inputAmount.value > 0 ? transactionsIncomeArea.appendChild(tempTrans) : transactionsExspensesArea.appendChild(tempTrans);
  arrayMoney.push(parseFloat(inputAmount.value));
  countMoney(arrayMoney);
  ID++;
};

const selectCategory = () => {
  selectedCategory = category.options[category.selectedIndex].text;
};

const countMoney = money => {
  const newMoney = money.reduce((a,b) => (a + b));
  moneyAvaliable.textContent = `${newMoney} zł`;
};

const checkCategory = transaction => {
  switch (transaction) {
    case "[ + ] Przychód":
      categoryIcon = 'fas fa-money-bill-wave';
      break;
    case "[ - ] Jedzenie":
      categoryIcon = 'fas fa-file-invoice-dollar';
      break;
    case "[ - ] Hobby":
      categoryIcon = 'fas fa-gifts';
      break;
    case "[ - ] Oszczędności":
      categoryIcon = 'fas fa-piggy-bank';
      break;
  }
};

deleteBtnAllTransaction.addEventListener('click', deleteAll);
btnCancel.addEventListener("click", cancelTransaction);
addBtnTransaction.addEventListener("click", addTransaction);
styleBtnLight.addEventListener("click", darkColor);
styleBtnDark.addEventListener("click", lightColor);
btnSave.addEventListener("click", saveBtn);
// btnCancel.addEventListener("click", cancelBtn);
