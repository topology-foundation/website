const background = (canvas: HTMLSpanElement) => {
  canvas.className = `bg-[url('/assets/images/background.png')] bg-cover bg-no-repeat h-screen`;
};

const topology_text: () => HTMLDivElement = () => {
  const div = document.createElement("div");
  div.className = `fixed bottom-60 w-full`;

  const wrapper = document.createElement("div");
  wrapper.className = `text-center justify-center mx-auto flex flex-col gap-y-8 max-w-lg`;
  const img = document.createElement("img");
  img.className = "block mx-auto";
  img.width = 350;
  img.src = "/assets/images/topology.png";

  const red_text = document.createElement("span");
  red_text.className = "text-[#ed1e24]";
  red_text.innerText = "community-driven";
  const green_text = document.createElement("span");
  green_text.className = "text-[#63c6c1]";
  green_text.innerText = "random access memory";
  const yellow_text = document.createElement("span");
  yellow_text.className = "text-[#faa51a]";
  yellow_text.innerText = "world computer";
  const pink_text = document.createElement("span");
  pink_text.className = "text-[#f06ba8]";
  pink_text.innerText = "lock-free asynchronous";
  const blue_text = document.createElement("span");
  blue_text.className = "text-[#3853a4]";
  blue_text.innerText = " decentralized applications";

  const text = document.createElement("p");
  text.className = "text-[#866678]";
  text.append(
    "topology is a ",
    red_text,
    " technology that brings ",
    green_text,
    " to the ",
    yellow_text,
    " to power ",
    pink_text,
    blue_text,
  );

  wrapper.appendChild(img);
  wrapper.appendChild(text);
  div.appendChild(wrapper);

  return div;
};

const animated_person: () => HTMLDivElement = () => {
  const div = document.createElement("div");
  div.className = "w-full";

  const person = document.createElement("img");
  person.className = "fixed ml-[47vw] mt-[30vh] z-10";
  person.src = "/assets/images/person.svg";

  const scarf = document.createElement("img");
  scarf.className = "animate-scarf fixed ml-[50vw] mt-[19vh] ";
  scarf.src = "/assets/images/scarf.svg";

  div.appendChild(person);
  div.appendChild(scarf);

  return div;
};

const render = () => {
  const canvas = <HTMLSpanElement>document.getElementById("canvas");
  background(canvas);
  canvas.appendChild(animated_person());
  canvas.appendChild(topology_text());
};

render();
