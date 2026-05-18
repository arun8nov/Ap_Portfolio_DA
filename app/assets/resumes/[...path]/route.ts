import { promises as fs } from 'node:fs';
import path from 'node:path';

const RESUME_ROOT = path.join(process.cwd(), 'resumes');

export async function GET(_: Request, { params }: { params: { path: string[] } }) {
  const relPath = params.path.join('/');
  const absolutePath = path.resolve(RESUME_ROOT, relPath);

  if (!absolutePath.startsWith(RESUME_ROOT)) {
    return new Response('Invalid path', { status: 400 });
  }

  try {
    const data = await fs.readFile(absolutePath);
    return new Response(data, {
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
