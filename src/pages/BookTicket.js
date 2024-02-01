// UserForm.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../shared/Components/Header";

const BookTicket = () => {
  const { movieName } = useParams();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    movieBooked: "",
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userDetails.movieBooked = movieName;

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    setUserDetails({
      firstName: "",
      phoneNumber: "",
      email: "",
      movieBooked: "",
    });
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto mt-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="movieName"
            >
              Movie Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="movieName"
              type="text"
              placeholder="Movie Name"
              name="movieName"
              value={movieName}
              disabled={true}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              required
              name="firstName"
              value={userDetails.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
              max={10}
              pattern="^\+[0-9]{1,4}-?[0-9]{6,}$"
              required
              placeholder="mobile number"
              name="phoneNumber"
              value={userDetails.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              required
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book Ticket
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookTicket;
