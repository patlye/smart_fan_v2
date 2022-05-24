let temp = 0
OLED.init(128, 64)
basic.forever(function () {
    temp = Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P2)
    OLED.clear()
    OLED.writeString("Temperature")
    OLED.writeNum(temp)
    if (temp > 20) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
