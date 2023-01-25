# Docker

Learn basic concepts about Docker and docker-compose. This board was designed to take around 8 hours.

## 1. Containerization

Learn about containerization in general

Video: [Containerization Explained](https://youtu.be/0qotVMX-J5s)

## 2. Docker

Learn what is Docker and how it works with these two videos:

- [ ] [Docker overview](https://docs.docker.com/get-started/overview/#:~:text=Docker%20is%20an%20open%20platform,ways%20you%20manage%20your%20applications.)
- [ ] [Docker Tutorial 1](https://www.youtube.com/watch?v=jPdIRX6q4jA)


## 3. Install Docker

Depending on your operating system choose the right link:

* [Mac](https://docs.docker.com/docker-for-mac/install/)
* [Linux](https://runnable.com/docker/install-docker-on-linux)

Check your installation with `docker version` command

[RTFM](https://docs.docker.com/engine/reference/commandline/version/)

## 4. Image and containers

Learn the basic concepts about images and containers, what are the main differences between both.

- Read [Docker Image vs Container](https://stackify.com/docker-image-vs-container-everything-you-need-to-know/)

## 5. Run a container

Run a Busybox container and get a taste of the docker run command.

- Follow the section "Hello World" from [this tutorial](https://docker-curriculum.com/#hello-world)

## 6. Manage docker resources

Run and analyze the output of the following commands:

- [ ] `docker image ls`
- [ ] `docker ps`
- [ ] `docker ps -a`
- [ ] `docker system df`

Take a look at the [Command Line docs](https://docs.docker.com/engine/reference/commandline/docker/). You will need it in the future!

## 7. Exercise 1:  Clean up your system

Clean all the images, volumes, and containers created and listed with the previous commands. Leave your local environment empty, if possible.

Find the command(s) in the official docs or take it from the [SRE wiki](https://github.com/moove-it/sre/wiki)

## 8. Volumes

See how data is persisted and shared with Docker using volumes.

Learn how to create:
-  [ ] Host volumes
-  [ ]  Anonymous volumes
-  [ ]  Named volumes

Video: [Docker Volumes explained](https://youtu.be/p2PH_YPCsis)

## 9. Exercise 2: Run a web app

We will use [NGINX](https://www.nginx.com/resources/glossary/nginx/) as web server.

-  [ ]  **Run the container web server**
Execute `docker run -d nginx` and make sure the container is running. Then, stop the container and remove it.

-  [ ]  **Open a port**
Run the same container but this time "open" port 80 to see the webpage in the browser. Then, stop the container and remove it.

-  [ ]  **Share local files with container**
Create a file `index.html` with some HTML content and run the container again with the port 80 "opened", but this time mount the file `index.html` in the default NGINX root directory. Open the browser and connect to localhost to see your page running. Modify the file in your local directory, refresh the browser, and see the changes. Finally, stop the container and remove it.

Note: the arg `--rm` automatically removes the container when it stops.

## 10. Build an image

Understand how images are built.

Video: [Creating your first Dockerfile, image and container](https://www.youtube.com/watch?v=hnxI-K10auY)

## 11. Exercise 3: Build your own image

-  [ ]  **Create the Dockerfile**
Create a Dockerfile based on the same nginx image used before, add your `index.html` file but this time using an instruction in the Dockerfile instead of a volume.

-  [ ]  **Create the image**
Build your image using the Dockerfile.

-  [ ]  **Run a container**
Run a container from that image and check your website using the browser as you did before.


## 12. Exercise 4: enable persistence of data

Run this sample guest-book and see it in http://localhost:8888

`docker run -p 8888:80 pilasguru/simple-guestbook:latest`

Leave a comment in the guest-book, then stop the container, remove it and run it again. Verify that your comment in the guest-book is lost.

**Exercise**: Give persistence to the guest-book comments using one volume. The path where the comments are stored inside the container is `/app/Guestbook`


## 13. docker-compose

Learn how docker-compose can help the management of several docker services that work together and how to use it via the command-line interface.

- [Docker Compose Tutorial](https://www.youtube.com/watch?v=MVIcrmeV_6c)



## 14. Install docker-compose

Install and check your installation of docker-compose:

[Install Docker Compose](https://docs.docker.com/compose/install/)

## 15. Exercise 5:  Node REST Template

Follow the instructions to run the Node REST template with docker and analyze its docker-compose files and its file structure.

https://github.com/moove-it/node-rest-template/

## 16. SRE documentation

Take a look at the SRE docs, read the sections that you find more interesting. Make sure you understand what the SRE team does and their toolset.

* [SRE wiki](https://github.com/moove-it/sre/wiki)


## 17. Additional Resources

This card contains a list of additional resources that you might find useful, to follow
your journey in the future.

* [Docker Docs](https://docs.docker.com/)
* [Docker Newsletter](https://www.docker.com/newsletter-subscription)
