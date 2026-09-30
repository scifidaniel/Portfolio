import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/.openai', { recursive: true });
await mkdir('dist/client', { recursive: true });
await mkdir('dist/server', { recursive: true });

for (const file of ['index.html', 'Portfolio.dc.html', 'support.js']) {
  await cp(file, `dist/client/${file}`);
}
await cp('uploads', 'dist/client/uploads', { recursive: true });

const hosting = JSON.parse(await readFile('.openai/hosting.json', 'utf8'));
await writeFile('dist/.openai/hosting.json', `${JSON.stringify(hosting, null, 2)}\n`);
await writeFile(
  'dist/server/index.js',
  "export default { fetch(request, env) { return env.ASSETS.fetch(request); } };\n",
);
