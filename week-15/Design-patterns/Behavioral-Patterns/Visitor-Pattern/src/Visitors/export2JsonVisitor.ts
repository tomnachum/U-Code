class export2JsonVisitor implements Visitor {
  visitUser(user: User): void {
    console.log(`{
            "id":${user.id},
            "name":${user.name},
            "password":${user.password}
            } `);
  }
  visitGroup(group: Group): void {
    console.log(`{
            "id":${group.id},
            "size":${group.size}
            } `);
  }
  visitAsset(asset: Asset): void {
    console.log(`{
            "serial_number":${asset.serial_number},
            "owner":${asset.owner},
            "rating":${asset.rating}
            } `);
  }
}
