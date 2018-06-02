export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "ap-southeast-1",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "ap-southeast-1",
      URL: "https://2gaiyx2c65.execute-api.ap-southeast-1.amazonaws.com/dev/"
    },
    cognito: {
      REGION: "ap-southeast-1",
      USER_POOL_ID: "ap-southeast-1_6ZVBkdRK4",
      APP_CLIENT_ID: "56vre8vvtldlnr9p7apegso2jk",
      IDENTITY_POOL_ID: "ap-southeast-1:523e2b42-cd81-418a-8b6c-21530e64d4e8"
    }
  };