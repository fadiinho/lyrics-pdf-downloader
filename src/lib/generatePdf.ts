import PDFDocument from 'pdfkit';
import fs from 'fs';

interface Config {
    split: boolean
}

interface GeneratePDFProps {
    lyrics: string;
    songName: string;
    artist: string;
    config: Config
}

export default ({ lyrics, songName, artist, config }: GeneratePDFProps): Promise<{ path?: string; fileName?: string; error?: boolean; message?: string; }> => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'a4', margin: 10 });

    const fileName = songName && artist ? `${artist} - ${songName}.pdf` :`${Date.now()}.pdf`;

    const stream = fs.createWriteStream(`/tmp/${fileName}`);

    doc.pipe(stream);

    doc.fontSize(18)
        .text(songName.trim(), {
            align: "center",
            paragraphGap: 30
        });

    doc.fontSize(15)
        .text(lyrics, {
          columns: config?.split ? 2 : 1
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
