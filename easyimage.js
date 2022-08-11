const { thumbnail } = require("easyimage");
const path = require('path')
const imagesName = require('./imagesName.json')
const insertFlagInFileName = require('./insertFlagInFileName')

async function resize() {
    const basePath = path.join(__dirname, "tmp")

    console.log(imagesName)

    for (var i in imagesName) {
        console.log(i)

        const imageName = imagesName[i]
        console.log("IMAGE NAME: ", imageName)

        const pathImage = path.join(basePath, "images", imageName)

        const pathResize = path.join(basePath, "resize", insertFlagInFileName(imageName, 'small'))

        console.log(pathImage)

        await thumbnail({
            src: pathImage,
            width: 250,
            height: 250,
            dst: pathResize,
            quality: 30
        })
    }
}

resize()