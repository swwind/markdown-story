import { useMarkdownStory } from "@/preact";

import "./game.scss";

import intro from "../story/intro.md";

export default function () {
  const story = useMarkdownStory(intro);

  return (
    <div class="game" onClick={() => story.step()}>
      <div class="background" ref={story.refs.background}></div>

      <div class="console">
        <div class="name">{story.name.value}</div>
        <div class="text" ref={story.refs.text} />
      </div>
    </div>
  );
}
