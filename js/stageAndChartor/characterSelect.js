let characterArray = []
function btnSelect() {
    document.getElementById('sonic').addEventListener('click', e=> {
        if(document.getElementById('sonic').classList.contains('locked') !== false) {
            animation('sonic', 'locked')
        }
        if(document.getElementById('sonic').classList.contains('locked') === false) {
            document.getElementById('sonicDisplay').style.display = 'flex'
            characterArray.push('sonic')
            document.getElementById('sonic').classList.toggle('unlocked')
            document.getElementById('sonic').classList.toggle('locked')
            animation('sonic', 'select')
            deleteCharacter('sonic') 
        }
    })
    document.getElementById('tails').addEventListener('click', e=> {
        if(document.getElementById('tails').classList.contains('locked') !== false) {
            animation('tails', 'locked')
        }
        if(document.getElementById('tails').classList.contains('locked') === false) {
            document.getElementById('tailsDisplay').style.display = 'flex'
            characterArray.push('tails')
            document.getElementById('tails').classList.toggle('unlocked')
            document.getElementById('tails').classList.toggle('locked')
            animation('tails', 'select')
            deleteCharacter('tails')
        }
    })
    document.getElementById('knuckle').addEventListener('click', e=> {
        if(document.getElementById('knuckle').classList.contains('locked') !== false) {
            animation('knuckle', 'locked')
        }
        if(document.getElementById('knuckle').classList.contains('locked') === false) {
            document.getElementById('knuckleDisplay').style.display = 'flex'
            characterArray.push('knuckle')
            document.getElementById('knuckle').classList.toggle('unlocked')
            document.getElementById('knuckle').classList.toggle('locked')
            animation('knuckle', 'select')
            deleteCharacter('knuckle')
        }
    })
    document.getElementById('mighty').addEventListener('click', e=> {
        if(document.getElementById('mighty').classList.contains('locked') !== false) {
            animation('mighty', 'locked')
        }
        if(document.getElementById('mighty').classList.contains('locked') === false) {
            document.getElementById('mightyDisplay').style.display = 'flex'
            characterArray.push('mighty')
            document.getElementById('mighty').classList.toggle('unlocked')
            document.getElementById('mighty').classList.toggle('locked')
            animation('mighty', 'select')
            deleteCharacter('mighty')
        }
    })
    document.getElementById('ray').addEventListener('click', e=> {
        if(document.getElementById('ray').classList.contains('locked') !== false) {
            animation('ray', 'locked')
        }
        if(document.getElementById('ray').classList.contains('locked') === false) {
            document.getElementById('rayDisplay').style.display = 'flex'
            characterArray.push('ray')
            document.getElementById('ray').classList.toggle('unlocked')
            document.getElementById('ray').classList.toggle('locked')
            animation('ray', 'select')
            deleteCharacter('ray')
        }
    })
}
function deleteCharacter(character) {
    document.getElementById(character + 'Trash').addEventListener('click', e=> {
        let x = -1
        let y = -1
        for(var i = 0; i < characterArray.length; i++) {
            x = x + 1
            y = y + 1
            if(characterArray[x] === character) {
                console.log(characterArray[x])
                //array
                characterArray.splice(x, 1)
                console.log(characterArray)
                //document
                document.getElementById(character).classList.toggle('unlocked')
                document.getElementById(character).classList.toggle('locked')
                document.getElementById(character + 'Display').style.display = 'none'
            }
        }
    })
}
function animation(character, type) {
    if(type === 'locked') {
        document.getElementById(character).classList.toggle('lockedAnimation')
        setTimeout(() => {
            document.getElementById(character).classList.toggle('lockedAnimation')    
        }, 2000);
    }
    if(type === 'select') {
        if(character === 'sonic') {
            document.documentElement.style.setProperty('--selectColor', 'blue')
            document.getElementById('display').classList.toggle('selectAnimation')
            setTimeout(() => {
                document.getElementById('display').classList.toggle('selectAnimation')  
            }, 1050);
        }
        if(character === 'tails') {
            document.documentElement.style.setProperty('--selectColor', 'white')
            document.getElementById('display').classList.toggle('selectAnimation')
            setTimeout(() => {
                document.getElementById('display').classList.toggle('selectAnimation')  
            }, 1050);
        }
        if(character === 'knuckle') {
            document.documentElement.style.setProperty('--selectColor', 'darkRed')
            document.getElementById('display').classList.toggle('selectAnimation')
            setTimeout(() => {
                document.getElementById('display').classList.toggle('selectAnimation')  
            }, 1050);
        }
        if(character === 'mighty') {
            document.documentElement.style.setProperty('--selectColor', 'black')
            document.getElementById('display').classList.toggle('selectAnimation')
            setTimeout(() => {
                document.getElementById('display').classList.toggle('selectAnimation')  
            }, 1050);
        }
        if(character === 'ray') {
            document.documentElement.style.setProperty('--selectColor', 'skyBlue')
            document.getElementById('display').classList.toggle('selectAnimation')
            setTimeout(() => {
                document.getElementById('display').classList.toggle('selectAnimation')  
            }, 1050);
        }
    }
}
setTimeout(() => {
    btnSelect()
}, 1000);