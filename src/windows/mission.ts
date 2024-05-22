import { window } from "../components/window";

export const open_mission = () => {
  if (<HTMLSpanElement>document.getElementById("mission")) return;
  const wrapper = document.createElement("div");
  wrapper.id = "mission";

  wrapper.className = `m-1 h-[calc(100%-1.5rem)] overflow-y-auto overflow-x-hidden`;

  const div = document.createElement("div");
  div.className = `m-3 text-topology-border`;
  div.style.direction = "ltr";
  div.innerText = `Topology's mission is to advance humanity's presence in the cyberspace.

    We bring peer-to-peer BFT-CRDT to the world computer to enable the creation of sovereign,
    persistent, and interoperable realities on the Internet.`;

  const hiring_div = document.createElement("div");
  hiring_div.className = `mt-5 flex flex-col w-fit mx-auto`;
  hiring_div.innerHTML = `
    <span class='text-topology-border font-semibold'>WE ARE HIRING</span>
    <a
      class='mt-2 border rounded-lg border-topology-border bg-[#f79e88] text-[#fff1ea] text-center'
      href='https://topology-gg.notion.site/Open-roles-07cb37cfd785478d959f1f1859f41c67'
      target='_blank'>
      Open Roles
    </a>
  `;

  wrapper.appendChild(div);
  wrapper.appendChild(hiring_div);

  window(
    `w-96 max-w-3/4 h-96 top-[10%] left-1/2 -translate-x-1/2
      md:top-16 md:left-10 md:translate-x-0
      xl:top-16 xl:left-16`,
    "Mission",
    wrapper,
  );
};
