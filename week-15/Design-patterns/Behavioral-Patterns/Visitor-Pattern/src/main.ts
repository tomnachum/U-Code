const appliances: Appliance[] = [];
appliances.push(new User(0, "Tom", "123"));
appliances.push(new User(1, "Matan", "555"));
appliances.push(new Asset(567, "YO", 100));
appliances.push(new Group(1, 3));
const jsonVisitor = new export2JsonVisitor();
for (const appliance of appliances) {
  appliance.accept(jsonVisitor);
}
