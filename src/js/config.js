import 'phaser';

export default {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: window.innerWidth,
    height: window.innerHeight,
    pixelArt: true,
    roundPixel: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    }
};