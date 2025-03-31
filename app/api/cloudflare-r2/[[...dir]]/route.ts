import { NextResponse, NextRequest } from "next/server";

import S3 from "aws-sdk/clients/s3.js";

const s3 = new S3({
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.CLOUDFLARE_R2_ACCESS_KEY_SECRET,
  signatureVersion: "v4",
});

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ dir: string }> }
) {
  const { dir = [] } = await params;
  return NextResponse.json(
    await s3
      .listObjects({
        Bucket: "chiikawa",
        Prefix: `${(dir as Array<string>).join("/")}/`,
        Delimiter: "/", // 用伪目录分隔符
      })
      .promise()
  );
}

// console.log(await s3.listBuckets().promise());
//=> {
//=>   Buckets: [
//=>     { Name: 'user-uploads', CreationDate: 2022-04-13T21:23:47.102Z },
//=>     { Name: 'my-bucket-name', CreationDate: 2022-05-07T02:46:49.218Z }
//=>   ],
//=>   Owner: {
//=>     DisplayName: '...',
//=>     ID: '...'
//=>   }
//=> }

// console.log(await s3.listObjects({ Bucket: "chiikawa" }).promise())
//=> {
//=>   IsTruncated: false,
//=>   Name: 'my-bucket-name',
//=>   CommonPrefixes: [],
//=>   MaxKeys: 1000,
//=>   Contents: [
//=>     {
//=>       Key: 'cat.png',
//=>       LastModified: 2022-05-07T02:50:45.616Z,
//=>       ETag: '"c4da329b38467509049e615c11b0c48a"',
//=>       ChecksumAlgorithm: [],
//=>       Size: 751832,
//=>       Owner: [Object]
//=>     },
//=>     {
//=>       Key: 'todos.txt',
//=>       LastModified: 2022-05-07T21:37:17.150Z,
//=>       ETag: '"29d911f495d1ba7cb3a4d7d15e63236a"',
//=>       ChecksumAlgorithm: [],
//=>       Size: 279,
//=>       Owner: [Object]
//=>     }
//=>   ]
//=> }
