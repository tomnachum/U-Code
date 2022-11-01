class Food {
  constructor(private _type: string, private _dailyQuantityG: number) {}
  toString(): string {
    return `Food:\n \t Type: ${this._type} \n \t Daily G: ${this._dailyQuantityG}`;
  }

  public get type(): string {
    return this._type;
  }

  public get dailyQuantityKG(): number {
    return this._dailyQuantityG;
  }
}
