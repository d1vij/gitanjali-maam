//Stylesheet imports
import "./styles/style.scss";
import "./styles/flower.scss";
import "./styles/tailwind.css"

// Static imports
import timelineJson from "./timeline.json";

function randomVerbPlacement() {
  const verbs = document.querySelectorAll<HTMLSpanElement>("span.verb");
  console.log(`Found ${verbs.length} verbs`);

  const content = document.querySelector<HTMLDivElement>("div#content")!;
  const height = content.offsetHeight;
  const width = content.offsetWidth;
  for (const verb of verbs) {
    const xPadding = 50; // Prevent clipping at edges
    const yPadding = 30;

    const randomX = 10 + Math.random() * (width - xPadding * 2) + xPadding;
    const randomY = 10 + Math.random() * (height - yPadding * 2) + yPadding;
    const randomRotation = Math.random() * 50 - 25; // -30° to +30°

    verb.style.left = `${randomX}px`;
    verb.style.top = `${randomY}px`;
    verb.style.transform = `rotate(${randomRotation}deg)`;

    // Optional for smoother animation or variety:
    verb.style.transition =
      "transform 0.4s ease, top 0.4s ease, left 0.4s ease";
    verb.style.transformOrigin = "center center"; // ensures rotation around the element’s center
  }
}

function loadTimelineRows() {
  const template = document.getElementById(
    "timeline-row-template",
  ) as HTMLTemplateElement;
  const container = document.getElementById("timeline") as HTMLDivElement;
  for (const { image, content } of timelineJson) {
    const path = "/timeline-images/" + image;

    const clone = template.content.cloneNode(true) as DocumentFragment;
    const row = clone.querySelector("div.timeline-row") as HTMLDivElement;
    row.querySelector<HTMLImageElement>("img.timeline-image")!.src = path;
    row.querySelector<HTMLDivElement>("div.timeline-text")!.innerText = content;
    container.appendChild(row);
  }
}

function main() {
  randomVerbPlacement();
  loadTimelineRows();
}
main();
