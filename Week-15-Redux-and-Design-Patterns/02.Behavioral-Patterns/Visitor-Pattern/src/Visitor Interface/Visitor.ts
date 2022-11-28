interface Visitor {
  visitUser(user: User): void;
  visitGroup(group: Group): void;
  visitAsset(asset: Asset): void;
}
