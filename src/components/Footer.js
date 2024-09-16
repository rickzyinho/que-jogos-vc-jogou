import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <a href="https://github.com/rickzyinho">
        &copy; {new Date().getFullYear()} rickzyinho
      </a>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    textAlign: "center",
    position: "fixed",
    width: "100%",
    bottom: 0,
  },
};

export default Footer;
