<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Merssith/MyCourse-Back">
    <img src="utils/images/logo.png" alt="Logo" width="450">
  </a>

<h3 align="center">MY COURSE - BACKEND</h3>

  <p align="center">
    <br />
    <a href="https://github.com/Merssith/MyCourse-Back"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/Merssith/MyCourse-Front"><strong>Frontend Repository</strong></a>
    <br />
    <a href="https://github.com/Merssith/MyCourse-Back/issues">Report bug</a>
    ·
    <a href="https://github.com/Merssith/MyCourse-Back/issues">Request feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-proyect">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Proyect

<!-- <p align="center"><img src="utils/images/project.png" alt="Proyect" width="100%"></p> -->

This web application will allow the end user to have an extensive catalog of courses to which to enroll. As a content creator, you will be able to create courses, modify and upload new content, and give access to end users.<br/>
The project is currently in the development phase. I'll show you more when the front end is more advanced ;)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- NodeJS
- Nodemon
- Express
- Sequelize
- Postgres
- Axios
- Voleyball
- Bcrypt
- JWT
- Handlebars
- Nodemailer
- FS
- DotEnv
- Cloudinary
- DataDog

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Currently the database is entirely local. Therefore, you will need to follow these instructions to build the backend project.

### Prerequisites

You must meet the following pre-requisites to be able to use this project

- DB: Create the DB using psql
  ```sh
  createdb mycourse
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Merssith/MyCourse-Back.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Seed database
   ```sh
   npm run seed
   ```
4. Generate the .env file, using as a base the example found in this repository
5. Run the server
   ```sh
   npm run server
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- API  -->

## API Documentation

<p align="center"><img src="https://cdn.shopify.com/s/files/1/0057/5668/2355/files/Postman-logo-orange-2021_1155x.png?v=1637252529" alt="Logo" width="40%"></p>

<!-- Detailed documentation of all API methods can be found HERE. You can also download the complete Postman collection. -->

Still in development phase, no documentation available. Check back soon for updates!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Features for all users
  - [ ] Sign up
  - [ ] Login/Logout
  - [ ] Session persistence
  - [ ] My User profile
  - [ ] Content creators profile
  - [ ] Search Content Creators
  - [ ] Search Courses
  - [ ] Course details / Lessons
  - [ ] My Progress
- [ ] Content Creators features
  - [ ] Delete users
  - [ ] Access
  - [ ] Upload or generate new content: Courses / Lessons
- [ ] Additional features
  - [ ] Backend monitoring
  - [ ] Email service


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

<p>Contributions from the Dev community help me learn, be inspired, and create new things! All contributions are welcome!</p>
<p>If you have any suggestions to improve my project, please fork the repository and create a pull request. Or You can open an issue.</p>
<p>Thanks again!</p>

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/MyFeature`)
3. Commit your Changes (`git commit -m 'Add MyFeature'`)
4. Push to the Branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Mercedes Salcedo » [Email](mailto:mercedes.salcedo1989@gmail.com) - [LinkedIn](https://www.linkedin.com/in/mercedessalcedojobs/)

Project Link: [https://github.com/Merssith/MyCourse-Back](https://github.com/Merssith/MyCourse-Back)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/Merssith/MyCourse-Back.svg?style=for-the-badge
[contributors-url]: https://github.com/Merssith/MyCourse-Back/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/Merssith/MyCourse-Back.svg?style=for-the-badge
[issues-url]: https://github.com/Merssith/MyCourse-Back/issues
