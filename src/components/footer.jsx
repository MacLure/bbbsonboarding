import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div style={styles.footer}>
        <div>
          <h3 style={styles.h3}>QUICK LINKS</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Home</li>
            <li style={styles.li}>Events</li>
            <li style={styles.li}>Donate</li>
            <li style={styles.li}>Volunteer</li>
            <li style={styles.li}>Enrol a Young Person</li>
            <li style={styles.li}>Privacy Policy</li>
            <li style={styles.li}>Sitemap</li>
          </ul>
        </div>
        <div>
          {" "}
          <h3 style={styles.h3}>TO REACH US</h3>
          <p>
            <strong>Big Brothers Big Sisters of Toronto</strong>
            <br />
            501 - 2345 Yonge St Toronto ON Canada M4P 2E5
          </p>
          <p>
            <strong>Email:</strong> infotoronto@bigbrothersbigsisters.ca
            <strong>Telephone:</strong> (416) 925-8981
          </p>
          <p>Contact us</p>
          <p>
            {" "}
            <strong>fax:</strong> (416) 925-4671{" "}
          </p>
          <p>Mid-Scarborough Hub: 2660 Eglinton Ave</p>
          <p>E Scarborough, ON M1K 2S3</p>
        </div>
        <div>
          {" "}
          <h3 style={styles.h3}>COPYRIGHTS</h3>
          <p>© 2019, Big Brothers Big Sisters of Toronto</p>
          <p>
            Charitable Business Number: 106793771RR0001 Start Something™ Reg.
            CIPO Big Brothers Big Sisters of Canada. Go Girls! Healthy Bodies,
            Healthy Minds™Reg. CIPO Big Brothers Big Sisters of Canada.
          </p>{" "}
          <p>
            Game On! Eat Smart, Play Smart, Live Smart™Reg. CIPO Big Brothers
            Big Sisters of Canada.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;

const styles = {};

styles.footer = {
  backgroundColor: "#663399",
  color: "white",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  padding: "20px",
  gridGap: "30px",
  textAlign: "left"
};

styles.h3 = {
  borderBottom: "2px solid white",
  paddingBottom: "10px"
};

styles.ul = {
  listStyle: "none"
};

styles.li = {
  margin: "15px"
};
