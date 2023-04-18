import "../css/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div id="footer">
          <div style={{ flex: "1", marginRight: "20px" }}>
           
            <ul>
              <li>countris</li>
              <li>Regions</li>
              <li>Cities</li>
            </ul>
          </div>
          <div style={{ flex: "1", marginRight: "20px" }}>
            <ul>
              <li>Homes</li>
              <li>Apartments</li>
              <li>Villas</li>
            </ul>
          </div>
          <div style={{ flex: "1", marginRight: "20px" }}>
            <ul>
              <li>Car Rentals</li>
              <li>Flight Finder</li>
            </ul>
          </div>
          <div style={{ flex: "1" }}>
            <ul>
              <li>Careers</li>
              <li>Msa statement</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          &copy; 2023 Matsaina. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
