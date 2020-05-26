function alertFn(){
alert("Hello, world");
}

function biggerFont() {
    var x = document.getElementById("biling_checkbox").checked;
    let element = document.getElementById("user_text");
    if(x){
        element.classList.add("bigger_font", "textarea_color");
    }else{
        element.classList.add("bigger_font");
    }
}

function biggerFontTimer() {
    var x = document.getElementById("biling_checkbox").checked;
    let element = document.getElementById("user_text");

    var style = window.getComputedStyle(element).fontSize;
    var fontSize = Math.ceil(parseInt(style) * 72 / 96); 
    //alert(fontSize);

    if(x){
        element.classList.add("textarea_color");
        element.style.fontSize = (fontSize + 2) + 'pt';
    }else{
        element.style.fontSize = (fontSize + 2) + 'pt';
    }
}

function biggerFontTimerInterval(){
    setInterval(biggerFontTimer,500);
}

