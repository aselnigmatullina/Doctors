
let modalEl              = findModal()             ;
let modalOpenEl          = findModalOpen()         ;
let modalCloseEl         = findModalClose()        ;
let modalWithTaskEl      = findModalWithTask()     ;
let modalWithTaskOpenEl  = findModalWithTaskOpen() ;
let modalWithTaskCloseEl = findModalWithTaskClose();

bindModalClick(modalEl, modalOpenEl, modalCloseEl);
bindModalWithTaskClick(modalWithTaskEl, modalWithTaskOpenEl, modalWithTaskCloseEl);




function findModal(){
    return document.querySelector('.modal');
};
function findModalOpen(){
    return document.querySelector('.modalOpen');
};
function findModalClose(){
    return document.querySelector('.modal__close');
};
function findModalWithTask(){
    return document.querySelector('.modalWithTask');
};
function findModalWithTaskOpen(){
    return document.querySelector('.modalWithTaskOpen');
};
function findModalWithTaskClose(){
    return document.querySelector('.modalClose')
};




function bindModalClick(modalEl, modalOpenEl,modalCloseEl){
    modalOpenEl.addEventListener('click', () => {
        modalEl.style.display = 'block';
    });
    modalCloseEl.addEventListener('click', () => {
        modalEl.style.display = 'none';
    })
};
function bindModalWithTaskClick(modalWithTaskEl, modalWithTaskOpenEl, modalWithTaskCloseEl){
    modalWithTaskOpenEl.addEventListener('click', () => {
        modalWithTaskEl.style.display = 'block';
    });
    modalWithTaskCloseEl.addEventListener('click', () => {
        modalWithTaskEl.style.display = 'none';
    })
};




