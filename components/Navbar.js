class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .header {
          background-color: #000;
          color: white;
          padding: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 90%;
          max-width: 1200px;
        }

        .header img {
          height: 50px;
        }

        .header nav {
          margin-left: auto;
        }

        .header nav a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
          font-size: 16px;
        }

        .header nav a:hover {
          text-decoration: underline;
        }
      </style>
      <header class="header">
        <div class="header-content">
        <a href="start.html"><img src="../images/your-logo.png" alt="Logo" /></a>
          <nav>
           <a href="index.html">Home</a>
            <a href="about.html">About</a>
           <a href="team.html">Team</a>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define("navbar-component", Header);
