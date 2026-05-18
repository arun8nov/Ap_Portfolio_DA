import { promises as fs } from 'node:fs';
import path from 'node:path';

const RESUME_ROOT = path.resolve(process.cwd(), 'resumes');

function resolveSafePath(root: string, parts: string[]): string | null {
  const relPath = parts.join('/');
  const absolutePath = path.resolve(root, relPath);
  const normalizedRoot = `${root}${path.sep}`;
  const isInsideRoot = absolutePath === root || absolutePath.startsWith(normalizedRoot);
  return isInsideRoot ? absolutePath : null;
}

export async function GET(_: Request, context: { params: Promise<{ path: string[] }> }) {
  const { path: parts } = await context.params;
  const absolutePath = resolveSafePath(RESUME_ROOT, parts);

  if (!absolutePath) {
    return new Response('Invalid path', { status: 400 });
  }

  try {
    const fileData = await fs.readFile(absolutePath);

    return new Response(fileData, {
      headers: {
        'content-type': 'application/x-tex',
        'content-disposition': `attachment; filename="${path.basename(absolutePath)}"`,
        'cache-control': 'no-store',
      },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
