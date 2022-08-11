function insertFlagInFileName(filename, flag) {
    const splitFileName = filename.split(".");
    const extensionFile = splitFileName.at(-1);
    splitFileName.splice(splitFileName.length - 1, 1);

    const newFilename = splitFileName.join();
    return `${newFilename}-${flag}.${extensionFile}`;
}

module.exports = insertFlagInFileName