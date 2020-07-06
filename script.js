const container = document.querySelector(".tempat-container");
const selectTime = document.querySelector(".row-waktu");
const changeHari = document.querySelector(".hari");
const changeTgl = document.querySelector(".tgl");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const occupied = document.querySelectorAll(".row .seat.occupied");
const btnOccupied = document.querySelector(".booking #occupied");
const btnClear = document.querySelector(".booking #clear");

const tgl1 = document.querySelector(".tgl-round1");
const tgl2 = document.querySelector(".tgl-round2");
const tgl3 = document.querySelector(".tgl-round3");
const tgl4 = document.querySelector(".tgl-round4");
const tgl5 = document.querySelector(".tgl-round5");

const count = document.getElementById("count");
const total = document.getElementById("total");

let mainNav = document.getElementById("menu-toggle");
let navBarToggle = document.getElementById("burger-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("toggle-active");
});

populateUI();

let ticketPrice = 30;

btnOccupied.addEventListener("click", (e) => {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const pushi = JSON.parse(localStorage.getItem("selectedOccupied"));
  var i;
  if (pushi !== null && pushi.length > 0) {
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add("occupied");
        }
      });
      for (i = 0; i < selectedSeats.length; i++) {
        pushi.push(selectedSeats[i]);
      }
      localStorage.setItem("selectedOccupied", JSON.stringify(pushi));
      localStorage.removeItem("selectedSeats");
    }
  } else {
    localStorage.setItem("selectedOccupied", JSON.stringify(selectedSeats));
    localStorage.removeItem("selectedSeats");
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add("occupied");
          seat.classList.remove("selected");
        }
      });
    }
  }
});

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const selectedOcc = JSON.parse(localStorage.getItem("selectedOccupied"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  if (selectedOcc !== null && selectedOcc.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedOcc.indexOf(index) > -1) {
        seat.classList.add("occupied");
      }
    });
  }
}

//update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice * 1000;
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

selectTime.addEventListener("click", (e) => {
  const undoTime = document.querySelector(".waktu-active");
  if (
    e.target.classList.contains("waktu") &&
    !e.target.classList.contains("waktu-active")
  ) {
    if (undoTime == null) {
      e.target.classList.toggle("waktu-active");
    } else {
      e.target.classList.toggle("waktu-active");
      undoTime.classList.remove("waktu-active");
    }
  }
});

tgl1.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tgl-active")) {
    const hari1 = document.getElementById("namaHari1");
    changeHari.innerHTML = hari1.innerText;
    changeTgl.innerHTML = e.target.innerText;
    e.target.classList.add("tgl-active");
    if (tgl2.classList.contains("tgl-active")) {
      tgl2.classList.remove("tgl-active");
    }
    if (tgl3.classList.contains("tgl-active")) {
      tgl3.classList.remove("tgl-active");
    }
    if (tgl4.classList.contains("tgl-active")) {
      tgl4.classList.remove("tgl-active");
    }
    if (tgl5.classList.contains("tgl-active")) {
      tgl5.classList.remove("tgl-active");
    }
  }
});

tgl2.addEventListener("click", (e) => {
  console.log(e.target.classList);
  if (!e.target.classList.contains("tgl-active")) {
    const hari2 = document.getElementById("namaHari2");
    changeHari.innerHTML = hari2.innerText;
    changeTgl.innerHTML = e.target.innerText;
    e.target.classList.add("tgl-active");
    if (tgl1.classList.contains("tgl-active")) {
      tgl1.classList.toggle("tgl-active");
    }
    if (tgl3.classList.contains("tgl-active")) {
      tgl3.classList.toggle("tgl-active");
    }
    if (tgl4.classList.contains("tgl-active")) {
      tgl4.classList.toggle("tgl-active");
    }
    if (tgl5.classList.contains("tgl-active")) {
      tgl5.classList.toggle("tgl-active");
    }
  }
});

tgl3.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tgl-active")) {
    const hari3 = document.getElementById("namaHari3");
    changeHari.innerHTML = hari3.innerText;
    changeTgl.innerHTML = e.target.innerText;
    e.target.classList.add("tgl-active");
    if (tgl1.classList.contains("tgl-active")) {
      tgl1.classList.remove("tgl-active");
    }
    if (tgl2.classList.contains("tgl-active")) {
      tgl2.classList.remove("tgl-active");
    }
    if (tgl4.classList.contains("tgl-active")) {
      tgl4.classList.remove("tgl-active");
    }
    if (tgl5.classList.contains("tgl-active")) {
      tgl5.classList.remove("tgl-active");
    }
  }
});

tgl4.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tgl-active")) {
    const hari4 = document.getElementById("namaHari4");
    changeHari.innerHTML = hari4.innerText;
    changeTgl.innerHTML = e.target.innerText;
    e.target.classList.add("tgl-active");
    if (tgl1.classList.contains("tgl-active")) {
      tgl1.classList.remove("tgl-active");
    }
    if (tgl2.classList.contains("tgl-active")) {
      tgl2.classList.remove("tgl-active");
    }
    if (tgl3.classList.contains("tgl-active")) {
      tgl3.classList.remove("tgl-active");
    }
    if (tgl5.classList.contains("tgl-active")) {
      tgl5.classList.remove("tgl-active");
    }
  }
});

tgl5.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tgl-active")) {
    const hari5 = document.getElementById("namaHari5");
    changeHari.innerHTML = hari5.innerText;
    changeTgl.innerHTML = e.target.innerText;
    e.target.classList.add("tgl-active");
    if (tgl1.classList.contains("tgl-active")) {
      tgl1.classList.remove("tgl-active");
    }
    if (tgl2.classList.contains("tgl-active")) {
      tgl2.classList.remove("tgl-active");
    }
    if (tgl3.classList.contains("tgl-active")) {
      tgl3.classList.remove("tgl-active");
    }
    if (tgl4.classList.contains("tgl-active")) {
      tgl4.classList.remove("tgl-active");
    }
  }
});

updateSelectedCount();

btnClear.addEventListener("click", (e) => {
  localStorage.removeItem("selectedSeats");
  localStorage.removeItem("selectedOccupied");
  location.reload();
});

function toggleAside() {
  document.getElementById("aside").classList.toggle("aside-active");
  document.querySelector(".a-social-icons").style.display = "none";
}

function closetoggleAside() {
  document.getElementById("aside").classList.toggle("aside-active");
  document.querySelector(".a-social-icons").style.display = "block";
}
