import PDFDocument from 'pdfkit';
import fs from 'fs';

export default ({ lyrics }: { lyrics: string; }): Promise<{ path?: string; fileName?: string; error?: boolean; message?: string; }> => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'a4', margin: 10 });

    const fileName = `${Date.now()}.pdf`;

    const stream = fs.createWriteStream(`/tmp/${fileName}`);

    doc.pipe(stream);

    doc.fontSize(15).text(lyrics, {
      columns: 2
    })

    doc.end();

    stream.on('finish', () => {
      resolve({ fileName, path: `/tmp/${fileName}` })
    })

    stream.on('error', (err) => {
      reject({ error: true, message: err.message })
    })
  });
}
