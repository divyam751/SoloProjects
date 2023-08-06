let userData = JSON.parse(localStorage.getItem("users"));

// console.log(userData);

let demoData = JSON.parse(JSON.stringify(userData));
console.log(demoData);

const showData = (storedUserData) => {
  var row = "";

  storedUserData.map((user) => {
    row += `<tr> 
    <td> ${user.uniqueId}</td>
    <td> ${user.userName}</td>
    <td> ${user.userAge}</td>
    <td> ${user.fromStation}</td>
    <td> ${user.toStation}</td>
    <td> ${user.travelDate}</td>
    <td> ${user.seatType}</td>
    <td> <button id="reject" onClick={handleReject(${user.uniqueId})}> Reject </button></td>
    <td> <button id="confirm" onClick={handleConfirm(${user.uniqueId})}> Confirm </button></td>
    </tr>`;
  });

  let tableData = document.querySelector("tbody");
  tableData.innerHTML = row;
};
showData(userData);

const handleReject = (id) => {
  const idx = userData.findIndex((user) => user.uniqueId == id);
  console.log("idx : " + idx);
  userData.splice(idx, 1);
  localStorage.setItem("users", JSON.stringify(userData));
  console.log(userData);
  showData();
};

let bookedUser = {};

const handleConfirm = (id) => {
  console.log(id);

  let table = document.querySelector("#userDataTable");
  let others = document.querySelector("#otherOptions");
  table.remove();
  others.remove();

  let otpBox = "";

  otpBox += `
    <div id="otpBox">
    <h1>Enter OTP</h1>
    <div id="otpBlock">
      <input
        type="text"
        maxlength="1"
        class="box box1"
        onkeyup="boxChange(1)"
      />
      <input
        type="text"
        maxlength="1"
        class="box box2"
        onkeyup="boxChange(2)"
      />
      <input
        type="text"
        maxlength="1"
        class="box box3"
        onkeyup="boxChange(3)"
      />
      <input
        type="text"
        maxlength="1"
        class="box box4"
        onkeyup="boxChange(4)"
      />
    </div>
    <button class="BTN" onclick="handleSubmit()" >Submit</button>
  </div>`;

  const otpSection = document.querySelector(".otpSection");
  otpSection.innerHTML = otpBox;

  const idx = userData.findIndex((elem) => elem.uniqueId == id);
  console.log("idx:" + idx);
  savedOTP = userData[idx].OTP;
  bookedUser = { ...userData[idx] };
  console.log("saved OTP : " + savedOTP);
  console.log("bookedOTP:" + bookedUser.OTP);
};

//OTP Script

let boxChange = (val) => {
  let ele = document.querySelectorAll("input");
  if (ele[val - 1].value != "") {
    ele[val].focus();
  } else {
    ele[val - 2].focus();
  }
};

const validate = (ele) => {
  ele.value = ele.value.replace(/[^0-9]/g, "");
};

const handleSubmit = () => {
  let box1 = document.querySelector(".box1").value;
  let box2 = document.querySelector(".box2").value;
  let box3 = document.querySelector(".box3").value;
  let box4 = document.querySelector(".box4").value;
  let otp = "";
  otp += box1 + box2 + box3 + box4;
  console.log(otp);

  if (otp == bookedUser.OTP) {
    alert(bookedUser.userName + " added to waiting list");
    setTimeout(function () {
      alert(
        "Booking ticket from " +
          bookedUser.fromStation +
          " to " +
          bookedUser.toStation
      );
    }, 5000);
    setTimeout(function () {
      alert("Ticket booked for " + bookedUser.travelDate);
      handleReject(bookedUser.uniqueId);
    }, 10000);
    let booked = JSON.parse(localStorage.getItem("booked")) || [];
    booked.push(bookedUser);
    localStorage.setItem("booked", JSON.stringify(booked));
    console.log(booked);
  } else {
    alert("wrong OTP");
  }
};

//Filter function
const handleFilter = () => {
  let type = document.querySelector("#filterSeatType").value;
  console.log("type :" + type);

  if (type === "all") {
    showData(userData);
    demoData = JSON.parse(JSON.stringify(userData));
    return;
  }

  let filterdData = userData.filter((seat) => seat.seatType == type);
  console.log(filterdData);

  showData(filterdData);
  demoData = JSON.parse(JSON.stringify(filterdData));
};

//Sort function -> By Age

const handleSortAge = () => {
  let sortByAge = document.querySelector("#sortByAge").value;
  if (sortByAge === "Ascending") {
    let sortedData = demoData.sort((a, b) => a.userAge - b.userAge);
    showData(sortedData);
    demoData = JSON.parse(JSON.stringify(sortedData));
  } else {
    let sortedData = demoData.sort((a, b) => b.userAge - a.userAge);
    showData(sortedData);
    demoData = JSON.parse(JSON.stringify(sortedData));
  }
};
//Sort function -> By Age
const handleSortDate = () => {
  let sortByDate = document.querySelector("#sortByJourneyDate").value;
  console.log(sortByDate);

  if (sortByDate === "Ascending") {
    let sortedData = demoData.sort(
      (a, b) => new Date(a.travelDate) - new Date(b.travelDate)
    );
    showData(sortedData);
    demoData = JSON.parse(JSON.stringify(sortedData));
  } else {
    let sortedData = demoData.sort(
      (a, b) => new Date(b.travelDate) - new Date(a.travelDate)
    );
    showData(sortedData);
    demoData = JSON.parse(JSON.stringify(sortedData));
  }
};
