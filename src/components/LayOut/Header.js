import React from "react";
import styles from "./Header.module.css";
import headerImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Food Order-App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={headerImage} alt="header img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
