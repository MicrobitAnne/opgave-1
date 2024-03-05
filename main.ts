basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                `)
            basic.pause(1000)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                `)
            basic.pause(1000)
            basic.clearScreen()
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
