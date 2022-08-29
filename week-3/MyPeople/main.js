$.ajax({
  url: "https://randomuser.me/api/?results=10",
  dataType: "json",
  success: function (data) {
    let people = parseData(data);
    activateHandleBars(people);
  },
});

function activateHandleBars(people) {
  const source = $("#people-template").html();
  const template = Handlebars.compile(source);
  const newHTML = template({ people });
  $("#people-container").append(newHTML);
}

function parseData(data) {
  return data.results.map(p => {
    return {
      name: `${p.name.first} ${p.name.last}`,
      email: p.email,
    };
  });
}
