const background = (canvas: HTMLSpanElement) => {
  canvas.className += ` bg-cover bg-bottom bg-no-repeat h-screen`;
  canvas.style.backgroundImage = "url('assets/images/background.svg')";
};

const topology_text: () => HTMLDivElement = () => {
  const div = document.createElement("div");
  div.className = `fixed bottom-36 lg:bottom-44 w-full`;

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
  person.className = "fixed ml-[47vw] mt-[30vh] z-10";
  person.src = "assets/images/person.svg";

  const scarf = document.createElement("img");
  scarf.className = "animate-scarf fixed ml-[50vw] mt-[19vh] ";
  scarf.src = "assets/images/scarf.svg";

  //div.appendChild(person);
  div.appendChild(scarf);

  return div;
};

const menu: () => HTMLDivElement = () => {
  const div = document.createElement("div");
  div.className = `fixed bottom-8 left-0 right-0 mx-auto flex gap-x-14 sm:gap-x-20 lg:gap-x-32 w-fit max-w-full`;
  const items = [
    {
      icon: "assets/images/icons/mock_icon.svg",
      name: "Mission",
    },
    {
      icon: "assets/images/icons/mock_icon.svg",
      name: "About Us",
    },
    {
      icon: "assets/images/icons/mock_icon.svg",
      name: "Blog",
    },
  ];

  for (const item of items) {
    const divEl = document.createElement("div");
    const btnEl = document.createElement("button");
    btnEl.innerHTML = `
      <img src="${item.icon}" class="mx-auto w-16 h-16">
      <span class="block w-24 mt-2 text-base text-[#866678] font-medium">${item.name}</span>`;
    //divEl.className = item.position;
    btnEl.className = "align-middle focus-visible:outline-none";
    //btnEl.onclick = btn.onclick;
    divEl.appendChild(btnEl);
    div.appendChild(divEl);
  }

  return div;
};

const render = () => {
  const canvas = <HTMLDivElement>document.getElementById("canvas");
  //canvas.className = "hidden md:block";
  background(canvas);
  canvas.appendChild(animated_person());
  canvas.appendChild(topology_text());
  canvas.appendChild(menu());

  // TODO maybe useless to have this
  /*
  const mobile_canvas = <HTMLDivElement>(
    document.getElementById("mobile_canvas")
  );
  mobile_canvas.className = "md:hidden";
  background(mobile_canvas);
  mobile_canvas.appendChild(topology_text());
  mobile_canvas.appendChild(menu());
  */
};

render();
