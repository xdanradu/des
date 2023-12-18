let redLight = document.getElementById('red');
let greenLight = document.getElementById('green');

function start() {
    startRed();
}

function startRed() {
    redLight.style.backgroundColor = 'red';
    setTimeout(
        () => {
            document.dispatchEvent(
                new CustomEvent('RedStateEnded')
            );
        },
        1500
    )
}

function startGreen() {
    redLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'green';
}

document.addEventListener(
    'RedStateEnded',
    () => {
        startGreen();
    }
)