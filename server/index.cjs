const express = require("express");
const {resolve} = require("path");
const fs = require('fs');
const readline = require('readline');
const app = express();
const multer  = require('multer')

var storage = multer.diskStorage(
    {
        destination: './loader',
        filename: async (_, file, cb ) => {
            let promo;
            const fileStream = fs.createReadStream(resolve('../public/promo.txt'));
            const rl = readline.createInterface({
                input: fileStream,
                crlfDelay: Infinity
            });
        
            for await (const line of rl) {
                if (line[0] != '-') {
                    promo = line;
                    break;
                }
            }

            cb( null, promo+'.'+file.originalname.split('.').pop());
        }
    }
);

const upload = multer({ storage: storage } )

app.use(express.json());
app.use(express.static(__dirname + "loader"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/api/uploadfile", upload.single('promo'), async (req, res, next) => {
    let promo;
    const fileStream = fs.createReadStream(resolve('../public/promo.txt'));
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        if (line[0] != '-') {
            promo = line;
            break;
        }
    }

    fs.readFile(resolve('../public/promo.txt'), 'utf8', function (_, data) {
        var result = data.replace(promo, '-' + promo);
        fs.writeFile(resolve('../public/promo.txt'), result, 'utf8', function () {});
    });

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ promo }));
});

app.listen(3000, () => console.log("Listening on port 3000"));