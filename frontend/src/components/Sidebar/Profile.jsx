import React from "react";
import "../../scss/SidebarStyles/Profile/Profile.css";
import Avatar from "../../images/Avatar.jpg";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
const Profile = () => {
  return (
    <div className="profile-container">
      <img src={Avatar} alt="Profile" />
      <div>
        <h4>Arshil Hapani</h4>
        <h6>
          arshilhapani998@gmail.com{" "}
          <span>
            <HiOutlineChevronUpDown />
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Profile;
