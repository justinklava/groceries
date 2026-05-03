const elmRoot = document.getElementById('root');
const elmMain = document.getElementById('main');
const elmHeader = document.getElementById('header');
const elmFooter = document.getElementById('footer');
const elmQuantity = document.getElementById('input-quantity');
const elmItems = document.getElementById('div-items');
const elmStore = document.getElementById('input-store');
const elmOther = document.getElementById('span-otherstore');

function buildStoreList(){
    console.log('Entry: buildStoreList()');
    //fetch list of stores and build list including 'other' with extra field to add store
}

function otherStore() {
    console.log('Entry: otherStore()');
    if(elmStore.value === 'Other') {
        console.log('Other');
        //display additional input for store name
        elmOther.style.display = 'inline';
        return;
    }
    elmOther.style.display = 'none';
}

function addItemsFields() {
    console.log('Entry: addItemsFields()');
    elmItems.replaceChildren();
    for(let i=1; i<=elmQuantity.value; i++) {
        //add row of input fields
        const div = document.createElement('div');
        div.id = 'items-div-' + i;
        div.className = 'items-div';
        elmItems.appendChild(div);
        console.log(i);
    }

}

function initialize() {
    buildStoreList();
    addItemsFields();
    otherStore();
}


elmQuantity.addEventListener('input', addItemsFields);
elmStore.addEventListener('input', otherStore);
window.addEventListener('load', initialize);
