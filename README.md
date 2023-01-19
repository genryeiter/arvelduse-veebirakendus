<div id="top"></div>
<br>


[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Arvelduse Veebirakendus - Tallinna Ülikooli Projekt

Built using the MERN stack (MongoDB, Express, React and NodeJS).

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This is a billing/invoicing school project build using the MERN stack, can be used in real world small enterprises for
any type of business need. With this application, you can send simple invoices, receipts, estimates, bills and etc.

<p align="right">(<a href="#top">back to top</a>)</p>

## App Features

- Emailing receipts, estimates, quotes and invoices.
- Auth system using jsonwebtoken (jwt) with Google OAuth2.
- Create/Send/Download PDF invoices, estimates, quotations, and receipts.
- Record payment functional with automatic status update.
- Establishing the deadline for receipts, estimates, quotes, invoices.
- Each invoice has a section outlining the payment history, including date, method, and other details.
- Tracking the payment of invoice parties.
- The admin dashboard neatly displays all invoice statistics, including received payments, total amount, pending amount, recent
  payments, total paid invoice amount, and total invoices, overdue invoices.
- Dashboard admin has resizable chart tab with functional to export chart statistics to svg, png, csv.
- Business profile settings (saves business logo as well in cloud storage)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

The section below shows a list of used technologies, libraries and IDE

- [React JS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-router-dom](https://reactrouter.com/web/guides/quick-start)
- [Axios](https://github.com/axios/axios)
- [ReactMUI](https://material-ui.com/)
- [React Snackbar](https://www.npmjs.com/package/react-snackbar)
- [Apex Charts](https://apexcharts.com/react-chart-demos/)
- [React-google-login](https://www.npmjs.com/package/react-google-login)
- [Express](https://chat.openai.com/chat#:~:text=https%3A//expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Nodemailer](https://nodemailer.com/about/)
- [html-pdf](https://www.npmjs.com/package/html-pdf)
- [Jest](https://jestjs.io/ru/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

### Installation

1. Clone the repo
```
git clone https://github.com/genryeiter/arvelduse-veebirakendus
```

2. Install YARN packages
```
npm install
```

3. Start the local frontend
   In the first terminal

cd client and create a .env file in the root of your client directory.
Supply the following credentials

```
REACT_APP_GOOGLE_CLIENT_ID = 
REACT_APP_API = http://localhost:5000
REACT_APP_URL = http://localhost:3000
```

To get your Google ClientID for authentication, go to the Credential Page (if you are new, then [create a new project first](https://console.cloud.google.com/projectcreate) and follow the following steps;
- Click Create credentials > OAuth client ID.
- Select the Web application type.
- Name your OAuth client and click Create
- Remember to provide your domain and redirect URL so that Google identifies the origin domain to which it can display the consent screen. In development, that is going to be `http://localhost:3000` and `http://localhost:3000/login`
- Copy the Client ID and assign it to the variable `REACT_APP_GOOGLE_CLIENT_ID` in your .env file

```
cd client
npm install (to install client-side dependencies)
npm start (to start the client)
```
4. Start the local backend
   In the second terminal
- cd server and create a .env file in the root of your server directory.
- Supply the following credentials

```
DB_URL =         // <-- your mongodb atlas connection url 
PORT = 5000      // <-- default node.js port
SECRET =         // <-- is used token sign  
SMTP_HOST =      // <-- is used for nodemailer
SMTP_PORT =      // <-- is used for nodemailer
SMTP_USER =      // <-- is used for nodemailer
SMTP_PASS =      // <-- is used for nodemailer
```

5. Please follow [This tutorial](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database) to create your mongoDB connection url, which you'll use as your DB_URL
```
$ cd server
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```

6. And you are ready to go!

<p align="right">(<a href="#top">back to top</a>)</p>

## Wireframes

Project has initial low-fi wireframes of the application. You can access them by clicking on the [following link](https://github.com/genryeiter/arvelduse-veebirakendus/tree/main/wireframes).

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Author and contact

German Eiter - genryeiter@gmail.com

Project Link: [https://github.com/genryeiter/arvelduse-veebirakendus](https://github.com/genryeiter/arvelduse-veebirakendus)

<p align="right">(<a href="#top">back to top</a>)</p>


[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge

[license-url]: https://github.com/genryeiter/arvelduse-veebirakendus/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/german-eiter/
