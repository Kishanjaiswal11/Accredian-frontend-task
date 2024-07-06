import React, { useState } from "react";
import axios from "axios";

const ReferralModal = ({ isOpen, onClose }) => {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [message, setMessage] = useState("");

  const refer = {
    referrerName,
    referrerEmail,
    refereeName,
    refereeEmail,
    message,
  };

  const handleRefer = async (e) => {
    e.preventDefault();
    // Implement your referral logic here (e.g., API call)
    console.log("Referring:", refer);

    try {
      await axios.post(
        "https://accredian-backend-task-xxke.onrender.com/refer",
        refer
      );
    } catch (err) {
      console.log(err);
    }

    onClose(); // Close the modal after referring
  };

  return (
    <div
      className={`modal fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Refer a Course</p>
            <button
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
            >
              Close
              <button />
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M15.5 1.5l-13 13M2.5 1.5l13 13" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleRefer}>
            <input
              type="text"
              className="input-field mb-4 w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              required
            />
            <input
              type="email"
              className="input-field mb-4 w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              required
            />
            <input
              type="text"
              className="input-field mb-4 w-full p-2 border border-gray-300 rounded"
              placeholder="Friend's Name"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              required
            />
            <input
              type="email"
              className="input-field mb-4 w-full p-2 border border-gray-300 rounded"
              placeholder="Friend's Email"
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              required
            />
            <textarea
              className="input-field mb-4 w-full p-2 border border-gray-300 rounded"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Refer Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;
