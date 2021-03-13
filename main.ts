controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(img`
        . . . . . . . . 8 8 . . . . . . 
        . . . . . . . . 8 8 . . . . . . 
        . . . . . . . . 8 9 8 . . . . . 
        . . . . . . . 8 9 9 8 8 . . . . 
        . . . . . . . 8 9 9 9 8 . . . . 
        . . . . . . 8 9 9 9 9 9 8 . . . 
        . . . . . . 8 9 9 9 9 9 8 8 . . 
        . . . . . 8 9 9 9 9 9 9 9 8 . . 
        . . . . 8 9 9 9 9 9 9 9 9 8 . . 
        . . . . 8 9 9 9 9 9 9 9 9 8 . . 
        . . . . 8 9 9 9 9 9 9 9 9 8 . . 
        . . . . 8 9 9 9 9 9 9 9 9 8 . . 
        . . . . . 8 9 9 9 9 9 9 8 8 . . 
        . . . . . . 8 8 8 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, dog, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let fire: Sprite = null
let water: Sprite = null
let dog: Sprite = null
dog = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(dog, 0, 100)
dog.setStayInScreen(true)
dog.setPosition(1, 60)
game.onUpdateInterval(500, function () {
    fire = sprites.create(img`
        . . . . . 2 2 . 2 2 . . . . . . 
        . . . . . 2 2 . 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . 2 2 2 4 4 4 4 4 2 2 . . . . 
        . . 2 2 2 4 4 4 4 4 2 2 . . . . 
        . . 2 2 4 4 5 5 4 4 2 2 . . . . 
        . . 2 2 4 4 5 5 4 4 2 2 . . . . 
        . . 2 2 4 4 5 5 4 4 2 2 2 2 . . 
        . . 2 2 4 4 4 5 4 4 2 2 2 . . . 
        . . 2 2 2 4 4 4 4 4 2 2 2 . . . 
        . . . 2 2 2 4 4 4 2 2 2 2 . . . 
        . . . . 2 2 2 4 4 2 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        `, SpriteKind.Enemy)
    fire.setPosition(160, randint(0, 120))
    fire.setVelocity(-50, 0)
})
