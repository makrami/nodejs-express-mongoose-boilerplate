/* TODO: refactor uploader */

import moment from 'moment';
import httpException from '../../utils/http-exception.js';
const storagePath = `${__dirname}/../../public/uploads`;

// upload any file
export async function uploader({ folderType, file, saveToDb = false }) {
  const checkFileFormat = (fileFormat, formats) => formats.includes(fileFormat);

  // Path file upload
  const monthOfYear = moment().format('YYYY-MM');

  const fileType = file.mimetype.split('/')[0];
  const fileFormat = file.mimetype.split('/')[1];

  let fileInfo = { meta: { name: file.name, size: file.size, encoding: file.encoding, mimetype: file.mimetype } };

  // variables for check file formats
  let formats;
  let checkFileFormatResult;

  switch (fileType) {
    case 'image':
      formats = ['jpeg', 'jpg', 'png'];
      checkFileFormatResult = checkFileFormat(fileFormat, formats);
      fileInfo = checkFileFormatResult
        ? { ...fileInfo, path: `${folderType}/${monthOfYear}/images/${file.md5}.${fileFormat}` }
        : false;
      break;

    case 'video':
      formats = ['mp4', 'x-msvideo'];
      checkFileFormatResult = checkFileFormat(fileFormat, formats);
      fileInfo = { ...fileInfo, path: `${folderType}/${monthOfYear}/videos/${file.md5}.${fileFormat}` };
      break;

    case 'audio':
      formats = ['mpeg', 'mp3'];
      checkFileFormatResult = checkFileFormat(fileFormat, formats);
      fileInfo = { ...fileInfo, path: `${folderType}/${monthOfYear}/audios/${file.md5}.${fileFormat}` };
      break;

    case 'application':
      formats = ['msword', 'pdf', 'plain'];
      checkFileFormatResult = checkFileFormat(fileFormat, formats);
      fileInfo = { ...fileInfo, path: `${folderType}/${monthOfYear}/documents/${file.md5}.${fileFormat}` };
      break;

    default:
      return false;
  }

  // return false for wrong type
  if (!fileInfo) return false;

  try {
    await file.mv(`${storagePath}/${fileInfo.path}`);
  } catch (error) {
    httpException({ res: null, error });
    return false;
  }

  return fileInfo;
}

export async function imageUploader(folderType, file) {
  const formats = ['jpeg', 'jpg', 'png'];
  const monthOfYear = moment().format('YYYY-MM');
  const fileFormat = file.mimetype.split('/')[1];
  let fileInfo = { meta: { name: file.name, size: file.size, encoding: file.encoding, mimetype: file.mimetype } };

  fileInfo = formats.includes(fileFormat)
    ? { ...fileInfo, path: `${folderType}/${monthOfYear}/images/${file.md5}.${fileFormat}` }
    : false;

  // return false for wrong type
  if (!fileInfo) return false;

  try {
    await file.mv(`${storagePath}/${fileInfo.path}`);
  } catch (error) {
    console.log(error);
    httpException({ res: null, error });
    return false;
  }

  return fileInfo;
}

export async function videoUploader(folderType, file) {
  const formats = ['mp4', 'x-msvideo'];
  const monthOfYear = moment().format('YYYY-MM');
  const fileFormat = file.mimetype.split('/')[1];
  let fileInfo = { meta: { name: file.name, size: file.size, encoding: file.encoding, mimetype: file.mimetype } };

  fileInfo = formats.includes(fileFormat)
    ? { ...fileInfo, path: `${folderType}/${monthOfYear}/videos/${file.md5}.${fileFormat}` }
    : false;

  // return false for wrong type
  if (!fileInfo) return false;

  try {
    await file.mv(`${storagePath}/${fileInfo.path}`);
  } catch (error) {
    httpException({ res: null, error });
    return false;
  }

  return fileInfo;
}

export async function audioUploader(folderType, file) {
  const formats = ['mpeg', 'mp3'];
  const monthOfYear = moment().format('YYYY-MM');
  const fileFormat = file.mimetype.split('/')[1];
  let fileInfo = { meta: { name: file.name, size: file.size, encoding: file.encoding, mimetype: file.mimetype } };

  fileInfo = formats.includes(fileFormat)
    ? { ...fileInfo, path: `${folderType}/${monthOfYear}/audios/${file.md5}.${fileFormat}` }
    : false;

  // return false for wrong type
  if (!fileInfo) return false;

  try {
    await file.mv(`${storagePath}/${fileInfo.path}`);
  } catch (error) {
    httpException({ res: null, error });
    return false;
  }

  return fileInfo;
}

export async function documentUploader(folderType, file) {
  const formats = ['msword', 'pdf', 'plain'];
  const monthOfYear = moment().format('YYYY-MM');
  const fileFormat = file.mimetype.split('/')[1];
  let fileInfo = { meta: { name: file.name, size: file.size, encoding: file.encoding, mimetype: file.mimetype } };

  fileInfo = formats.includes(fileFormat)
    ? { ...fileInfo, path: `${folderType}/${monthOfYear}/documents/${file.md5}.${fileFormat}` }
    : false;

  // return false for wrong type
  if (!fileInfo) return false;

  try {
    await file.mv(`${storagePath}/${fileInfo.path}`);
  } catch (error) {
    httpException({ res: null, error });
    return false;
  }

  return fileInfo;
}

module.exports = { uploader, imageUploader, videoUploader, audioUploader, documentUploader };
