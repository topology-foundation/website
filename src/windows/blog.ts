import { window } from "../components/window";

const posts = [
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
  const div = document.createElement("div");

  const initial_text = document.createElement("p");
  initial_text.innerText = "Read the latest blog posts";

  const posts_wrapper = document.createElement("div");

  for (const post of posts) {
    const post_element = document.createElement("a");
    post_element.innerText = `${post.title} (${post.date})`;
    post_element.href = post.url;
    post_element.target = "_blank";
    posts_wrapper.appendChild(post_element);
  }

  div.appendChild(initial_text);
  div.appendChild(posts_wrapper);

  window("w-72 h-80 md:w-96 md:h-96", "Blog", div);
};
