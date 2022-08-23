const computersIds = [];

$(".generator").click(function () {
  console.log($(this).closest(".processor").attr("id"));
  const computer = $(this).closest(".computer");
  const computersId = computer.data().id;
  console.log(computersId);
  computersIds.push({ cmp_id: computersId });
  console.log(computer.find(".BUS").text());
});

$(".validator").click(function () {
  const computer = $(this).closest(".computer");
  console.log(computer.find(".generator").text());
  console.log(computer.find(".MB").text());
  const qrs = computer.find(".QR");
  console.log(qrs.eq(0).text());
  console.log(qrs.eq(1).text());
});
