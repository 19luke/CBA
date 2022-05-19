controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lunk,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 7 7 f f f f f . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e 7 f 7 f f 7 f 7 e f . . 
        . . f f f 7 7 e e 7 7 f f f . . 
        . f f e f 7 f e e f 7 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 7 7 f f f f . . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e 7 f 7 f f f 7 f e f . . 
        . . f f f 7 f e e 7 7 f f f . . 
        . . f e 7 f f e e 7 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 7 7 7 7 7 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 7 7 f f f f f . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e 7 f 7 f f 7 f 7 e f . . 
        . . f f f 7 7 e e 7 7 f f f . . 
        . f f e f 7 f e e f 7 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 7 7 f f f f . . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e f 7 f f f 7 f 7 e f . . 
        . . f f f 7 7 e e f 7 f f f . . 
        . . f e e f 7 e e f f 7 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 7 7 7 7 7 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 7 7 f f f f f . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e 7 f 7 f f 7 f 7 e f . . 
        . . f f f 7 7 e e 7 7 f f f . . 
        . f f e f 7 f e e f 7 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    lunk.sayText("go to part 2 for more", 500000, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, lunk, 70, 0)
    }
    if (controller.left.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 2 2 . . . . . . . 
            . . 1 1 1 1 1 1 3 3 2 2 . . . . 
            . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, lunk, -70, 0)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles5, function (sprite, location) {
    lunk.setPosition(190, 820)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    lunk.sayText("go to part 2 for more", 500000, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lunk,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 7 7 7 7 e e f f f f . . . 
        . f 7 e f f f f 7 7 7 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 7 7 7 e d d 4 . . . . . 
        . . . f 7 7 7 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 7 7 7 7 e e f f f f . . . 
        . f 7 e f f f f 7 7 7 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 7 7 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 7 7 7 7 e e f f f f . . . 
        . f 7 e f f f f 7 7 7 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 7 7 7 e d d 4 . . . . . 
        . . . f 7 7 7 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 7 7 7 7 e e f f f f . . . 
        . f 7 e f f f f 7 7 7 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 7 7 7 7 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles7, function (sprite, location) {
    lunk.setPosition(190, 820)
})
info.onCountdownEnd(function () {
    tiles.setTileAt(tiles.getTileLocation(37, 41), sprites.castle.tilePath7)
    tiles.setTileAt(tiles.getTileLocation(38, 41), sprites.castle.tilePath9)
    tiles.setWallAt(tiles.getTileLocation(37, 40), false)
    tiles.setWallAt(tiles.getTileLocation(38, 40), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    lunk.setPosition(610, 880)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    lunk.sayText(";)", 100, false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lunk,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 7 7 7 7 e f . 
        . . . f e 7 7 7 f f f f e 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 7 7 7 f . . . 
        . . . . . e d d e 7 7 7 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 7 7 7 7 e f . 
        . . . f e 7 7 7 f f f f e 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 7 7 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 7 7 7 7 e f . 
        . . . f e 7 7 7 f f f f e 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 7 7 7 f . . . 
        . . . . . e d d e 7 7 7 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 7 7 7 7 e f . 
        . . . f e 7 7 7 f f f f e 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 7 7 7 7 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight1, function (sprite, location) {
    lunk.setPosition(593, 1140)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    music.baDing.play()
    lunk.sayText("You gained the power of laserball", 2000, false)
    tiles.setWallAt(tiles.getTileLocation(11, 41), true)
    tiles.setWallAt(tiles.getTileLocation(12, 41), true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lunk,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 7 7 7 7 7 7 e e f . . 
        . . f e 7 f f f f f f 7 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 7 7 7 7 7 7 f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 7 7 7 7 7 7 e e f . . 
        . f f e 7 f f f f f f 7 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 7 7 7 7 e d d 4 e . . 
        . . e 4 f 7 7 7 7 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 7 7 7 7 7 7 e e f . . 
        . . f e 7 f f f f f f 7 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 7 7 7 7 7 7 f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 7 7 7 7 7 7 e f f . . 
        . f f e 7 f f f f f f 7 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 7 7 7 7 f e f . . 
        . . . e d d e 7 7 7 7 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark1, function (sprite, location) {
    lunk.setPosition(175, 990)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    lunk.sayText("GO THAT WAY", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    mySprite2.sayText("survive", 2000, false)
    info.startCountdown(60)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let lunk: Sprite = null
let mySprite2: Sprite = null
let mySprite3 = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . c b 3 3 3 3 1 1 b c . . . 
    . . c b 3 3 3 3 3 1 1 1 b c . . 
    . c c 1 1 1 3 3 3 3 1 1 3 c c . 
    c c d 1 1 1 3 3 3 3 3 3 3 b c c 
    c b d d 1 3 3 3 3 3 1 1 1 b b c 
    c b b b 3 3 1 1 3 3 1 1 d d b c 
    c b b b b d d 1 1 3 b d d d b c 
    . c b b b b d d b b b b b b c . 
    . . c c b b b b b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    . . . . . . b 1 1 b . . . . . . 
    . . . . . . b 1 1 b b . . . . . 
    . . . . . b b d 1 1 b . . . . . 
    . . . . . b d d 1 1 b . . . . . 
    `, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(610, 660)
lunk = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 7 7 7 7 7 7 e e f . . 
    . . f e 7 f f f f f f 7 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 7 7 7 7 7 7 f 4 e . . 
    . . 4 d f 7 7 7 7 7 7 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
info.setLife(3)
lunk.setPosition(90, 1180)
controller.moveSprite(lunk)
forever(function () {
    scene.cameraFollowSprite(lunk)
    if (lunk.overlapsWith(mySprite3)) {
        info.changeLifeBy(-1)
    }
})
game.onUpdateInterval(300, function () {
    mySprite3 = sprites.create(img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite3,
    [img`
        ................
        ................
        ................
        ................
        .....ff..ff.....
        .....3f..3f.....
        .....3f.3f......
        .....3f.3f......
        .....ffffff.....
        ....ffffffff....
        ....f1ff1fff....
        ....ffffffff....
        ....ff11ffff....
        .....222222.....
        ...ffffffffff...
        ...ffffffffff...
        ......ffff22....
        ......ffff2222..
        ......ffff..22..
        ......ffff......
        ......ffff......
        ......f..f......
        ................
        ................
        ................
        `,img`
        ................
        ................
        ................
        ......ff.ff.....
        ......3f.3f.....
        .....3f.3f......
        .....3f.3f......
        .....ffffff.....
        ....ffffffff....
        ....f1ff1fff....
        ....ffffffff....
        ....ff11ffff....
        .....222222.....
        ...ffffffffff...
        ...ffffffffff...
        ......ffff22....
        ......ffff222...
        ......ffff.22...
        ......ffff......
        ......ffff......
        ........ff......
        ................
        ................
        ................
        ................
        `,img`
        ................
        ................
        ................
        ......ffff......
        ......3f3f......
        .....3f.3f......
        .....3f.3f......
        .....ffffff.....
        ....ffffffff....
        ....f1ff1fff....
        ....ffffffff....
        ....ff11ffff....
        .....222222.....
        ...ffffffffff...
        ...ffffffffff...
        ......ffff22....
        ......ffff222...
        ......ffff.22...
        ......ffff.22...
        ......fffff.....
        .........ff.....
        ................
        ................
        ................
        ................
        `,img`
        ................
        ................
        ................
        ................
        .....ff.ff......
        .....3f.3f......
        .....3f.3f......
        .....3f.3f......
        .....ffffff.....
        ....ffffffff....
        ....f1ff1fff....
        ....ffffffff....
        ....ff11ffff....
        .....222222.....
        ...ffffffffff...
        ...ffffffffff...
        ......ffff22....
        ......ffff2222..
        ......ffff..22..
        ......ffff......
        ......ffff......
        ......f..f......
        ................
        ................
        ................
        `,img`
        ................
        ................
        ................
        .....ff..ff.....
        .....3f..3f.....
        .....3f.3f......
        .....3f.3f......
        .....ffffff.....
        ....ffffffff....
        ....f1ff1fff....
        ....ffffffff....
        ....ff11ffff....
        .....222222.....
        ...ffffffffff...
        ...ffffffffff...
        ......ffff22....
        ......ffff222...
        ......ffff.222..
        ......ffff..22..
        ......ffff......
        ......ff........
        ................
        ................
        ................
        ................
        `,img`
        ................
        ................
        ................
        ......ff.ff.....
        ......3f.3f.....
        .....3f.3f......
        .....3f.3f......
        .....ffffff.....
        ....ffffffff....
        ....f1ff1fff....
        ....ffffffff....
        ....ff11ffff....
        .....222222.....
        ...ffffffffff...
        ...ffffffffff...
        ......ffff22....
        ......ffff22222.
        ......ffff.2222.
        ......ffff......
        ......ffff......
        ......ff........
        ................
        ................
        ................
        ................
        `],
    90,
    true
    )
    mySprite3.setPosition(720, randint(680, 850))
    mySprite3.setVelocity(-60, 0)
    mySprite3.setFlag(SpriteFlag.DestroyOnWall, true)
})
