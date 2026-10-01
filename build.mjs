import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/.openai', { recursive: true });
await mkdir('dist/client', { recursive: true });
await mkdir('dist/server', { recursive: true });

for (const file of ['Portfolio.dc.html', 'support.js']) {
  await cp(file, `dist/client/${file}`);
}

const portfolioHtml = await readFile('Portfolio.dc.html', 'utf8');
// Serve the portfolio directly at the domain root. The named file stays available
// for old bookmarks, where the page itself cleans the visible URL back to `/`.
await writeFile('dist/client/index.html', portfolioHtml);
const assetPaths = new Set(
  [...portfolioHtml.matchAll(/['"](uploads\/[^'"]+)['"]/g)].map((match) =>
    decodeURIComponent(match[1]),
  ),
);
for (const assetPath of assetPaths) {
  try {
    const destination = `dist/client/${assetPath}`;
    await mkdir(dirname(destination), { recursive: true });
    await cp(assetPath, destination);
  } catch (error) {
    if (error?.code !== 'ENOENT' || assetPath !== 'uploads/preset-manager.png') throw error;
  }
}

const hosting = JSON.parse(await readFile('.openai/hosting.json', 'utf8'));
await writeFile('dist/.openai/hosting.json', `${JSON.stringify(hosting, null, 2)}\n`);
await writeFile(
  'dist/server/index.js',
  "export default { fetch(request, env) { return env.ASSETS.fetch(request); } };\n",
);
