import generatePdf from '$lib/generatePdf'
import { error, type RequestEvent } from '@sveltejs/kit';

import fs from 'fs';

const deleteFile = (path: string) => {
  if (fs.existsSync(path)) {
    try {
      fs.unlinkSync(path) 
    } catch(err) {
      if (err instanceof Error) {
        console.debug(err.cause)
        console.debug(err.message)
      }
    }
  }
}
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: RequestEvent) {
  const pdf = await generatePdf(await request.json());

  if (pdf.error || !pdf.fileName || !pdf.path) {
    throw error(401, pdf.message);
  }

  const stream = fs.createReadStream(pdf.path);

  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
  }

  deleteFile(pdf.path)

  return new Response(buffer, {
    status: 200,
    statusText: 'ok',
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename='+pdf.fileName+'.pdf'
    }
  }); 
}

