const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

function checkReservation() {
  const name = document.getElementById("name").value;
  if (name in reservations && !reservations[name].claimed) {
    console.log(`Welcome, ${name}`);
  } else if (name in reservations) {
    console.log("Hmm, someone already claimed this reservation");
  } else {
    console.log("You have no reservation");
  }
}
