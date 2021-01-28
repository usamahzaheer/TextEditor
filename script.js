/*
TODO: update the text in the "Formated Text" as a user type in the text area
TODO: TOGETHER: Add a .bold, .italic classes to "Formated Text" when the appropriate button is clicked
TODO: Add an .underline class to "Formated Text" when Underline button is clicked
TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
*/



function updateText () {
    let text = document.getElementById('text-input').value;
    document.getElementById('text-output').innerHTML= text;
}

function makeBold(elem){
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
}

function makeItalic(elem){
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
}

function makeUnderline(elem){
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('underline');
}

function alignText(elem, alignType){
    //CODE GOES HERE
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonsList = document.getElementsByClassName('align');
    for(let i = 0; i < buttonsList.length; i ++){
        buttonsList[i].classList.remove('active');
    }
    elem.classList.add('active');
}