// script.ts
import { NAV_DATA } from './docs/nav/data';
import * as fs from 'fs';

// Generate the HTML content for the browser bookmark/favorite file
let html = `
<!DOCTYPE NETSCAPE-Bookmark-file-1>
<HTML>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>
`;

NAV_DATA.forEach((item) => {
  html += `
  <DT><H3 ADD_DATE="1590853125" LAST_MODIFIED="1590853125">${item.title}</H3>
    <DL><p>`;

  item.items.forEach((i) => {
    html += `
      <DT><A HREF="${i.link}" ADD_DATE="1687485600" ICON="${i.icon}">${i.title}</A>
      <DD>${i.desc}`;
  })

  html += `
    </DL><p>`;
});

html += `
</DL><p>
</HTML>`;

// Write the HTML content to a file
const outputFile = 'bookmarks.html';
fs.writeFile(outputFile, html, (err) => {
  if (err) {
    console.error('Error writing bookmarks.html file:', err);
    return;
  }
  console.log(`Bookmarks HTML file generated successfully: ${outputFile}`);
});
