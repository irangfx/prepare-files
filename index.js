const fs = require("fs");

const tempFolder = './Temp';
const directories = ['Pic', 'File'];

fs.readdir('./', function (err, files) {
    if (err) throw err;

    files.filter(function (file) {
        return fs.statSync(file).isDirectory();
    }).forEach(function (file) {

        directories.forEach(dir => {
            const path = './' + file + '/' + dir;
            if (!fs.existsSync(path)) fs.mkdirSync(path);
        });

        fs.copyFileSync('./ai.ai', './' + file + '/' + file + '.ai');
        fs.copyFileSync('./word.docx', './' + file + '/' + file + '.docx');

    });
});