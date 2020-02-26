require('dotenv/config')
const AWS = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const s3Config = new AWS.S3({
  accessKeyId: process.env.AWS_AccessKey,
  secretAccessKey: process.env.AWS_SecretKey,
  s3BucketEndpoint: true,
  endpoint: process.env.AWS_BucketEndpoint
})

const multerS3Config = multerS3({
  s3: s3Config,
  bucket: process.env.AWS_Bucket,
  acl: 'public-read',
  metadata: (req, file, cb) => {
    console.log(file.originalname)
    cb(null, { fieldName: file.fieldname })
  },
  key: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname.replace(/\s/g, '-'))
  }
})

const upload = multer({
  storage: multerS3Config
})

exports.upload = upload
