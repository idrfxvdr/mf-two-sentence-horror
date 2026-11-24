import { mkdirSync, writeFileSync } from 'node:fs';

const text = "At nine I learned that whatever lives under the bed can only take what's uncovered, so for thirty years I've slept wrapped to the chin. Last night I woke with my feet bare and a cold hand letting go of my ankle, and then the blanket was drawn gently back over me, the way you'd cover something you were saving.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
