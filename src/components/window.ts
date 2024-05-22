export const window = (
  dimensions: string,
  title: String,
  content: HTMLElement,
) => {
  const canvas = <HTMLSpanElement>document.getElementById("canvas");

  const base = document.createElement("div");
  base.className =
    `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     border-2 border-topology-border rounded-2xl z-50 ` + dimensions;
  const base_shadow = document.createElement("div");
  base_shadow.className =
    `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     bg-topology-border rounded-2xl ml-2 mt-2 z-40 ` + dimensions;

  // Header
  const header = document.createElement("div");
  header.className = `absolute top-0 left-0 w-full h-10 bg-topology-bg border-b-2 border-topology-border rounded-t-2xl`;

  // Header buttons
  const genericBtnStyle =
    "absolute top-1/2 h-6 w-6 border-2 border-topology-border rounded-full -translate-y-1/2 cursor-pointer";
  const genericBtnImgStyle =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

  const close = document.createElement("button");
  close.className =
    genericBtnStyle + " bg-topology-red left-4 !border-topology-border";
  close.innerHTML =
    "<span class='" +
    genericBtnImgStyle +
    " text-topology-bg !h-6 !w-6 font-sans'>X</span>";
  close.onclick = () => {
    canvas.removeChild(base);
    canvas.removeChild(base_shadow);
  };

  const maximize = document.createElement("button");
  maximize.className = genericBtnStyle + " bg-topology-green left-12";
  maximize.innerHTML =
    "<span class='absolute inset-0 m-auto -mt-2 h-fit w-fit text-topology-bg text-2xl font-sans'>+</span>";
  maximize.onclick = () => {
    base.className = "w-full h-full relative z-50";
    header.className = header.className.replace(" rounded-t-2xl", "");
    contentArea.className = contentArea.className.replace(" rounded-b-2xl", "");
    canvas.removeChild(base_shadow);
    header.removeChild(maximize);
    header.appendChild(minimize);
  };

  const minimize = document.createElement("button");
  minimize.className = genericBtnStyle + " bg-topology-green left-12";
  minimize.innerHTML =
    "<span class='absolute inset-0 m-auto -mt-2 h-fit w-fit text-topology-bg text-2xl font-sans'>-</span>";
  minimize.onclick = () => {
    base.className =
      `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
       border-2 border-topology-border rounded-2xl z-50 ` + dimensions;
    header.className = header.className + " rounded-t-2xl";
    contentArea.className = contentArea.className + " rounded-b-2xl";
    header.removeChild(minimize);
    header.appendChild(maximize);
    canvas.appendChild(base_shadow);
  };

  const window_title = document.createElement("p");
  window_title.className = `absolute inset-0 my-auto h-fit !left-28 text-topology-border font-medium tracking-widest`;
  window_title.textContent = title.toUpperCase();

  header.appendChild(close);
  header.appendChild(maximize);
  header.appendChild(window_title);

  // Content area
  const contentArea = document.createElement("div");
  contentArea.className = `absolute top-10 left-0 w-full h-[calc(100%-1.5rem)]
    overflow-y-auto overflow-x-hidden bg-topology-bg rounded-b-2xl`;
  contentArea.appendChild(content);

  base.appendChild(header);
  base.appendChild(contentArea);
  canvas.appendChild(base);
  canvas.appendChild(base_shadow);
};
