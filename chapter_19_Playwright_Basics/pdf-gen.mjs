import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://sdet.live', { waitUntil: 'load', timeout: 60000 });
await page.pdf({ path: 'sdetlive.pdf', format: 'A4' });
await browser.close();
console.log('PDF generated: sdetlive.pdf');
