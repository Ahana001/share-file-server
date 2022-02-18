const route = require('express').Router();
const File = require('../model/FileModel');

route.get('/:uuid', async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        // Link expired
        if (!file) {
            return res.render('dowload', { error: 'Link has been expired.' });
        }
        return res.render('dowload', { uuid: file.uuid, fileName: file.filename, fileSize: file.size, downloadLink: `${process.env.APP_BASE_URL}file/dowload/${file.uuid}` });
    }
    catch (err) {
        return res.render('dowload', { error: 'Something went wrong.' });
    }
});

module.exports = route;