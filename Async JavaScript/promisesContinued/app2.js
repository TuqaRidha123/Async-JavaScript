const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
/*
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('purple', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('brown', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('pink', 1000))
*/
async function rainbow() {
    await delayedColorChange('orange', 1000)
    await delayedColorChange('purple', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('brown', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('pink', 1000)
    return "All Done!"
}

//rainbow().then(() => console.log("End of rainbow"))

async function printRainbow() {
    await rainbow();
    console.log("End of rainbow")
}

printRainbow();