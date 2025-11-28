import * as Phaser from 'phaser';
import { SCENE_KEYS } from './scene-keys';
<<<<<<< HEAD
import { ASSET_PACK_KEYS } from '../common/assets';
=======
import { ASSET_KEYS, ASSET_PACK_KEYS } from '../common/assets';
import { LevelData } from '../common/types';
import { DataManager } from '../common/data-manager';
>>>>>>> eeeb9ea60c069d386a291cbc1855c7f22c578840

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.PRELOAD_SCENE,
    });
  }

  public preload(): void {
    // load asset pack that has assets for the rest of the game
    this.load.pack(ASSET_PACK_KEYS.MAIN, 'assets/data/assets.json');
  }

  public create(): void {
<<<<<<< HEAD
    this.scene.start(SCENE_KEYS.GAME_SCENE);
=======
    this.#createAnimations();

    const sceneData: LevelData = {
      level: DataManager.instance.data.currentArea.name,
      roomId: DataManager.instance.data.currentArea.startRoomId,
      doorId: DataManager.instance.data.currentArea.startDoorId,
    };
    this.scene.start(SCENE_KEYS.GAME_SCENE, sceneData);
  }

  #createAnimations(): void {
    this.anims.createFromAseprite(ASSET_KEYS.HUD_NUMBERS);
    this.anims.createFromAseprite(ASSET_KEYS.PLAYER);
    this.anims.createFromAseprite(ASSET_KEYS.SPIDER);
    this.anims.createFromAseprite(ASSET_KEYS.WISP);
    this.anims.createFromAseprite(ASSET_KEYS.DROW);
    this.anims.create({
      key: ASSET_KEYS.ENEMY_DEATH,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.ENEMY_DEATH),
      frameRate: 6,
      repeat: 0,
      delay: 0,
    });
    this.anims.create({
      key: ASSET_KEYS.POT_BREAK,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.POT_BREAK),
      frameRate: 6,
      repeat: 0,
      delay: 0,
      hideOnComplete: true,
    });
    this.anims.create({
      key: ASSET_KEYS.DAGGER,
      frames: this.anims.generateFrameNumbers(ASSET_KEYS.DAGGER),
      frameRate: 16,
      repeat: -1,
      delay: 0,
    });
>>>>>>> eeeb9ea60c069d386a291cbc1855c7f22c578840
  }
}
