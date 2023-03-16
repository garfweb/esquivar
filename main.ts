namespace SpriteKind {
    export const borde = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.borde, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let crater: Sprite = null
info.startCountdown(30)
info.setLife(3)
let nave = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 f 2 2 2 2 2 2 2 f 2 2 . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    `, SpriteKind.Player)
nave.setPosition(77, 107)
controller.moveSprite(nave, 100, 0)
let borde = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.borde)
borde.setPosition(80, 120)
forever(function () {
    if (info.score() == 15) {
        game.gameOver(true)
    }
    game.setGameOverEffect(true, effects.confetti)
})
game.onUpdateInterval(200, function () {
    crater = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c c c . . 
        . c c c c c . c c c c c f c c . 
        c c a c c c c c 8 f f c f f c c 
        c a f a a c c a f f c a a f f c 
        c a 8 f a a c a c c c a a a a c 
        c b c f a a a a a c c c c c c c 
        c b b a a c f 8 a c c c 8 c c c 
        . c b b a b c f a a a 8 8 c c . 
        . . . . a a b b b a a 8 a c . . 
        . . . . c b c a a c c b . . . . 
        . . . . b b c c a b b a . . . . 
        . . . . b b a b a 6 a . . . . . 
        . . . . c b b b 6 6 c . . . . . 
        . . . . . c a 6 6 b c . . . . . 
        . . . . . . . c c c . . . . . . 
        `, SpriteKind.Enemy)
    crater.setPosition(randint(0, 160), 0)
    crater.setVelocity(0, 50)
})
