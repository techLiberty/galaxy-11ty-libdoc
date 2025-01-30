// require('dotenv').config();
import 'dotenv/config';
export default function () {
    return {
        environment: process.env.MY_ENVIRONMENT || "development",
        imgsrv: process.env.IMAGE_SERVER_ENDPOINT
    };
};
  