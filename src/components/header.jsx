import React, { Component } from "react";
import BBBSCLogo from "./../assets/BBBSCLogo.png";
import Facebook from "./../assets/facebook.svg";
import Twitter from "./../assets/twitter.svg";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav style={styles.navbar}>
        <img src={BBBSCLogo} />
        <div style={styles.rightCell}>
          <img style={styles.social} src={Facebook} />
          <img style={styles.social} src={Twitter} />
          <ul>
            <li style={styles.navLi}>ABOUT US</li>
            <li style={styles.navLi}>WHAT WE DO</li>
            <li style={styles.navLi}>WAYS TO GIVE</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

const styles = {};

styles.navbar = {
  backgroundColor: "#663399",
  color: "white",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: "10px",
  gridGap: "30px",
  textAlign: "left"
};

styles.social = {
  width: "40px",
  margin: "5px"
};

styles.rightCell = {
  textAlign: "right"
};

styles.navLi = {
  listStyle: "none",
  display: "inline-block",
  marginLeft: "20px"
};
