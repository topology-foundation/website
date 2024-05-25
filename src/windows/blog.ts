import { window } from "../components/window";

const posts = [
  {
    title: "Super Mario in CRDT",
    date: "May 22, 2024",
    url: "https://www.guiltygyoza.xyz/2024/05/super-mario-in-crdt",
  },
  {
    title: "Topology protocol walkthrough",
    date: "Apr 26, 2024",
    url: "https://www.guiltygyoza.xyz/2024/04/topology-protocol-walkthrough",
  },
  {
    title: "From Isaac, Mumu, Shoshin, to CRDTs",
    date: "Apr 23, 2024",
    url: "https://www.guiltygyoza.xyz/2024/04/from-isaac-mumu-shoshin-to-crdts",
  },
];

export const open_blog = () => {
  if (<HTMLSpanElement>document.getElementById("blog")) return;
  const div = document.createElement("div");
  div.id = "blog";

  const initial_text = document.createElement("p");
  initial_text.className =
    "mt-5 mb-2 text-center font-medium text-topology-border";
  initial_text.innerText = "Read the latest blog posts".toUpperCase();

  const posts_wrapper = document.createElement("div");

  for (const post of posts) {
    const post_element = document.createElement("span");
    post_element.className = `mx-3 mt-4 flex flex-col`;
    const link = document.createElement("a");
    link.className = `text-[#f79e88] hover:text-[#fdd4ba]`;
    link.innerText = post.title;
    link.href = post.url;
    link.target = "_blank";
    const date = document.createElement("span");
    date.className = `text-xs text-[#866678]`;
    date.innerText = `${post.date}`;

    post_element.appendChild(link);
    post_element.appendChild(date);

    posts_wrapper.appendChild(post_element);
  }

  div.appendChild(initial_text);
  div.appendChild(posts_wrapper);

  window(
    `w-96 max-w-3/4 h-96 top-[10%] right-1/2 translate-x-1/2
      md:top-16 md:right-10 md:translate-x-0
      xl:top-16 xl:right-16`,
    "Blog",
    div,
  );
};
