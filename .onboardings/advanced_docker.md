# Advanced Docker

Learn how to use and build optimized Docker images and containers.

## 1. Image layers

Read the article about image layers to understand better how images are composed.

https://blogs.cisco.com/developer/container-image-layers-1

## 2. Faster or slower: the basics of build caching

Take advantage of cache algorithms to speed up the build process.

https://pythonspeed.com/articles/docker-caching-model

## 3. Multi-stage builds

Keep the layers as small as possible and make sure that each layer has the artifacts it needs from the previous layer and nothing else with multi-staged builds.

- [ ] [Use multi-stage build – Docker docs](https://docs.docker.com/develop/develop-images/multistage-build/)
- [ ] [Video by Pelado Nerd](https://www.youtube.com/watch?v=62r32R75iZs)
- [ ] [Play with Katakoda](https://www.katacoda.com/courses/docker/multi-stage-builds)

## 4. Docker registries

Explore and analyze the pricing of the different registry options.

- [ ] AWS ECR
- [ ] Docker Hub
- [ ] Github Container Registry

Think about when you would use each one.

## 5. Docker compose: networking
Let's learn about how to interconnect multiple containers on a customized network configuration.
 - [ ] Follow [this link](https://docs.docker.com/compose/networking/) to learn how to do so.

## 6. Best practices

Follow the best practices and methods for building efficient images recommended in the Docker docs.

https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
