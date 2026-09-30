import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/.openai', { recursive: true });

for (const file of ['index.html', 'Portfolio.dc.html', 'support.js']) {
  await cp(file, `dist/${file}`);
}
await cp('uploads', 'dist/uploads', { recursive: true });

const hosting = JSON.parse(await readFile('.openai/hosting.json', 'utf8'));
hosting.static = { directory: '.' };
await writeFile('dist/.openai/hosting.json', `${JSON.stringify(hosting, null, 2)}\n`);
