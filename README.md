*Before starting with the project, please do the following steps:*

## 1. Create a pair of self-signed certificate and key

Enter `certsFiles` folder and run:

`sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt`

After you run the above command, answer the following questions:

  ```
  Country Name (2 letter code) [AU]: US
  Email Address []: Your email
  etc
  ```

If all went well, you should see two new files in the certsFiles directory, i.e. selfsigned.key and selfsigned.crt.

## 2. Install dependencies

`npm install`

## 3. Start your local server

`npm start`

Visit https://localhost:5000 and you should see `Hello World`. You might edit `index.js` to change the port number.

You may see some SSL warning. That’s because the certificate isn’t issued by any verified organization. What you want to do is, add the crt as an exception to your browser.

## 4. Update loader.js

`public` is the pre-defined root directory from which to serve static assets. The URL of this repo's `loader.js` is `https://localhost:5000/v1/loader.js`.
