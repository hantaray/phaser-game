import Phaser from 'phaser';
import config from './config';
import GameScene from './Scenes/Game';
import BootScene from './Scenes/Boot';
import UIScene from './Scenes/UI';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Boot', BootScene);
        this.scene.add('Game', GameScene);
        this.scene.add('UI', UIScene);
        this.scene.start('Boot');
    }
}

window.game = new Game();

window.addEventListener('resize', (event) => {
    // This has been updated for new versions of Phaser
    game.scale.resize(window.innerWidth, window.innerHeight);
});
