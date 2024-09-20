 const selectedSeatEl = document.getElementById("selected_seat")
 const totalBookedEl = document.getElementById("total_booked")
 const availableSeatsEl = document.getElementById("available_seats")
 const totalPriceEl = document.getElementById("total_price")
 const couponFieldEl = document.getElementById("coupon_field")
 const couponBtnEl = document.getElementById("coupon_btn")


 let selectedSeat = [];
let totalPrice = 0;


 function handleSelectSeat(event){
     const value = event.innerText;

     if (selectedSeat.includes(value)) {
        return alert("Seat already Booked")
     } else if(selectedSeat.length <  4) {
        event.classList.add('bg-primary')
        event.classList.add('text-white')

        selectedSeat.push(event.innerText)
        totalBookedEl.innerText = selectedSeat.length

        const availableSeatValue = parseFloat(availableSeatsEl.innerText)
        
        // decrease
        const newAvailableSeatValue = availableSeatValue - 1
         

        availableSeatsEl.innerText = newAvailableSeatValue
        console.log(selectedSeat)

    selectedSeatEl.innerHTML += `<li class='text-base font-normal flex justify-between'>
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
     
    </li>`


    // update total price

    totalPrice +=550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    // active coupon button

    if (selectedSeat.length > 3) {

        couponFieldEl.removeAttribute('disabled')
        couponBtnEl.removeAttribute('disabled')
    }

     } else {
        return alert("maximum Seat Booked")
     }


      


 }