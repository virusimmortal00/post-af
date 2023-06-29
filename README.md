# post-af
<a name="readme-top"></a>

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

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
        <li><a href="#demo-environment">Demo Environemnt</a></li>
        <li><a href="#docker-instructions">Docker Instructions</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
      <ul>
        <li><a href="#json-body-validation">JSON Body Validation</a></li>
        <li><a href="#inserting-templates">Inserting Templates</a></li>
        <li><a href="#post-history">POST History</a></li>
      </ul>
    <li><a href="#disclaimer">Disclaimer</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[product-screenshot]: images/main_screen.png
![Product Name Screen Shot][product-screenshot]

post-af is a Python/Flask web app packaged within a Docker image alongside NGINX and uWSGI, allowing for a simple 'turn-key' self-hosted testing tool for the AppsFlyer S2S API.  For those unable or uninterested in running your own container, there's also a live <a href="#demo-environment">demo environemnt</a>.  

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
https://github.com/jquery-validation/jquery-validation <br />
back-end: <br />
https://github.com/tiangolo/uwsgi-nginx-flask-docker <br />
https://www.nginx.com/ <br />
https://uwsgi-docs.readthedocs.io/en/latest/ <br /> 
etc: <br />
https://github.com/FortAwesome/Font-Awesome <br />


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Demo Environment

This project was designed for use mainly as a grab+go image/container, deployed via Docker.  For some, the idea of injecting Docker into their lives might be a bit much - so, for the sake of convenience, I'm also currently hosting a demo version of the app at:

https://postaf.sayers.io/

Although there are limitations within the demo in regards to post history (as the database wasn't designed for multiple users, and so it would be unwise for everyone's data to be visible to anyone), it's still fully functional for sending API posts.

Perhaps in the future there will be no need to locally host your own container, but for now, that's the best route.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Docker Instructions

Docker can be deployed either via Docker Desktop [easiest] or through a standalone Docker Engine instance (if you have this, you likely don't need these directions).

You can get Docker desktop here:
https://docs.docker.com/get-docker/

or install Docker using your favorite package manager via terminal.  

For this example, we'll use Homebrew for macOS:

  ```sh
  brew install docker
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

Beyond Docker - you're going to need a general working knowledge of how the AppsFlyer S2S API works (as these docs are not provided here), an active account at AppsFlyer HQ, and at least one app configured (as you'll need your API dev key and app ID).  

Luckily, you won't need to know much about Docker, once the container is running, the system is plug and play from your local browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

_Note: The below steps use the terminal for setup, rather than the Docker Desktop UI.  Although I feel the terminal approach is a little more foolproof, you can certainly use the UI instead to the same end result - just map port 80 to 80 and you're all set config-wise._

1. After Docker is installed, open your terminal and pull the image from Docker hub:

```sh
  docker pull virusimmortal00/post-af:v1
```

2. Run the container 'post-af' on port 80 (default HTTP) from the image you just pulled:

```sh
   docker run -d --name post-af -p 80:80 virusimmortal00/post-af:v1
```

3. Open your browser and enter 'localhost' as the destination:

<div align="center">
  <img src="images/localhost_screen.png" alt="localhost" width="50%">
</div>

[product-screenshot]: images/main_screen.png
[template-screenshot]: images/templates.png
[dd-screenshot]: images/dockerdesktop.png
[history-screenshot]: images/history.png


4. From here, you're all set to begin posting API messages - just enter your dev key and app id, then either paste in your own JSON message body or use one of the provided template buttons.  As you post your calls, you'll see the response onscreen through both a short notification and also on the right hand side in the <a href="#post-history">post history area</a>.

5. The next section below covers the finer details around the apps functionality.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### JSON Body Validation

For those already intimately familiar with the AppsFlyer S2S endpoint, you'll know that it can be fairly _forgiving_ when it comes to accepting data... therefore - I've taken steps to validate your json body (based on my own re-created schema) before throwing it over to the S2S endpoint (ultimately saving you time).

If you run into any issues where you have legitimate data that's being rejected, please let me know.

I hope to continue adding better and smarter validation rules here as time goes on... we'll see!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Inserting Templates

Template installs/events for both iOS and Android are available via buttons at the bottom of the screen:

<div align="center">
  <img src="images/templates.png" alt="templates" width="50%">
</div>

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## POST History

<div align="center">
  <img src="images/history.png" alt="templates" width="50%">
</div>

On the right side of the app you'll see your POST history, pulled from a local sqlite db created when the container is first created.  As long as you don't delete this container, your history will be saved and will continue to be accesible.

I've toyed with the idea of adding an option to save out your history to local file - but haven't quite become convinced its worth it - so for now, your history lives and dies with your container.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Disclaimer

Although I do work at AppsFlyer, this app has not been commissioned, endorsed, or approved by AF in any way - it was a labor of love born out of my own downtime.  Maybe one day that will change, but for now - disclaimer has been disclaimed :)

<!-- CONTACT -->
## Contact

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)][gmail-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: hhttps://www.linkedin.com/in/bobby-sayers/


[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white


[docker-url]: https://hub.docker.com/r/virusimmortal00/post-af
[flask-url]: https://github.com/pallets/flask/
[gmail-url]: http://mailto:rsayers88@gmail.com
