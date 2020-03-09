function FtoC() {
    let f = document.getElementById("txtDegF")
    let c = document.getElementById("divDegC");
    let num = f.value;
    c.innerHTML = num + '&deg; F is ' + (num - 32) * 5 / 9 + '&deg; C';
    document.body.style.backgroundColor = tempColor(num);
}

function CtoF() {
    let c = document.getElementById("txtDegC")
    let f = document.getElementById("divDegF");

    let num = (c.value * 9 / 5 + 32);
    f.innerHTML = c.value + '&deg; C is ' + num + '&deg; F';
    document.body.style.backgroundColor = tempColor(num);
}

function tempColor(fahr) {
    if (fahr <= 32) {
        color = 'teal'
    } else if (fahr > 32 && fahr < 88) {
        color = 'green';
    } else {
        color = 'pink';
    }
    return color;
}