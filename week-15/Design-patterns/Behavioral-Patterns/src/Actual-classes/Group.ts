class Group implements Appliance {
  constructor(public id: number, public size: number) {}
  accept(visitor: Visitor): void {
    visitor.visitGroup(this);
  }
}
