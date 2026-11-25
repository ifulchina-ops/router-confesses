import { mkdirSync, writeFileSync } from "node:fs";

// The Router Confesses: one line, in the router's own voice, for dying
// at the exact moment a movie reaches its climax. The line is 134
// characters, inside the gate's 1–200 range, and is written with no
// trailing newline so the file holds exactly the one line.
const line =
  "The detective was about to name the killer, so I died — after nine years of carrying this house, I deserved one cliffhanger of my own.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
