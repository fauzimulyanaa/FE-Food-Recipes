import "../assets/css/app.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container container-fluid">
        <div className="footer">
          <h1>Eat, Cook, Repeat</h1>
          <p>Share your best recipe by uploading here !</p>
        </div>

        <div className="footer-nav">
          <nav className="nav-list">
            <ul>
              <li>
                <a href="#">Product </a>
              </li>
              <li>
                <a href="#">Company </a>
              </li>
              <li>
                <a href="#">Learn more </a>
              </li>
              <li>
                <a href="#">Get in touch</a>
              </li>
              <li className="copyright">
                <p>&copy;Arkademy</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
