import React from "react";
import classes from "../styles/layout.module.css";
import Image from "next/image";

function Layout({ children }) {
  return (
    <div className={classes.container}>
      <div className={classes.profileWrapper}>
        <div className={classes.profileImageWrapper}>
          <Image
            className={classes.profileImage}
            src="/profile-image.jpg" 
            width={300}
            height={250}
            alt="Profile Image"
          />
        </div>
        <div className={classes.profileTextWrapper}>
          <p className={classes.profileNameText}>Hannah Johnson</p>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Layout; 