import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import PhaserScene from './PhaserScene'; // Import the Phaser scene

const GameComponent = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width:800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: { debug: false },
      },
      scene: PhaserScene,
    };

    // Initialize Phaser game
    const game = new Phaser.Game(config);
    gameRef.current = game;

    return () => {
      // Destroy Phaser game instance when component unmounts
      game.destroy(true);
    };
  }, []);

  return <div id="game-container" />;
};

export default GameComponent;
