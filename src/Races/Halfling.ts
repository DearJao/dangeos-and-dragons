import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static _countInstancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._countInstancesCreated += 1;
  }

  static createdRacesInstances(): number {
    return this._countInstancesCreated;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}