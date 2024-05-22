import { open_about_us } from "./windows/about_us";
import { open_blog } from "./windows/blog";
import { open_mission } from "./windows/mission";

const background = (canvas: HTMLSpanElement) => {
  canvas.className += ` bg-cover bg-bottom bg-no-repeat h-screen`;
  canvas.style.backgroundImage = "url('assets/images/background.svg')";
};

const topology_text: () => HTMLDivElement = () => {
  const div = document.createElement("div");
  div.className = `fixed bottom-36 lg:bottom-44 w-full z-20`;

  const wrapper = document.createElement("div");
  wrapper.className = `text-center justify-center mx-auto flex flex-col gap-y-8 max-w-lg`;
  const img = document.createElement("img");
  img.className = "block mx-auto";
  img.width = 350;
  img.src = "assets/images/topology.png";

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
  person.className = "fixed ml-[47vw] bottom-[36vh] z-10 h-[25vh]";
  person.src = "assets/images/sprite.svg";

  const scarf = document.createElement("img");
  scarf.className = "animate-scarf fixed ml-[48vw] bottom-[1vh] h-3/4";
  scarf.style.minInlineSize = "90vh";
  scarf.src = "assets/images/scarf.svg";

  div.appendChild(person);
  div.appendChild(scarf);

  return div;
};

const menu: () => HTMLDivElement = () => {
  const div = document.createElement("div");
  div.className = `fixed bottom-8 left-0 right-0 mx-auto flex gap-x-14 sm:gap-x-20 lg:gap-x-32 w-fit max-w-full overflow-visible`;
  const items = [
    {
      icon: "assets/images/icons/mission.svg",
      name: "Mission",
      onclick: () => {
        open_mission();
      },
    },
    {
      icon: "assets/images/icons/about_us.svg",
      name: "About Us",
      onclick: () => {
        open_about_us();
      },
    },
    {
      icon: "assets/images/icons/blog.svg",
      name: "Blog",
      onclick: () => {
        open_blog();
      },
    },
  ];

  for (const item of items) {
    const button = document.createElement("button");
    button.innerHTML = `
      <img src="${item.icon}" class="mx-auto w-16 h-16">
      <span class="block w-24 mt-2 text-base text-[#866678] font-medium">${item.name}</span>`;

    button.className =
      "align-middle focus-visible:outline-none hover:scale-105 hover:transition-all";
    button.onclick = item.onclick;
    div.appendChild(button);
  }

  return div;
};

const render = () => {
  const canvas = <HTMLDivElement>document.getElementById("canvas");
  background(canvas);
  canvas.appendChild(animated_person());
  canvas.appendChild(topology_text());
  canvas.appendChild(menu());

  // start with mission window opened
  open_mission();
};

render();
