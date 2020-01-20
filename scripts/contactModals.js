let contactsModalEl      = findContactsModal()     ;
let contactsModalOpenEl  = findContactsModalOpen() ;
let contactsModalCloseEl = findContactsModalClose();

bindContactsModalClick(contactsModalEl, contactsModalOpenEl, contactsModalCloseEl);

function findContactsModal(){
    return document.querySelector('.modalContacts');
}
function findContactsModalOpen(){
    return document.querySelector('.modalContactsOpen');
}
function findContactsModalClose(){
    return document.querySelector('.contactClose');
}
function bindContactsModalClick(contactsModalEl, contactsModalOpenEl, contactsModalCloseEl){
    contactsModalOpenEl.addEventListener('click', () => {
        contactsModalEl.style.display = 'block';
    });
    contactsModalCloseEl.addEventListener('click', () => {
        contactsModalEl.style.display = 'none';
    })
}

