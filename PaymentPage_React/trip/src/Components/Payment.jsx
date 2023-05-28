import React, { useState } from "react";
import axios from "axios";
import styles from "../Styles/Payment.module.css";
const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [fullName, setFullName] = useState("");

  const handlePayment = () => {
    const paymentData = {
      cardNumber: parseInt(cardNumber),
      expiryDate: parseInt(expiryDate),
      cvv: parseInt(cvv),
      fullName,
    };

    axios
      .get("http://localhost:8080/cardDetails")
      .then((response) => {
        const dbData = response.data;

        if (Array.isArray(dbData)) {
          const match = dbData.find((data) => {
            return (
              data.cardNumber === paymentData.cardNumber &&
              data.expiryDate === paymentData.expiryDate &&
              data.cvv === paymentData.cvv &&
              data.fullName === paymentData.fullName
            );
          });

          if (match) {
            alert("Payment Successful");
          } else {
            alert("Payment Failed");
          }
        } else {
          alert("Database error");
        }
      })
      .catch((error) => {
        alert("Error connecting to the server");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.boxImg}>
          <img
            className={styles.card}
            src="https://i1.wp.com/www.alltherooms.com/blog/wp-content/uploads/2018/09/Feature-What-is-Ecotourism-By-Shutterstock-PopTika.jpg?fit=1000%2C667&ssl=1&w=640"
            alt=""
          />
        </div>

        <div className={styles.boxImg}>
          <img
            className={styles.card}
            src="https://images.myguide-cdn.com/munich/companies/lenggries-tandem-paragliding-flight/large/lenggries-tandem-paragliding-flight-1120761.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.box2}>
        <img
          className={styles.card}
          src="https://campaigns.icicibank.com/credit-card/images/coral-card.webp"
          alt=""
        />

        <h1 className="styles.pay">Payment Page</h1>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <br />
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            placeholder="Expiry Date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </label>
        <br />
        <label className={styles.label}>
          <input
            className={styles.input}
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </label>
        <br />
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
        <button className={styles.button} onClick={handlePayment}>
          Make Payment
        </button>
      </div>
      <div className={styles.box1}>
        <div className={styles.boxImg}>
          <img
            className={styles.card}
            src="https://explorertours.al/wp-content/uploads/2018/12/c700x420.jpg   "
            alt=""
          />
        </div>

        <div className={styles.boxImg}>
          <img
            className={styles.card}
            src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/bjkt4tjrf6dmseu1xnua    "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
