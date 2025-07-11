


const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color); // optional
    return color;
};

let intervalID;

const starChangingColor = function () {
    // Prevent multiple intervals
    if(!intervalID){
        intervalID = setInterval(changeBGColor, 1000);
    }

    function changeBGColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function () {
    clearInterval(intervalID);
    intervalID=null;
};

document.querySelector("#start").addEventListener('click', starChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);
