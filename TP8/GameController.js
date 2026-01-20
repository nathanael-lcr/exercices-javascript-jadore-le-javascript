class GameController {
  constructor() {
    // Server sends updates at 20 ticks per second
    this.SERVER_TICK_RATE = 20;
    // Duration between two server ticks in milliseconds
    this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;

    // Permanently bind "this" at the instance of the GameController class
    this.loop = this.loop.bind(this);

    this.game = new Game();
    this.playerConfig = localStorage.getItem("playerConfig");
    this.name = localStorage.getItem("name");
    this.serverUrl = localStorage.getItem("serverUrl");
    this.spritePath = localStorage.getItem("skinPath");
    this.inputState = {
      up: false,
      down: false,
      left: false,
      right: false,
      attack: false,
    };

    this.socket = new WebSocket(this.serverUrl);
    this.initSocket();
    this.startInputSender();
    this.initInput();

    // Regulates framerate to keep 60fps
    requestAnimationFrame(this.loop);
  }

  initSocket() {
    this.socket.onopen = () => {
      console.log("Connexion au serveur établie", this.name);

      this.socket.send(
        JSON.stringify({
          name: this.name,
          skinPath: this.spritePath,
        })
      );
    };

    this.socket.onmessage = (e) => {
      let message = JSON.parse(e.data);
      this.game.update(message);
    };
  }

  initInput() {
    window.addEventListener("keydown", (e) => {
      switch (e.key.toLowerCase()) {
        case "w":
          this.inputState.up = true;
          break;
        case "s":
          this.inputState.down = true;
          break;
        case "a":
          this.inputState.left = true;
          break;
        case "d":
          this.inputState.right = true;
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key.toLowerCase()) {
        case "w":
          this.inputState.up = false;
          break;
        case "s":
          this.inputState.down = false;
          break;
        case "a":
          this.inputState.left = false;
          break;
        case "d":
          this.inputState.right = false;
          break;
      }
    });
  }

  startInputSender() {
    setInterval(() => {
      while (WebSocket.OPEN) {
        this.socket.send(
          JSON.stringify({
            type: "input",
            input: this.inputState,
          })
        );
      }
    }, this.SERVER_INTERVAL);
  }

  // === Main render loop ===
  loop(timestamp) {
    // Request the next frame
    requestAnimationFrame(this.loop);
    console.log(this.inputState);
  }
}

// === Start the game controller by instantiating the GameController class ===
// This line will execute the constructor (e.g, launch the frontend)
new GameController();
