// from env.js
//     const apiURL;
const elmRoot = document.getElementById('root');
const elmMain = document.getElementById('main');
const elmHeader = document.getElementById('header');
const elmFooter = document.getElementById('footer');
const elmQuantity = document.getElementById('input-quantity');
const elmItems = document.getElementById('div-items');
const elmStore = document.getElementById('select-store');
const elmSpanOther = document.getElementById('span-otherstore');
const elmOther = document.getElementById('input-otherstore');
const elmSubmit = document.getElementById('button-submit');
const elmReset = document.getElementById('button-reset');

async function buildStoreList(){
    console.log('Entry: buildStoreList()');
    elmStore.replaceChildren();
    //fetch list of stores and build list including 'Other...'
    const response = await fetch(apiURL+'stores', {
        method: 'GET'
    });
    const data = await response.json();
    const storeNames = data.storeName;
    const storeIDs = data.storeID;
    for(let i=0; i<storeNames.length; i++) {
        const option = document.createElement('option');
        option.value = storeIDs[i];
        option.text = storeNames[i];
        elmStore.add(option);
    }
    const option = document.createElement('option');
    option.value = 0;
    option.text = 'Other...';
    elmStore.add(option);
}

function otherStore() {
    console.log('Entry: otherStore()');
    //console.log(elmStore.options[elmStore.selectedIndex].value);
    if(elmStore.options[elmStore.selectedIndex].value == 0) {
        //console.log('Debug: show Other field');
        //display additional input for store name
        elmSpanOther.style.display = 'inline';
        return;
    }
    elmSpanOther.style.display = 'none';
}
/*
function updateStoreValue() {
    if(elmStore.options[elmStore.selectedIndex].text === 'Other...') {
        elmStore.options[elmStore.selectedIndex].value = elmOther.value;
    }
}
*/
function addItemsFields() {
    console.log('Entry: addItemsFields()');
    elmItems.replaceChildren();
    for(let i=1; i<=elmQuantity.value; i++) {
        //add row of input fields
        const div = document.createElement('div');
        div.id = 'items-div-' + i;
        div.className = 'items-div';
        const labelItemName = document.createElement('label');
        labelItemName.for = 'input-item-name-' + i;
        labelItemName.innerText = 'Item: ';
        
        const inputItemName = document.createElement('input');
        inputItemName.id = 'input-item-name-' + i;
        
        div.appendChild(labelItemName);
        div.appendChild(inputItemName);
        elmItems.appendChild(div);
    }

}

async function submit(event) {
    event.preventDefault();
    // validate form values and then fetch POST
    const test_body = {
        date: '2026-05-03',
        store: 'Sample Store 1',
        subtotal: 10.00,
        tax: 1.5,
        total: 11.50,
        quantity: 1,
        items: [
            {
                itemFields: 'some content'
            }
        ]
    };
    const response = await fetch(apiURL+'insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(test_body)
    });
    const data = await response.json();
    if(data.success) {
        console.log(data.message);
    }
    else {
        console.error(`Error ${apiURL}insert: ${data.message}`);
    }
}

async function initialize() {
    await buildStoreList();
    addItemsFields();
    otherStore();
}

function reset() {
    elmSpanOther.style.display = 'none';
    elmItems.replaceChildren();
}


elmQuantity.addEventListener('input', addItemsFields);
elmStore.addEventListener('input', otherStore);
//elmOther.addEventListener('input', updateStoreValue);
elmSubmit.addEventListener('click', submit);
elmReset.addEventListener('click', reset);
window.addEventListener('load', initialize);
