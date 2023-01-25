# SRE

Become an SRE!


## What is SRE and what do they do?

Read [this](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2086961163/What+is+SRE) article from the SRE docs


## SRE and DevOps

Read [this article](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2086305891/SRE+and+DevOps) about how SRE implements the DevOps culture and then learn the history of the term.


## Tools and accounts

Make sure you have access to our stack.

[Tools and accounts](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2095808522/SRE+Toolset)


## The SRE role at Moove it

The SRE role in a software factory is slightly different from what you find in the literature. Follow [this link](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2040103059/SRE+Studio) to learn more about our work methodology and other important aspects of the role in the company.

## High Availability concept

The most important concept for SRE is Availability. A system that is not available cannot perform its function.

Read about the High Availability concept in [Wikipedia](https://en.wikipedia.org/wiki/High_availability), and then search for more information in Google.

## SSH

Learn the basics of SSH including how SSH works, setting up keys, creating tunnels, etc.

- [ ] Complete the SSH apprenticeship board.


## Docker

Learn basic concepts about Docker and docker-compose.

- [ ] Complete the Docker apprenticeship board.


## Advanced Docker

Learn how to use and build optimized Docker images and containers.

- [ ] Complete the Advanced Docker apprenticeship board.


## SSL Certificates

How does HTTPS work? What is a Certificate Authority and how it can make communication safe?

[Watch the video](https://www.youtube.com/watch?v=T4Df5_cojAs)


## DNS

Understand how DNS works and acquire the skills to configure a DNS for any website or API.

[DNS article in confluence](https://mooveit.atlassian.net/wiki/spaces/SRE/pages/1324285953/DNS)

## Github Actions
 - [ ] Get a quick feel at the Yaml Syntax reading [this guide](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html).
 - [ ] Read about what Github Actions can do, by visiting their [official website](https://github.com/features/actions).
 - [ ] We mainly use Github Actions to create a production build, run tests and deploy to AWS on every push to a specific branch. Take a look at our [SRE repository GH actions](https://github.com/moove-it/sre/tree/master/github-actions/). 
 - [ ] Read this [guide](https://docs.github.com/en/actions/quickstart) about how to quickly create a workflow.

## CI/CD

- [ ] Read the article about [CI/CD](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2086338593/CI+CD)
- [ ] Find two examples of each tool and discuss it with a teammate
- [ ] Read the features and pricing of each tool mentioned in the article
- [ ] Understand the workflows included in the templates: [node-rest-template](https://github.com/moove-it/node-rest-template), [react-spa-template](https://github.com/moove-it/react-spa-template). Do you find any improvement that you think it's worth making?


## Load balancing and CDN

Load balance and static content distribution are two important aspects in the exposure of any application. Follow [this link](https://mooveit.atlassian.net/wiki/spaces/SRE/pages/1444839433/Reverse+Proxy) to learn about how we achieve this using reverse proxies and CDN services.


## AWS

Most of the Studio members are specialized in AWS and we tend to recommend it to our clients.

Follow the AWS apprenticeship to know and understand the most basic concepts of this provider.

- [ ] Complete the AWS apprenticeship board


## Infrastructure as Code (IaC)

- [ ] Watch the video: [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE)
- [ ] Follow the Katacoda tutorial (10 mins): [Deploy nginx with terraform](https://jenciso.github.io/blog/deploy-nginx-container-nginx/)
- [ ] (optional) Follow the official Hashicorp tutorial (36 mins / 8 tutorials): [Terraform / Get started](https://learn.hashicorp.com/collections/terraform/aws-get-started)
- [ ] Watch an introduction to CloudFormation from [this confluence page](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2086666280/Infrastructure+as+Code+CloudFormation)
- [ ] Read about [What is CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) in the official page.
- [ ] Read about [CloudFormation concepts](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html) in the official page.
- [ ] Read about [Getting started with AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/GettingStarted.html) in the official page.


## Exercise: Deploy to ECS with CloudFormation

Use your given AWS account to deploy an ECS environment with Terraform and CloudFormation. Follow the steps from our docs: [Using Terraform to deploy a new ECS stack](https://mooveit.atlassian.net/wiki/spaces/STUD/pages/2258501662/Using+Terraform+to+deploy+a+new+ECS+stack?atlOrigin=eyJpIjoiOTI3MGExMGZlYWU4NDdhOWExYmVlNWNkN2JhMDVlZTUiLCJwIjoiY29uZmx1ZW5jZS1jaGF0cy1pbnQifQ)


## Intro to Kubernetes

Follow the video tutorial from Pelado Nerd to undestand the basics of K8s in less than 2 hours.
[Watch the video](https://youtu.be/DCoBcpOA7W4)


## Kubernetes in depth

(optional) Follow this 4-hour course to learn more about Kubernetes
[Watch the video](https://www.youtube.com/watch?v=X48VuDVv0do)

- [ ] Intro and Course Overview
- [ ] What is K8s
- [ ] Main K8s Components
- [ ] K8s Architecture
- [ ] (optional) Minikube and kubectl - Local Setup
- [ ] Main Kubectl Commands - K8s CLI
- [ ] K8s YAML Configuration File
- [ ] (optional) Demo Project: MongoDB and MongoExpress
- [ ] Organizing your components with K8s Namespaces
- [ ] K8s Ingress Exercise
- [ ] Helm - Package Manager
- [ ] Persisting Data in K8s with Volumes
- [ ] Deploying Stateful Apps with StatefulSet
- [ ] K8s Services Exercise


## Kustomize

Kustomize lets you customize raw, template-free YAML files for multiple purposes, leaving the original YAML untouched and usable as-is. We use it for handling K8s config files.
[Watch the video](https://www.youtube.com/watch?v=Twtbg6LFnAg&t=3s)


## Additional resources

Continue your training with [these external resources](https://mooveit.atlassian.net/wiki/spaces/SRE/pages/1421606938/External+resources+related+to+SRE)
