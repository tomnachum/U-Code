class User implements Appliance {
  constructor(
    public id: number,
    public name: string,
    public password: string
  ) {}

  accept(visitor: Visitor): void {
    visitor.visitUser(this);
  }
}
