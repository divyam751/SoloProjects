const handleSubmit = (event) => {
  event.preventDefault();
  let uniqueId = document.getElementById("uniqueId").value;
  let userName = document.getElementById("userName").value;
  let userAge = document.getElementById("userAge").value;
  let fromStation = document.getElementById("fromStation").value;
  let toStation = document.getElementById("toStation").value;
  let travelDate = document.getElementById("travelDate").value;
  let seatType = document.getElementById("seatType").value;
  let OTP = Math.floor(1000 + Math.random() * 9000);

  let userData = {
    uniqueId,
    userName,
    userAge,
    fromStation,
    toStation,
    travelDate,
    seatType,
    OTP,
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let isUniqueID = users.some((user) => user.uniqueId === uniqueId);

  if (isUniqueID) {
    alert(`${uniqueId}  already present`);
    return;
  }

  if (userName.length < 4) {
    alert("Name: Should be at least 4 characters.");
    return;
  }

  if (userAge < 18 || userAge > 40) {
    alert(
      "Age: Should be between 18 to 40. No other values should be accepted."
    );
    return;
  }
  if (toStation === fromStation) {
    alert("“From” and “To” stations could not be the same");
    return;
  }
  if (seatType === "Seat Type") {
    alert("Please select Seat Type");
    return
  }

  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
  alert(`${userName} Registration Done your OTP is : ${OTP}`);

  console.log(users);
};
