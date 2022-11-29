import { Fighter } from './Fighter';
import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._strength = 63;
    this._lifePoints = 85;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackpoints: number): number {
    const damage = attackpoints;

    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }
}
