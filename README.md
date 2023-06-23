# post-af

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Docker][docker-shield]][docker-url]
[![Flask][flask-shield]][flask-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/virusimmortal00/post-af">
    <img src="app/static/book-skull-solid.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">post-af</h3>

  <p align="center">
  AppsFlyer S2S API calls magically easy.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Docker image with built-in web server/app/ui for sending API messages to AppsFlyer S2S endpoints.  All of the more prickly parts of manually generating these API calls (for test purposes) have been purposefully black boxed for your POSTing pleasure.  

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

https://github.com/tiangolo/uwsgi-nginx-flask-docker
https://github.com/pallets/flask/
https://github.com/helloflask/bootstrap-flask
https://github.com/wtforms/flask-wtf/
https://github.com/wiltonsr/Flask-Toastr/tree/master
https://github.com/python-jsonschema/jsonschema/tree/main

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This project was designed for use as an image/container, deployed most likely via Docker - although you could certainly use any suitable alternative.  For the sake of simplicity, the directions below are for Docker.

You can get Docker desktop here:
https://docs.docker.com/get-docker/

or, using Brew (or your preferred package managed) via terminal:

  ```sh
  brew install docker
  ```

### Prerequisites

You're going to need a general working knowledge of how the AppsFlyer S2S API works, an HQ active account, and at least one app configured (you'll need your API dev key and app ID)

### Installation

1. Once Docker is installed, open your terminal and pull the image from Docker hub:

  ```sh
    docker pull virusimmortal00/post-af:v1
  ```

2. Launch the container 'post-af' from the image on port 80
   ```sh
   docker run -d --name post-af -p 80:80 virusimmortal00/post-af:v1
   ```
3. Open your browser and enter 'localhost' as the destination

4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Bobby Sayers - rsayers88@gmail.com

Project Link: https://github.com/virusimmortal00/post-af

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: hhttps://www.linkedin.com/in/bobby-sayers/

[product-screenshot]: images/post-af_screen1.png

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com

[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://hub.docker.com/r/virusimmortal00/post-af
[Flask]: https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white
[flask-url]: https://github.com/pallets/flask/

