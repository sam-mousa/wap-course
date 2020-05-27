let renderTimer = null;
let framsArray = [];
let currentIndex = 0;

function selectedAnimation(){
    let textareaValue = document.getElementById("textarea");
    let animationValue = document.getElementById("animation");
    
    if(animationValue.value == "Blank"){
        textareaValue.value = BLANK;
    }else if(animationValue.value == "Exercise"){
        textareaValue.value = EXERCISE;
    }else if(animationValue.value == "Bike"){
        textareaValue.value = BIKE;
    }else if(animationValue.value == "Dive"){
        textareaValue.value = DIVE;
    }else if(animationValue.value == "Juggler"){
        textareaValue.value = JUGGLER;
    }else {

    }
}
function render(){
    let turboCheck = document.getElementById("turbo").checked;

    if(turboCheck){
        var x = 50;
    }else{
        var x =250
    }
    if(renderTimer){
        clearInterval(renderTimer)
    }
    renderTimer = setInterval(() => {
        let currentFrame = framsArray[currentIndex];
        if(currentIndex == framsArray.length-1){
            currentIndex = 0;
        }else {
            currentIndex++
        }
        document.getElementById("textarea").value = currentFrame;
    }, x);
   }

function turboSpeed(){
    if(document.getElementById("start_but").disabled == true){
        render();
    }
}

function start(){
    document.getElementById("start_but").disabled = true;
    document.getElementById("stop_but").disabled = false;
    document.getElementById("animation").disabled = true;
    document.getElementById("textarea").disabled = true;

    framsArray = document.getElementById("textarea").value.split("=====\n");
    currentIndex = 0;
    render(currentIndex);
}

function stop(){
    document.getElementById("start_but").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("stop_but").disabled = true;
    document.getElementById("textarea").disabled = false;
    clearInterval(renderTimer);
    selectedAnimation();
   
}

function selectedSize(){
    let element = document.getElementById("textarea");
    if(document.getElementById("size").value == "Tiny"){
        element.className = "tiny_size";
    }else if(document.getElementById("size").value == "Small"){
        element.className = "small_size";
    }else if(document.getElementById("size").value == "Medium"){
        element.className = "medium_size";
    }else if(document.getElementById("size").value == "Large"){
        element.className = "large_size";
    }else if(document.getElementById("size").value == "Extra Large"){
        element.className = "extra_larg_size";
    }else if(document.getElementById("size").value == "XXL"){
        element.className = "xxl_size";
    }else {
        
    }
}

