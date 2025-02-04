let listarray = [
    {
    name: "bring books",
    date: '4-9-2004'
},
 {
    name: "wash clothes",
    date: '3-5-2007'
},

    
];
function additemstolist() {
    let inputname = document.querySelector('.js-text-box').value;
    let inputdate = document.querySelector('.js-date').value;
   
    listarray.push({
        name:inputname,
        date:inputdate
    });
    console.log(listarray);
    /*
    for(let i=0;i<listarray.length;i++){
        document.querySelector('.displaytodo').innerHTML = "List are:\n" +listarray;
        }
        */
   document.querySelector('.js-text-box').value = '';
    updatetodo();
}
updatetodo();
function updatetodo() {
    let todolisthtml = '';
    for (let i = 0; i < listarray.length; i++) {
        const objectvalue = listarray[i];
        const name = objectvalue.name;
        const date = objectvalue.date;
        // const{name,date} = objectvalue;
        const html = `
        <p>
        ${name}
        ${date}
        <button onclick="listarray.splice(${i},1);
        updatetodo();">Delete</button>
        </p>`
        todolisthtml += html;
    }
    document.querySelector('.display-result').innerHTML = todolisthtml;
}















