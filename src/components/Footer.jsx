import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ John Zhou {year}</p>
    </footer>
  );
}

export default Footer;
