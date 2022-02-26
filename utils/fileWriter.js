const fs = require("fs");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/profile.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/profile.html', fileContent, err => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};

module.exports = { writeFile, copyFile };
