const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'archivio');
const indexFilePath = path.join(__dirname, 'archivio.html');

// Generate the HTML
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading the directory:', err);
        return;
    }

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Archivio Folder</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 20px;
              padding: 0;
          }
          ul {
              list-style-type: none;
          }
          a {
              text-decoration: none;
              color: #007BFF;
          }
          a:hover {
              text-decoration: underline;
          }
      </style>
    </head>
    <body>
      <h1>Archivio Folder</h1>
      <p>Below is a list of files in the "archivio" folder:</p>
      <ul>
        ${files.map(file => `<li><a href="archivio/${file}" target="_blank">${file}</a></li>`).join('')}
      </ul>
    </body>
    </html>
  `;

    // Write to archivio.html
    fs.writeFile(indexFilePath, htmlContent, (writeErr) => {
        if (writeErr) {
            console.error('Error writing the HTML file:', writeErr);
        } else {
            console.log('archivio.html has been generated successfully.');
        }
    });
});