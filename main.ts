function UpdateScoreBoard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
input.onButtonPressed(Button.A, function () {
    PA += 1
    Rounds += 1
})
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    Rounds += 1
})
input.onButtonPressed(Button.B, function () {
    PB += 1
    Rounds += 1
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Ready to play?")
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    basic.pause(2000)
    UpdateScoreBoard()
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
reset()
