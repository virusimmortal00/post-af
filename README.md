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

[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)][docker-url]
[![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)][flask-url]
[![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)][Bootstrap-url]
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/virusimmortal00/post-af">
  <kbd>
    <img src="app/static/book-skull-solid.svg" alt="Logo" width="80" height="80">
  </kbd>
    
  </a>

<h3 align="center">post-af</h3>

  <p align="center">
  All-in-one test tool for easily generating and sending AppsFlyer S2S API messages.
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

![Product Name Screen Shot][product-screenshot]

Post-af is a Python/Flask web app packaged within a Docker image alongside NGINX and uWSGI, allowing for a simple 'turn-key' self-hosted testing tool [within its own web server] for the AppsFlyer S2S API.  

All pre-requisites and configurations needed in order for this tool to get up and running are already set and included within the image, allowing for fast and straight forward deployments.

Although the source code has been provided within this repo, most users will only need the pre-built Docker image, hosted on Docker Hub:

https://hub.docker.com/r/virusimmortal00/post-af

If you're unfamiliar with Docker and/or the link above, fear not, as directions are provided below.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
flask:<br />
https://github.com/pallets/flask/ <br />
https://github.com/helloflask/bootstrap-flask <br />
https://github.com/wtforms/flask-wtf/ <br />
https://github.com/wiltonsr/Flask-Toastr/tree/master <br />
js: <br />
https://github.com/python-jsonschema/jsonschema/tree/main <br />
https://github.com/moment/moment <br />
https://github.com/gasparesganga/jquery-loading-overlay <br />
https://github.com/wenzhixin/bootstrap-table <br />
back-end: <br />
https://github.com/tiangolo/uwsgi-nginx-flask-docker <br />
https://www.nginx.com/ <br />
https://uwsgi-docs.readthedocs.io/en/latest/ <br /> 
etc: <br />
https://github.com/FortAwesome/Font-Awesome <br />


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This project was designed for use mainly as a grab+go image/container, deployed via Docker.

Docker can be deployed either via Docker Desktop [easiest] or through a standalone Docker Engine instance (if you have this, you likely don't need these directions).

You can get Docker desktop here:
https://docs.docker.com/get-docker/

or install Docker using your favorite package manager via terminal.  For this example, we'll use Homebrew for macOS:

  ```sh
  brew install docker
  ```

### Prerequisites

Beyond Docker - you're going to need a general working knowledge of how the AppsFlyer S2S API works (as these docs are not provided here), an active account at AppsFlyer HQ, and at least one app configured (as you'll need your API dev key and app ID).  Luckily, you won't need to know much about Docker, once the container is running the system is plug and play from your local browser.

### Installation

1. After Docker is installed, open your terminal and pull the image from Docker hub:

```sh
  docker pull virusimmortal00/post-af:v1
```

Alternatively, if using Docker Desktop, you can configure the container through the UI:

![Docker Desktop Screen Shot][dd-screenshot]

2. Run the container 'post-af' on port 80 (default HTTP) from the image you just pulled:

```sh
   docker run -d --name post-af -p 80:80 virusimmortal00/post-af:v1
```

3. Open your browser and enter 'localhost' as the destination:

![localhost screenshot][localhost-screenshot]

4. From here, things should be self explanatory - enter your dev key and app id, then either paste in your own JSON message body or use one of the provided template buttons to get started.

5. Profit.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### JSON Body Validation

### Inserting Templates
Template installs/events for both iOS and Android are available via buttons at the bottom of the screen:

![Template Screen Shot][template-screenshot]

Timestamps are generated dynamically on click in order to keep the data relevant, as installs/events have a limited window for acceptable submission.  

For installs, the current time in UTC is used for both timestamp and inst_date:
```json
{
  "timestamp": "2023-06-27T16:31:21.857",
  "inst_date": "2023-06-27T16:31:21.857",
}
```
For events, the current time in UTC is used for the event, with the install timestamp set -15 hours before, to simulate a realistic install to event timeframe:
```json
{
  "timestamp": "2023-06-27T16:31:21.857",
  "inst_date": "2023-06-27T01:31:21.858",
}
```
Additionally, just for the sake of data traceability, the IP provided in the template comes from the IP of your workstation running the tool.

All templates, once inserted, can be manually configured before posting - so feel free to adjust these as needed.

## POST History

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)][gmail-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


Project Link: https://github.com/virusimmortal00/post-af

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: hhttps://www.linkedin.com/in/bobby-sayers/

[product-screenshot]: images/main_screen.png
[template-screenshot]: images/templates.png
[localhost-screenshot]: images/localhost_screen.png
[dd-screenshot]: images/dockerdesktop.png

[Bootstrap-url]: https://getbootstrap.com

[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com


[docker-url]: https://hub.docker.com/r/virusimmortal00/post-af
[flask-url]: https://github.com/pallets/flask/
[gmail-url]: http://mailto:rsayers88@gmail.com
