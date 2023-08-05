let userData = JSON.parse(localStorage.getItem("users"));

console.log(userData);
const showData = () => {
  var row = "";

  userData.map((user) => {
    row += `<tr> 
    <td> ${user.uniqueId}</td>
    <td> ${user.userName}</td>
    <td> ${user.userAge}</td>
    <td> ${user.fromStation}</td>
    <td> ${user.toStation}</td>
    <td> ${user.travelDate}</td>
    <td> ${user.seatType}</td>
    <td> <button id="reject" onClick={handleReject(${user.uniqueId})}> Reject </button></td>
    <td> <button id="confirm"> Confirm </button></td>

    </tr>`;
  });

  let tableData = document.querySelector("tbody");
  tableData.innerHTML = row;
};
showData();
const handleReject = (id) => {
  // userData = userData.filter((user) => user.uniqueId !== id);
  // console.log()

  // const idx = userData.findIndex((user) => user.uniqueId == id);
  const idx = userData((user) => console.log(user.uniqueId));
  console.log("idx : " + idx);

  userData.splice(idx, 1);

  localStorage.setItem("users", JSON.stringify(userData));
  console.log(userData);
  showData();
};
