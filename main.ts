input.onButtonPressed(Button.A, function () {
    basic.showString("Exceso de ruido hoy:" + RUIDO + "veces")
})
let RUIDO = 0
basic.showString("Iniciando sistema de control de sonido y temperatura")
basic.pause(100)
basic.showIcon(IconNames.Yes)
RUIDO = 0
basic.forever(function () {
    if (input.soundLevel() > 200) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(100)
        }
        RUIDO = 1 + RUIDO
    }
})
basic.forever(function () {
    if (input.temperature() > 27) {
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . . # # #
                # . # . .
                . . # . .
                . . # . .
                . . # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        basic.clearScreen()
    }
})
