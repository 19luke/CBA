scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles5, function (sprite, location) {
    lunk.setPosition(190, 820)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles7, function (sprite, location) {
    lunk.setPosition(190, 820)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight1, function (sprite, location) {
    lunk.setPosition(11, 33)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    lunk.sayText("A sworde?, cool", 2000, false)
    tiles.setWallAt(tiles.getTileLocation(11, 41), true)
    tiles.setWallAt(tiles.getTileLocation(12, 41), true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark1, function (sprite, location) {
    lunk.setPosition(175, 990)
})
let lunk: Sprite = null
lunk = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
lunk.setPosition(90, 1180)
controller.moveSprite(lunk)
tiles.setCurrentTilemap(tilemap`level1`)
forever(function () {
    scene.cameraFollowSprite(lunk)
})
