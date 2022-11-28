function useData(data) {
  console.log(data);
}

$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  success: useData,
});
