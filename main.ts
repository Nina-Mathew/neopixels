// Created by: Nina Mathew
// Created on: 9/30/20
// This program lights up Neopixels
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.show()
basic.pause(1000)
strip.clear()
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.pause(1000)
strip.clear()
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
strip.show()
basic.pause(1000)
strip.clear()
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
strip.show()
