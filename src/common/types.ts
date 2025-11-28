<<<<<<< HEAD
import { CHARACTER_ANIMATIONS } from './assets';

export type CharacterAnimation = keyof typeof CHARACTER_ANIMATIONS;
=======
import * as Phaser from 'phaser';
import { CHARACTER_ANIMATIONS } from './assets';
import { CHEST_STATE, DIRECTION, DUNGEON_ITEM, INTERACTIVE_OBJECT_TYPE, LEVEL_NAME } from './common';

export type CharacterAnimation = keyof typeof CHARACTER_ANIMATIONS;

export type Position = {
  x: number;
  y: number;
};

export type GameObject = Phaser.GameObjects.Sprite | Phaser.GameObjects.Image;

export type Direction = keyof typeof DIRECTION;

export type ChestState = keyof typeof CHEST_STATE;

export type InteractiveObjectType = keyof typeof INTERACTIVE_OBJECT_TYPE;

export interface CustomGameObject {
  enableObject(): void;
  disableObject(): void;
}

export type LevelName = keyof typeof LEVEL_NAME;

export type LevelData = {
  level: LevelName;
  doorId: number;
  roomId: number;
};

export type DungeonItem = keyof typeof DUNGEON_ITEM;
>>>>>>> eeeb9ea60c069d386a291cbc1855c7f22c578840
