input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # . #
            . . . # .
            . . . . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
