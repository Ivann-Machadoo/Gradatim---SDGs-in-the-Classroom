class Aside extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          .sidebar {
            height: 100%;
            background-color: #2c3e50;
            padding: 0 10px;
            padding-top: 10px;
            }

            .sidebar a {
            padding: 0.2rem 1rem;
            width: 10rem;
            margin-bottom: 10px;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: background-color 0.3s;
            border-radius: 10px;
            }

            .sidebar a div {
            align-self: center;
            width: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            }

            .sidebar a div img {
            color: white;
            font-size: 16px;
            align-self: center;
            }

            .sidebar a div p {
            color: white;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            margin: 0;
            }

            .sidebar a:hover {
            opacity: 0.9;
            }
        </style>
        <aside class="sidebar">
          <a href="origins.html" class="origins">
            <div>
              <img src="../images/icons/origin.png" width="70" alt="" />
              <p>Origins</p>
            </div>
          </a>
          <a href="spin-the-wheel.html" class="spin-wheel">
            <div>
              <img src="../images/icons/spin-the-wheel.png" width="70" alt="" />
              <p>Spin the Wheel</p>
            </div>
          </a>
          <a href="sdgs.html" class="explore-sdgs">
            <div>
              <img src="../images/icons/explore-sgds.png" width="70" alt="" />
              <p>SDGs</p>
            </div>
          </a>
          <a href="build-your-challenge.html" class="build-challenge">
            <div>
              <img
                src="../images/icons/build-your-challenge.png"
                width="70"
                alt=""
              />
              <p>Build Your Challenge</p>
            </div>
          </a>
          <a href="global-board.html" class="global-board">
            <div>
              <img src="../images/icons/global-board.png" width="70" alt="" />
              <p>Global Board</p>
            </div>
          </a>
          <a href="odis.html" class="odis"
            ><div>
              <img src="../images/icons/odis.png" width="70" alt="" />
              <p>ODIS</p>
            </div>
          </a>
          <a href="games.html" class="games"
            ><div>
              <img src="../images/icons/games.png" width="70" alt="" />
              <p>Games</p>
            </div>
          </a>
          <a href="what-if.html" class="what-if"
            ><div>
              <img src="../images/icons/what-if.png" width="70" alt="" />
              <p>What If...</p>
            </div>
          </a>
        </aside>
      `;
  }
}

customElements.define("sidebar-component", Aside);
