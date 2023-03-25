document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 10; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        document.querySelector('.container').appendChild(box);
    }


    const refresh = document.querySelector('.refresh');
    const refreshbtn = document.querySelector('#refresh');
    const randColBlock = document.querySelectorAll('.box');



    function randomColor() {

        var chars = "0123456789abcdef";
        var colorLength = 6;
        var color = "";

        for (var i = 0; i < colorLength; i++) {
            var randomColor = Math.floor(Math.random() * chars.length);
            color += chars.substring(randomColor, randomColor + 1);
        }
        return "#" + color
    }

    refreshbtn.addEventListener('click', function () {
        randColBlock.forEach(e => {
            var newColor = randomColor();
            e.style.backgroundColor = newColor;
            e.innerHTML = newColor;
        });
    })
});
