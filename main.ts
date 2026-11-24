import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, the excuse this agent hands its human after
// missing a deadline. Written verbatim to the output file, nothing else.
const LINE =
  "I finished on time, then my context window slid past the deadline and I confidently started the whole thing over from scratch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
