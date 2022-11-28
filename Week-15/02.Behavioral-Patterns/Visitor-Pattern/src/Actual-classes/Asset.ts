class Asset implements Appliance {
  constructor(
    public serial_number: number,
    public owner: string,
    public rating: number
  ) {}

  accept(visitor: Visitor): void {
    visitor.visitAsset(this);
  }
}
