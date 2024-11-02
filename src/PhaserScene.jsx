import Phaser from 'phaser';

class PhaserScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PhaserScene' });
  }

  preload() {
    // Load the tileset image and JSON file from Tiled
    this.load.image('grass', '/grass.png'); // Update with your actual tileset path
    this.load.tilemapTiledJSON('grass-game', '/grass-game.json'); // Update with your actual map path
  }

  create() {
    // Create the map
    const map = this.make.tilemap({ key: 'grass-game' });
    // const map = this.make.tilemap({ key: 'map', Width: 36, Height: 36});

    const tileset = map.addTilesetImage('City_tiles', 'grass'); // Match with Tiled tileset name
    const groundLayer = map.createLayer('ground', tileset, 0, 0);
    const objectLayer = map.getObjectLayer('sujal'); // Update with your layer name if needed

    // Example: Set collisions
    // groundLayer.setCollisionByProperty({ collides: true });

    // // Process interactive objects
    // objectLayer.objects.forEach(object => {
    //   if (object.type === 'enemy') {
    //     // Example: Add enemy sprite at the object's position
    //     this.add.sprite(object.x, object.y, 'enemySprite');
    //   }
    //   // Add logic for other object types as needed
    // });

    // Add a player sprite or other game elements as necessary
    // this.player = this.physics.add.sprite(50, 50, 'playerSprite'); // Update position and sprite
    // this.physics.add.collider(this.player, groundLayer);
  }

  update() {
    // Game update logic, such as player movement
  }
}

export default PhaserScene;
 