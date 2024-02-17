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
      
    } else {
      // Something else went wrong
    }
  });
  
  
