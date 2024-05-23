import { window } from "../../components/window";

export const open_about_us = () => {
  if (<HTMLSpanElement>document.getElementById("about_us")) return;
  const wrapper = document.createElement("div");
  wrapper.id = "about_us";

  wrapper.className = `m-1 h-[calc(100%-1.5rem)] overflow-y-auto overflow-x-hidden`;

  const div = document.createElement("div");
  div.className = `m-3 text-topology-border`;
  div.style.direction = "ltr";

  div.innerHTML = `Since 2020, Topology has embarked on a singular mission to help
  humanity create <a class='text-[#f79e88] hover:text-[#fdd4ba]' href='https://memory.community/?twclid=2-2ow04vbir30vgnerdvjfrg7w5'>rich, affectionate, and sustainable realities</a>
  on the internet. We believe this to be humanity’s next important undertaking on the internet: to freely exist on sovereign, persistent,
  and interoperable realities.
  <br/><br/>
  We are honored to take this journey with the trust of creators and early backers of Ethereum, Cosmos, Farcaster, Twitter, Microsoft, Angelist, Notion, Stack Overflow, and many other inventions that have advanced the internet.
  <br/><br/>
  Distributed around the globe, Topology is fortunate to dream together with a collective of passionate and curious minds daring to make the mission a reality. If you are crazy enough to dream of this mission together, please let us know.`;

  const hiring_div = document.createElement("div");
  hiring_div.className = `mt-5 flex flex-col w-fit mx-auto`;
  hiring_div.innerHTML = `
      <span class='text-topology-border font-semibold'>WE ARE HIRING</span>
      <a
        class='mt-2 px-2 border rounded-lg border-topology-border bg-[#f79e88] text-[#fff1ea] text-center'
        href='https://topology-gg.notion.site/Open-roles-07cb37cfd785478d959f1f1859f41c67'
        target='_blank'>
        Open Roles
      </a>
    `;

  wrapper.appendChild(div);
  wrapper.appendChild(hiring_div);

  window(
    `w-96 md:w-2/5 max-w-3/4 h-1/2 top-[10%] left-1/2 -translate-x-1/2 xl:h-2/3`,
    "About Us",
    wrapper,
  );
};
