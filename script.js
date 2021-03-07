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
    toggleInputButtons()
}

function cleanTasks(){
    $('#ulTasks .done').remove()
    toggleInputButtons()
}

function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputButtons(){
    btnAdd.prop('disabled',inpNewTask.val()=='')
    btnReset.prop('disabled',inpNewTask.val()=='')
    btnSort.prop('disabled',ulTasks.children().length<1)
    btnClear.prop('disabled',ulTasks.children().length<1)
}
inpNewTask.on('input',toggleInputButtons)
inpNewTask.keypress((e)=>{
    if(e.which==13) addItem()
})
btnAdd.click(addItem)
btnClear.click(cleanTasks)
btnSort.click(sortTasks)
btnReset.click(()=>{
    inpNewTask.val("")
    toggleInputButtons()
}
)
