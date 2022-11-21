import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(adversary: Fighter): void;
  special?(adversary: Fighter): void;
  levelUp(): void;
  receiveDamage(attackpoints: number): void;
}