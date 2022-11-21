import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _type: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Ranger._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._archetypeInstances;
  }

  get name(): string {
    return this.name;
  }

  get type(): EnergyType {
    return this._type;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}