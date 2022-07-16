function btnSelect() {
    document.getElementById('sonic').addEventListener('click', e=> {
        document.getElementById('sonicDisplay').style.display = 'flex'
        const trash = document.createElement('i')
        trash.setAttribute('class', 'fas fa-trash-alt')
        document.getElementById('sonic').append(trash)
    })
}
setTimeout(() => {
    btnSelect()
}, 1000);