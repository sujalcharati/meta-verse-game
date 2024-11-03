import Phaser from 'phaser';

class PhaserScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PhaserScene' });
  }

  preload() {
    // Load the tileset image and JSON file from Tiled
    this.load.image('game-img', '/game-img.png'); // Update with your actual tileset path
    this.load.tilemapTiledJSON('game-map', '/game-map.json'); // Update with your actual map path
  }

  create() {
    // Create the map
    const map = this.make.tilemap({ key: 'game-map' });
    // const map = this.make.tilemap({ key: 'map', tilewidth: 32, tileheight: 32 });

    const tileset1 = map.addTilesetImage('desert', 'game-img'); // Match with Tiled tileset name and image key
    const tileset2 = map.addTilesetImage('character', 'game-img'); // Match with Tiled tileset name and image key
    const tileset3 = map.addTilesetImage('Tile_Transparent', 'game-img'); // Match with Tiled tileset name and image key
    const groundLayer = map.createLayer('ground', [tileset1, tileset2,tileset3], 0, 0);
    // Create additional layers
    const treelayer = map.createLayer('tree', [tileset1, tileset2, tileset3], 0, 0);
    const houselayer = map.createLayer('house', [tileset1, tileset2, tileset3], 0, 0);
    

    // Set collisions for the new layers if needed
    groundLayer.setCollisionByProperty({ collides: true });
    treelayer.setCollisionByProperty({ collides: true });
    houselayer.setCollisionByProperty({ collides: true });
    const objectLayer = map.getObjectLayer('sujal'); // Update with your layer name if needed

    // Example: Set collisions

    // Process interactive objects
    objectLayer.objects.forEach(object => {
      if (object.type === 'enemy') {
        // Example: Add enemy sprite at the object's position
        this.add.sprite(object.x, object.y, 'enemySprite');
      }
      // Add logic for other object types as needed
    });

    // Add a player sprite or other game elements as necessary
    // this.player = this.physics.add.sprite(50, 50, 'playerSprite'); // Update position and sprite
    // this.physics.add.collider(this.player, groundLayer);
  }

  update() {
    // Game update logic, such as player movement
  }
}

export default PhaserScene;
 