const selectedSeatEl = document.getElementById("selected_seat");
const totalBookedEl = document.getElementById("total_booked");
const availableSeatsEl = document.getElementById("available_seats");
const totalPriceEl = document.getElementById("total_price");
const couponFieldEl = document.getElementById("coupon_field");
const couponBtnEl = document.getElementById("coupon_btn");
const defaultTextEl = document.getElementById("default-text");
const grandTotalEl = document.getElementById("grand-price")

let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {
  const value = event.innerText;

  if (selectedSeat.includes(value)) {
    return alert("Seat already Booked");
  } else if (selectedSeat.length < 4) {
    event.classList.add('bg-primary');
    event.classList.add('text-white');

    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;

    const availableSeatValue = parseFloat(availableSeatsEl.innerText);

    // decrease
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeatsEl.innerText = newAvailableSeatValue;
    console.log(selectedSeat);

    defaultTextEl.classList.add("hidden");

    selectedSeatEl.innerHTML += `<li class='text-base font-normal flex justify-between'>
      <span>${event.innerText}</span>
      <span>Economy</span>
      <span>550</span>
    </li>`;

    // update total price
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    // activate coupon button if more than 3 seats are booked
    if (selectedSeat.length > 3) {
      couponFieldEl.removeAttribute('disabled');
      couponBtnEl.removeAttribute('disabled');
    }
  } else {
    return alert("Maximum Seat Booked");
  }
}

//  coupon button function
document.getElementById("coupon_btn").addEventListener("click", function () {
  const couponFieldValue = couponFieldEl.value;
  console.log(couponFieldValue);

  if (couponFieldValue === "NEW50") {
    // Apply 15% discount for NEW50
    const discount = totalPrice * 0.15;
    const discountedPrice = totalPrice - discount;
    alert(`You got a 15% discount! Total price after discount: ${discountedPrice.toFixed(2)}`);
    grandTotalEl.innerText = discountedPrice.toFixed(2);
  } else if (couponFieldValue === "Couple 20") {
    // Apply 20% discount for Couple 20
    const discount = totalPrice * 0.20;
    const discountedPrice = totalPrice - discount;
    alert(`You got a 20% discount! Total price after discount: ${discountedPrice.toFixed(2)}`);
    grandTotalEl.innerText = discountedPrice.toFixed(2);
  } else {
    // Invalid coupon code
    alert("Your provided coupon code does not match");
  }
});
