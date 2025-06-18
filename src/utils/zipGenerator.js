import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export async function generateZip({ html, css, image, filename = 'my-portfolio.zip' }) {
  const zip = new JSZip();
  zip.file('index.html', html);
  zip.file('styles.css', css);
  if (image) {
    zip.file(image.name, image.content, { binary: true });
  }
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, filename);
}
