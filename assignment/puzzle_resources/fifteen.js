"use strict";
var div;
var spaceY;
var spaceX;


$(function () {
    var puzzleArea = $('#puzzlearea')[0];

    div = puzzleArea.getElementsByTagName('div');
    div = $(div);

    let butonclick = function () {
        if (checkMove(parseInt(this.innerHTML))) {
            swap(this.innerHTML - 1);
            return;
        }
    };

    let onMouseOver = function () {
        if (checkMove(parseInt(this.innerHTML))) {
            this.classList.add("movablepiece");
        }
    };

    $(div).click(butonclick);
    $(div).mouseover(onMouseOver);
    $(div).addClass('puzzlepiece');

    for (var i = 0; i < div.length; i++) {
        div[i].style.left = (i % 4 * 100) + 'px';
        div[i].style.top = (parseInt(i / 4) * 100) + 'px';
        div[i].style.backgroundPosition = '-' + div[i].style.left + ' ' + '-' + div[i].style.top;

    }

    spaceX = '300px';
    spaceY = '300px';

    $('#shufflebutton').click(function () {

        for (var i = 0; i < 300; i++) {
            var rand = parseInt(Math.random() * 100) % 4;

            if (rand == 0) {
                var temp = up(spaceX, spaceY);
                if (temp != -1) {
                    swap(temp);
                }
            }

            if (rand == 1) {
                var temp = down(spaceX, spaceY);
                if (temp != -1) {
                    swap(temp);
                }
            }
            if (rand == 2) {
                var temp = left(spaceX, spaceY);
                if (temp != -1) {
                    swap(temp);
                }
            }

            if (rand == 3) {
                var temp = right(spaceX, spaceY);
                if (temp != -1) {
                    swap(temp);
                }
            }
        }
    });
});



function checkMove(position) {

    if (left(spaceX, spaceY) == (position - 1)) {
        return true;
    }

    if (down(spaceX, spaceY) == (position - 1)) {
        return true;
    }

    if (up(spaceX, spaceY) == (position - 1)) {
        return true;
    }

    if (right(spaceX, spaceY) == (position - 1)) {
        return true;
    }

}

function left(x, y) {

    var cordX = parseInt(x);
    var cordY = parseInt(y);

    if (cordX > 0) {
        for (var i = 0; i < div.length; i++) {
            if (parseInt(div[i].style.left) + 100 == cordX && parseInt(div[i].style.top) == cordY) {
                return i;
            }
        }
    } else {
        return -1;
    }
}

function right(x, y) {
    var cordX = parseInt(x);
    var cordY = parseInt(y);
    if (cordX < 300) {
        for (var i = 0; i < div.length; i++) {
            if (parseInt(div[i].style.left) - 100 == cordX && parseInt(div[i].style.top) == cordY) {
                return i;
            }
        }
    } else {
        return -1;
    }
}

function up(x, y) {
    var cordX = parseInt(x);
    var cordY = parseInt(y);
    if (cordY > 0) {
        for (var i = 0; i < div.length; i++) {
            if (parseInt(div[i].style.top) + 100 == cordY && parseInt(div[i].style.left) == cordX) {
                return i;
            }
        }
    } else {
        return -1;
    }
}

function down(x, y) {
    var cordX = parseInt(x);
    var cordY = parseInt(y);
    if (cordY < 300) {
        for (var i = 0; i < div.length; i++) {
            if (parseInt(div[i].style.top) - 100 == cordY && parseInt(div[i].style.left) == cordX) {
                return i;
            }
        }
    } else {
        return -1;
    }
}

function swap(position) {
    var temp = div[position].style.top;
    div[position].style.top = spaceY;
    spaceY = temp;
    temp = div[position].style.left;
    div[position].style.left = spaceX;
    spaceX = temp;
}