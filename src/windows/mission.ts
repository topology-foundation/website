import { window } from "../components/window";

export const open_mission = () => {
  if (<HTMLSpanElement>document.getElementById("mission")) return;
  const wrapper = document.createElement("div");
  wrapper.id = "mission";

  wrapper.className = `m-1 h-[calc(100%-1.5rem)] overflow-y-auto overflow-x-hidden`;

  const div = document.createElement("div");
  div.className = `m-2`;

  div.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel massa nisi. Fusce eget blandit leo. Quisque eu ipsum sit amet diam elementum imperdiet sit amet at sapien. Morbi varius libero at laoreet porta. In ac mollis ex. Fusce sagittis tristique libero at mattis. Mauris feugiat, risus sit amet dignissim pellentesque, nulla diam ornare ex, nec tempus libero mi vel ante.

  Morbi tempor turpis mauris, quis consequat tortor hendrerit vitae. Pellentesque a est purus. Nulla rhoncus, lacus at cursus volutpat, ipsum diam iaculis orci, eget auctor odio risus non turpis. Vivamus at faucibus mauris, pretium sollicitudin risus. Duis lacus nibh, malesuada at odio sed, dignissim cursus erat. Etiam vel volutpat velit, sed aliquam enim. Mauris quis eleifend magna, non convallis eros. Fusce tincidunt arcu risus, ac feugiat arcu tristique eu. Maecenas ornare vel nisi ut euismod. Maecenas quis posuere felis, sit amet blandit metus. Sed porttitor auctor sem vitae rutrum. Duis ut suscipit tellus. Mauris eros turpis, pharetra quis purus in, dictum sollicitudin augue.

  Phasellus ac sem felis. Cras congue felis nec augue semper, id euismod massa porttitor. Maecenas auctor quam nec nulla ullamcorper sollicitudin. Sed vel posuere magna. Aliquam velit eros, pulvinar luctus justo non, porta mattis odio. Integer mollis sed mi vitae scelerisque. Aliquam sed vehicula neque. Nulla feugiat consequat convallis. Nullam in interdum odio. Suspendisse et ligula ac sem imperdiet congue.

  Nunc fringilla neque at justo ultrices, tincidunt accumsan nisl tincidunt. Ut venenatis in nisi et bibendum. In euismod imperdiet neque sed pulvinar. Fusce sed eros ante. Aenean ante urna, elementum sed iaculis at, interdum sit amet ante. Integer porta neque velit, ac mattis tellus venenatis id. Praesent iaculis, augue et fermentum varius, ante diam vehicula enim, vel fringilla felis dui eu lorem. Suspendisse potenti. Suspendisse id velit erat. Sed nulla purus, suscipit vitae est nec, eleifend euismod mauris.

  Suspendisse aliquam nibh a ipsum suscipit facilisis. Nam at ligula et erat accumsan condimentum et ac tellus. Nam semper tellus sit amet ante convallis, sed mollis est egestas. Vivamus odio lectus, consectetur id magna in, vestibulum auctor velit. Vivamus diam dui, sodales vel ex vel, malesuada viverra quam. Maecenas nibh risus, vestibulum sit amet sapien eget, finibus accumsan arcu. Duis porta leo ut velit auctor, in consequat metus pellentesque. Nulla elit erat, fermentum ut tincidunt a, suscipit et orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus blandit nisi non sem accumsan faucibus. Vestibulum eleifend velit eu urna faucibus, sit amet eleifend est pellentesque. Phasellus vehicula purus sit amet fermentum dignissim. Etiam scelerisque ac eros in accumsan.
    `;

  wrapper.appendChild(div);
  window(
    `w-96 h-1/2 top-[10%] left-1/2 -translate-x-1/2
      md:top-16 md:left-10 md:-translate-x-0
      xl:h-2/3 xl:top-16 xl:left-16`,
    "Mission",
    wrapper,
  );
};
