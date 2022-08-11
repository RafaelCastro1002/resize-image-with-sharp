const sharp = require('sharp');
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

        sharp(pathImage).resize({ width: 500 }).toFile(pathResize)
    }
}

resize()