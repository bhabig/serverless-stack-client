'use-strict';
export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-api-prod-serverlessdeploymentbucket-wxdp3xp1here"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://l9edixk064.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_AqIrNp3TU",
      APP_CLIENT_ID: "5n3lpcn7q07mrphf3fp1bfpnrd",
      IDENTITY_POOL_ID: "us-east-1:fb826b1e-efb7-4352-93eb-e73f661c8ae6"
    }
  };