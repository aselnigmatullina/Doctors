document.addEventListener('DOMContentLoaded', () => {

    const addTableBtnEl        = findAddTable()   ;
    const buttonForDeleteTable = findDeleteTable();
    
    
    
    
    
    bindAddTableClick(addTableBtnEl);

    

    fetch('text.json')
         .then(response => response.json())
         .then(data     => Myobj = data)


    
    function findAddTable(){
        return document.querySelector('.addTable');
    }
    function findDeleteTable(){
        return document.querySelector('.deleteTable');
    }
    function createTable() { 
        const elem          = document.querySelector('#elem');
        const table         = document.createElement('table');
        const deleteBtn     = document.createElement('button');

        deleteBtn.className = 'deleteBtn';

        for (let i=0; i < Myobj.hospitals.length; i++) 
        { 
        const tr = document.createElement('tr');
        for (let j = 0; j < Myobj.hospitals.length; j++) { 
        const td = document.createElement('td');
        td.className = 'textareaValue';
    
        const showText = text => td.innerHTML = text;
    
        if(j === 0) {
        showText(`
         <span class="createTableTitle">Название учреждения</span><br />
        ${Myobj.hospitals[i].name}
        `);
        }
        else if(j === 1) {
        showText(`
        <span class="createTableTitle">Телефон</span><br />
        ${Myobj.hospitals[i].phone}`); 
        }
        if(j === 2) { 
        showText(`
        <span class="createTableTitle">Адрес</span><br />
        ${Myobj.hospitals[i].address}`
        )}; 
    
        tableChange(td);
        deleteTable(buttonForDeleteTable, table, deleteBtn);
        deleteOneBlock(deleteBtn, td);

        tr.appendChild(td); 
        } 
        table.appendChild(tr); 
        } 
        elem.appendChild(table);
        elem.appendChild(deleteBtn);   
    }

    const changeValue = e => {
        e.preventDefault();
        const target = e.target;
        const textarea       = document.createElement('textarea');
        textarea.className   = 'edit-area';
        textarea.placeholder = 'Введите новое значение';
        
        
        textarea.value         = target.innerHTML;
        target.innerHTML       = '';    
        target.appendChild(textarea);
        
        textarea.focus();
        target.value = localStorage.getItem('savedData');

        const td = target;
        // td.innerHTML = localStorage.getItem('savedData');
        
              
        textarea.addEventListener('blur', e => {
            td.innerHTML = e.target.value;
            localStorage.setItem('savedData', td.innerHTML)
            td.addEventListener('click', changeValue)
        });
        
              

        

        target.removeEventListener('click', changeValue);
    }




    const tableChange = (td) => td.addEventListener('click', changeValue)

    const deleteTable = (buttonForDeleteTable, table, deleteBtn) => {
        buttonForDeleteTable.addEventListener('click', () => {
            table.remove();
            deleteBtn.remove();
        })
    }
    const deleteOneBlock = (deleteBtn, td) => {
        deleteBtn.addEventListener('click', () => {
            td.remove();
            deleteBtn.remove()
        })
    }

    function bindAddTableClick(addTableBtnEl){
         addTableBtnEl.addEventListener('click', createTable);
    }
})










