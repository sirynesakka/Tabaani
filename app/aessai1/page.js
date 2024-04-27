'use client'// SmsPage.js
import React, { useState } from "react";
import axios from "axios";

export default function SmsPage() {
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const sendSms = async () => {
    try {
      const response = await axios.post("/api1/sms", {
        phone: phone,
        msg: msg,
      });
      console.log(response.data); // Assuming you want to log the response
      // Optionally, you can reset the form fields after sending the message
      setPhone("");
      setMsg("");
    } catch (error) {
      console.error("Error sending SMS:", error);
      // Handle error here
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Phone Number"
        className="Login_input"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <br />
      <textarea
        id="Body"
        rows="6"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Msg"
      ></textarea>
      <button onClick={sendSms}>Send Msg</button>
    </div>
  );
}
