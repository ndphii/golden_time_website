# Steps to run this project in your local machine

To run this project in your local machine:

* Step 1: new terminal
  - `cd .\Backend\`
  - Run `npm install` to install the dependencies
  - Run `npm start`  or `npm run server` to serve the app on your local machine.

* Step 2: new terminal
  - `cd .\Frontend\`
  - Run `npm install` to install the dependencies
  - Run `npm start`  or `npm run server` to serve the app on your local machine.

!!!Nếu `npm start ` 2 folder Fontend và Backend xảy ra lỗi có dòng chữ màu xanh lá ở dưới màn hình terminal kiểu: {opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ] } thì hãy truy cập <a href="https://github.com/webpack/webpack/issues/15900#issuecomment-1373595261">HERE</a> và làm theo hướng dẫn,đại loại là thay đổi thuộc tính của "start" và "build" trong 2 file package.json tron 2 folder Fontend và Backend,sau đó `npm start` lại

* Step 3: new terminal
  - `cd .\Server\`
  - Run `npm install` to install the dependencies
  - Run `npm run start` or `npm run server` to serve the app on your local machine.
# setup .env in server folder
!!! Lúc này sẽ báo lỗi vì trong folder server chưa có các thuộc tính trong file .env chưa cài đặt:<br>
PORT = 5000 <br>
NODE_ENV = development<br>
JWT_SECRET = ...<br>
PAYPAL_CLIENT_ID = ...<br>
MONGO_URL =  dòng này nhớ setpassword và tên project, ở <password> và sau mongodb.net/...tên project lấy url ở <br>
CLOUD_NAME = <br>
CLOUD_API_KEY = <br>
CLOUD_API_SECRET = <br>
  - Link cài mongodb :<a href="https://cloud.mongodb.com/">HERE</a>
  - Link cài paypal develop:<a href="https://developer.paypal.com/">HERE</a>
  - Link cài cloudinary :<a href="https://console.cloudinary.com/">HERE</a>

