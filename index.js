import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
.prompt([{
    name: 'URL',
    message: 'enter the URL:',

},
])
.then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url, { type: 'png'});
    qr_png.pipe(fs.createWriteStream("qr_code.png"));

fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log ("the file has been saved");
});
})

.catch((error) => { //this is an error log (left empty here)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
  
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/