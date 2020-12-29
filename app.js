const qrcode = require('qrcode');
const fs = require('fs');

const urlClient = 'https://github.com/maxiperellon/';

const generateQR = async () => {

    const urlToQR = await qrcode.toDataURL(urlClient);
    //console.log(urlToQR);

    const html = `
        <div>
            <img src="${urlToQR}">
        </div>
    `;
    
    fs.writeFileSync('./index.html', `${html}`)

    
    let base64String = urlToQR.toString()

    let base64Image = base64String.split(';base64,').pop();

    fs.writeFile('image.png', base64Image, {encoding: 'base64'}, (err) => {
        console.log('File created');
    });

}

generateQR();

