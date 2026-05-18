import { promises as fs } from 'node:fs';
import path from 'node:path';

const IMAGE_ROOT = path.join(process.cwd(), 'Images');

const contentTypeByExt: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

export async function GET(_: Request, { params }: { params: { path: string[] } }) {
  const relPath = params.path.join('/');
  const absolutePath = path.resolve(IMAGE_ROOT, relPath);

  if (!absolutePath.startsWith(IMAGE_ROOT)) {
    return new Response('Invalid path', { status: 400 });
  }

  try {
    const data = await fs.readFile(absolutePath);
    const ext = path.extname(absolutePath).toLowerCase();
    const contentType = contentTypeByExt[ext] ?? 'application/octet-stream';
    return new Response(data, { headers: { 'content-type': contentType, 'cache-control': 'public, max-age=31536000, immutable' } });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
