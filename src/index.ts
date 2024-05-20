const render = () => {
  const canvas = <HTMLSpanElement>document.getElementById("canvas");
  const base = document.createElement("div");
  canvas.appendChild(base);
  base.className = "h-screen py-5 px-10";
  base.innerHTML = `gm`;
};

render();
