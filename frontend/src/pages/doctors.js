import React from "react";
import "./OurDoctors.css"; // Import CSS file for styling

const OurDoctors = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      picture: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      name: "Dr. Jane Smith",
      specialization: "Pediatrician",
      picture: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      name: "Dr. Michael Brown",
      specialization: "Orthopedic Surgeon",
      picture: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      name: "Dr. Michael Brown",
      specialization: "Orthopedic Surgeon",
      picture: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      name: "Dr. Michael Brown",
      specialization: "Orthopedic Surgeon",
      picture: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      name: "Dr. Michael Brown",
      specialization: "Orthopedic Surgeon",
      picture: "https://via.placeholder.com/300", // Placeholder image URL
    },
  ];

  return (
    <div className="doctors-container">
      <h1 className="doctors-heading">Our Doctors</h1>
      <div className="doctors-list">
        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.picture} alt={doctor.name} className="doctor-picture" />
            <div className="doctor-info">
              <h2>{doctor.name}</h2>
              <p>{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
