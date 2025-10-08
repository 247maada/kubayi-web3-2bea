4. Add a file: `/api/generate-download.js`
```js
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  signatureVersion: 'v4'
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { filename, email } = req.body;
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: `protected/${filename}`,
    Expires: 60 * 60 * 24 // 24 hours
  };
  const url = await s3.getSignedUrlPromise('getObject', params);
  res.status(200).json({ url });
}
