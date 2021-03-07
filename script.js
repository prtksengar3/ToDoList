let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnClear = $('#btnClear')
let btnSort = $('#btnSort')

function addItem(){
    let listItem = $('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    listItem.click(()=>{
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val("");
}

function cleanTasks(){
    $('#ulTasks .done').remove()
}

function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}

inpNewTask.keypress((e)=>{
    if(e.which==13) addItem()
})
btnAdd.click(addItem)
btnClear.click(cleanTasks)
btnSort.click(sortTasks)
btnReset.click(()=>inpNewTask.val(""))
