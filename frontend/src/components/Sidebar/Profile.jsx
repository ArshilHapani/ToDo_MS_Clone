import React from "react";
import "../../scss/SidebarStyles/Profile/Profile.css";
import Avatar from "../../images/Avatar.jpg";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { useState } from "react";
import { useEffect } from "react";
const Profile = () => {
  const [internetCheck, setInternetCheck] = useState(false);
  useEffect(() => {
    if (navigator.onLine) {
      setInternetCheck(true);
    } else {
      setInternetCheck(false);
    }
  }, []);

  return (
    <div className="profile-container">
      <img src={Avatar} alt="Profile" />
      <div>
        <h4>Arshil Hapani</h4>
        {internetCheck ? (
          <h6>
            arshilhapani998@gmail.com{" "}
            <span>
              <HiOutlineChevronUpDown />
            </span>
          </h6>
        ) : (
          <p className="offline-one">You are offline... </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
