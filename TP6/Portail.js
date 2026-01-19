const container = document.getElementById("container");
const inputPseudo = document.querySelector("#txt");
const inputServerUrl = document.querySelector("#serverUrl");
const buttonJoin = document.querySelector("#btn");
const canvas = document.createElement("canvas");

const SPRITE_SIZE = 64;
const SKIN_COUNT = 30;

let selectedSkin = null;

for (let i = 1; i < SKIN_COUNT; i++) {
  const canvas = document.createElement("canvas");
  canvas.width = SPRITE_SIZE;
  canvas.height = SPRITE_SIZE;
  canvas.classList.add("skin-canvas");

  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  const sprite = new Image();
  sprite.src = `assets/${i}.png`;

  sprite.onload = () => {
    const spriteIndexX = 0;
    const spriteIndexY = 2;

    ctx.drawImage(
      sprite,
      spriteIndexX * SPRITE_SIZE,
      spriteIndexY * SPRITE_SIZE,
      SPRITE_SIZE,
      SPRITE_SIZE,
      0,
      0,
      SPRITE_SIZE,
      SPRITE_SIZE
    );
  };

  canvas.addEventListener("click", () => {
    document
      .querySelectorAll(".skin-canvas")
      .forEach((c) => c.classList.remove("selected"));

    canvas.classList.add("selected");
    selectedSkin = i;

    console.log("Skin sélectionné :", selectedSkin);
  });

  container.appendChild(canvas);
}

buttonJoin.addEventListener("click", () => {
  const pseudo = inputPseudo.value.trim();
  const serverUrl = inputServerUrl.value.trim();

  if (!pseudo) {
    alert("Pseudo obligatoire");
    return;
  }

  if (!serverUrl) {
    alert("Server URL obligatoire");
    return;
  }

  if (selectedSkin === null) {
    alert("Choisis un skin");
    return;
  }

  const skinPath = `assets/${selectedSkin}.png`;

  const playerConfig = {
    pseudo,
    serverUrl,
    skinPath,
  };

  localStorage.setItem("playerConfig", JSON.stringify(playerConfig));

  console.log("Config sauvegardée :", playerConfig);

});

canvas.addEventListener("click", () => {
  document
    .querySelectorAll(".skin-canvas")
    .forEach((c) => c.classList.remove("selected"));

  canvas.classList.add("selected");

  selectedSkin = i;
});

const savedConfig = JSON.parse(localStorage.getItem("playerConfig"));

if (savedConfig) {
  console.log(savedConfig.pseudo);
  console.log(savedConfig.serverUrl);
  console.log(savedConfig.skinPath);
}
