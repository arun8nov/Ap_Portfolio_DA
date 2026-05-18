import { promises as fs } from 'node:fs';
import path from 'node:path';

const IMAGE_ROOT = path.resolve(process.cwd(), 'Images');

const CONTENT_TYPE_BY_EXT: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

function resolveSafePath(root: string, parts: string[]): string | null {
  const relPath = parts.join('/');
  const absolutePath = path.resolve(root, relPath);
  const normalizedRoot = `${root}${path.sep}`;
  const isInsideRoot = absolutePath === root || absolutePath.startsWith(normalizedRoot);
  return isInsideRoot ? absolutePath : null;
}

export async function GET(_: Request, context: { params: Promise<{ path: string[] }> }) {
  const { path: parts } = await context.params;
  const absolutePath = resolveSafePath(IMAGE_ROOT, parts);

  if (!absolutePath) {
    return new Response('Invalid path', { status: 400 });
  }

  try {
    const fileData = await fs.readFile(absolutePath);
    const ext = path.extname(absolutePath).toLowerCase();
    const contentType = CONTENT_TYPE_BY_EXT[ext] ?? 'application/octet-stream';

    return new Response(fileData, {
      headers: {
        'content-type': contentType,
        'cache-control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
