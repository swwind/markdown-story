import { HTML } from "mdast";
import { ParseContext } from ".";
import { ParseError } from "./error";

export function parseStoryHtml(ctx: ParseContext, html: HTML) {
  if (html.value.startsWith("<script>") && html.value.endsWith("</script>")) {
    const code = html.value.slice(8, -9).trim();
    ctx.append(code);
    return;
  }

  if (html.value.startsWith("<!--") && html.value.endsWith("-->")) {
    // comment
    return;
  }

  throw new ParseError("Unknown html", html.position);
}
