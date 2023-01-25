# AWS

Learn the basic concepts and services from AWS by building a simple infrastructure to deploy a small application.

## AWS platform and services

Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster.

- [ ] Search information about AWS, start at [What is AWS](https://aws.amazon.com/what-is-aws/) and see [this video](https://youtu.be/a9__D53WsUs).
- [ ] Use the account provided by the studio to login to the [AWS Management Console](https://console.aws.amazon.com/).
- [ ] Open `Services` menu and look _All Services_ and the available categories or groups of services.
- [ ] Search and read the description of the most used AWS services: [Understanging AWS](https://medium.com/@patdhlk/understanding-aws-9cc54e2ecb9c)

The services available are in continuous development: new services begin to be offered every month and there are always improvements in the characteristics of the available services. Each service is a separate project, but to run a cloud application will require the use of multiple services to design the solution.

## Regions and Availabilty Zones (AZs)

- [ ] Read the sections _Regions_ and  _Availability Zones_ in [this link](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
- [ ] Learn how to choose the bestion region in [this link](https://cloudacademy.com/blog/how-to-choose-the-best-aws-region-for-your-workload/)
- [ ] Exercise: Identify at last two GLOBAL services and two REGION dependent services.
- [ ] Understand what means _Availability Zone_ and how it is a tool to to provide high availability, continuity and resilience to a cloud application. Check RDS service Multi-AZ deployments as example [this link](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)
- [ ] Exercise: Read about Elastic Block Store (hard disks) and understand why the disk require use the same Availability Zone than the Insance [this link](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)

## Networking

- [ ] Read the sections _VPC and subnet basics_ and _Subnet security_ in [this link](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#vpc-subnet-basics)
- [ ] Exercise: Use console to navigate to VPC Service in the Oregon region (_us-west-2_), look the Dashboard and check the VPC, Subnets, Route Tables, Internet Gateways, Security Groups and other VPC components/features available by default in each region.

## KeyPairs

- [ ] Read the introduction to KeyPairs in this [link](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)
- [ ] Exercise: import your KeyPair into your AWS account. Pay attention that the keypair is dependent on the region in which you import it.
- [ ] Exercise: check `https://github.com/[your github user].keys` and you will see all your recorded Github Public Keys published. Otherwise, record a Github key at your profile because it is one of the easy ways to share your public key.

## EC2

EC2 is a service that provide compute resources as Virtual Machines and its virtual hardware requirements (hard drives, network interfaces, etc.).

- [ ] Read [What is Amazon EC2?](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html) and see [this video](https://youtu.be/TsRBftzZsQo).
- Understand what is required to create a new instance:
  - [ ] Instance type and size with [this link](https://aws.amazon.com/ec2/instance-types/)
  - [ ] Instance AMI [this link](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instances-and-amis.html)
- [ ] Excercise: **Launch a new instance** with web console:
  - Choose an AMI of Ubuntu Server
  - Choose the t2.micro (free tier elegible) instance type
  - At instance details go to _Advanced Details_ and into the _User data_ box paste this configuration script:

```
#!/bin/bash
apt-get update
apt-get install -y nginx
echo "This is my instance" > /var/www/html/index.html
```

- .
  - Leave the 8G standar storage disk unchanged
  - Leave Tags unconfigured
  - Configure a _new_ Security Group and change the Security Group Name to one of your selection. Leave rules unchanged.
  - Launch your instance and choose your recorded key pair of previous excercise.
  - Go to Instance section and wait it complete bootstrap and record it Public IP address.
- [ ] Login via SSH and run command `ss -ltn` to check if port 80 is open with service nginx with `curl http://localhost/`

## Security Groups

Security Group is like a firewall filter that may be attached or detached from one or more instances. A instance may have one or more security groups. Each security group may have one or more rules for input or output network trafic. Try to understand security groups because they are the reason of simple things works or not.

- [ ] Read the introduction in the official docs in [EC2 security groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)
- [ ] Excercise: Try to connect from your desktop to the nginx service `http://instance-public-IP/`
- [ ] Exercise: Locate the security group created with your instance and edit inbound rules and open port 80 from anywhere.
- [ ] Excercise: Try again to access the nginx service `http://instance-public-IP/`

## Elastic IPs

The _instance-public-IP_ is ephemerous because the instance obtain it from something similar to the DHCP service.

- [ ] Excercise: Select your instance and change Instance State to _Stop_ (wait for it STATUS) and looks how it lose the Public IPv4 address. Start the instance and check how it has a new Public-IP.

There are a service called **Elastic IPs** that is a bank of public IP addresses reserved to attach or dettach from instances.  This Elastic IP will remain attached to the resouce "instance" (or network port) up to instance termination or detached. Any Elastic IP detached will remains at the Elastic IPs bank reserved to be used, by this way they are useful to be pointed with a DNS name. It is posible to release detached ElasticIP out of your bank.

- [ ] Read about Elastic IP in [this link](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)
- [ ] Exercise: allocate and assign an static IP to the EC2 instance created before. Send the cURL to the new IP. Stop and start the instance and see how the IP remains.

## Route53

Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other.

- [ ] Read about Route 53 service [this link](https://aws.amazon.com/route53/) and also about it features [this link](https://aws.amazon.com/route53/features/) and [this video](https://youtu.be/RGWgfhZByAI)
- [ ] Excersice: Host a Zone.
  - Go to Route 53 Dashboard and enter into Hosted Zone to **Create hosted zone** option, and use `example.moove-it.com` as Domain name, as _public hosted zone_
  - Two records are created: SOA and NS, take note of the NS values, similar to `ns-670.awsdns-18.com`.
- [ ] Exercise: Add the ElasticIP of the previous Exercise with a name as A record.
  - Into the Hosted zone details **Create record* and use a name to it, perhaps: `www` as _Record name_ and the ElasticIP as Value.
- [ ] Exercise: Verify with `dig` command your DNS records
  - **Note:** as this is not a real domain, you must ask request to the NS of this hosted zone
  - Execute dig request and adapt to your environment, looks ANSWER SECTION.
  - `dig @ns-670.awsdns-18.com example.moove-it.com SOA`
  - `dig @ns-670.awsdns-18.com www.example.moove-it.com`

## RDS

Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It is posible to setup several well-known database engines.

- [ ] Read about RDS service [this link](https://aws.amazon.com/rds/) and take a look on the RDS service dashboard.
- [ ] Exercise: Create a Database
  - Choose PostgreSQL engine
  - Select Dev/Test family instances.
  - Select the Burst Instance Type (T family) and pick the instance with the lowest resources (e.g _t2.micro_)
  - Check that Default VPC is selected (the same of your instance)
  - Do not allow public access (check NO)
  - Create a NEW security group for your PostgreSQL/RDS instance and choose a name
  - Before creating any database resource, make sure that the estimated monthly cost is under $25. If it is significantly higher than that, then some of the previous steps were not followed accordingly.
  - Confirm Create database
- [ ] Exercise: Add a rule the DB's security group to allow traffic in the PostgreSQL port (5432) from the ID of the security group attached to your instance.
- [ ] Exercise: Validate traffic. SSH into the instance, use telnet to validate the connectivity and then install psql in the instance to connect to the DB.
- [ ] Exercise: Create a manual snapshot and restore it as a new instance with a different name. Check the RDS Dashboard to see both DB Instances.
- [ ] Exercise: Delete both DB instances, the Snapshot to cleanup RDS service, the EC2 instance that was previously used to log in into the database and release the Elastic IP Address.

## S3 buckets and CDN CloudFront

The S3 service is a [object storage](https://en.wikipedia.org/wiki/Object_storage) and enables to store and retrive files at very high performance ratio.

- [ ] Read about S3 Object Storage and its features [this link](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) and [this video](https://youtu.be/77lMCiiMilo).

The S3 service works together (integrated with) Glacier storage that it is a great storage forever.

- [ ] Read about Glacier [this link](https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html).

Ok, now we continue with S3:

- [ ] Get to know S3 and some use cases in [this link](https://n2ws.com/blog/aws-cloud/amazon-s3-tutorial)
- [ ] Exercise: Go to S3 Service
  - Create a bucket. You may try with simple bucket name to see the error that the bucket requires **unique** name at the region you selected.
  - Enable public access
- [ ] Excercise: Upload a file throught the web console into the bucket.

Now you have a bucket to store files from your application, but it need permissions to do it. We will not cover how to input files from applications here.

However, we will see how to grant public access throught the webserver feature of the S3.

- [ ] Excersice: static web hosting
   - At bucket Properties enable _static web hosting_
   - At bucket Permissions disable _Block public access_
   - At bucket Permissions edit the _Bucket policy_ and obtain from "Policy Examples" page the json of **Granting read-only permission to anonymous user** example to use it to create this bucket policy.
- [ ] Exercise: Locate the website endpoint URL and use to get the file you upload with your browser or `wget` command.

Congratullations, you have a S3 storage to serve static web content!

CloudFront service will speed delivery of files from S3.

- [ ] Read about CloudFront [this link](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html) and [this video](https://youtu.be/AT-nHW3_SVI)
- [ ] Think about an integration with a CDN service like CloudFront, ask the team for examples if needed.

## IAM roles, RBAC and API access

The traditional authorization model used in IAM is called Role-Based Access Control (RBAC). Within AWS a role usually refers to an IAM role, which is a Identity and Access Management service on AWS. The comunication with any AWS API/endpoint will be check against policies; the access between resources (i.e. instance->S3) will require roles with policy to enable the diferrent functions (list, write, modify, delete, move, etc.)

- [ ] Learn about IAM service [this link](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) and [this video](https://youtu.be/Ul6FW4UANGc).

Now you will create an account just for API ACCESS to you.

- [ ] Excercise: Go to IAM service and into Users option **Add users**
   - Select _Access key - Programmatic access_
   - At permissions, select _Attach existing policies directly_ and choose _AdministratorAccess_ (you may take a look about other policies).
   - When you *Create User* you will see the _Access key ID_ and te _Secret access key_ and this is the only one time you will have to get the "Secret access key", then record it at your [Bitwarden](https://bitwarden.com/) NOW !

You have now credential to use the AWS API as Administrator.

- [ ] Excercise: Install aws cli command with `brew install awscli`.
- [ ] Excercise: Configure aws access with the command with `aws configure`.
- [ ] Excercise: Check your configuration with the command `aws sts get-caller-identity` that will perform a `whoami` at aws and show who you are.

Congratullations, you may use AWS services by console and by API access now.

It is possible to have multiple access key to use into different projects or with different policies right throught **profiles** at your local configuration.

- [ ] Read about Profiles [this link](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html).

## AWS prices, plans and bills

It is important you understand that AWS is a service where you pay as you go by default, but you have options to reduce costs many times with minimal care at your configurations.  Perhaps you have a new account at AWS and you have several "Free Tier" options, or perhaps you are using an account that may reduce costs if you understand the saving money principle.

- [ ] Understand how AWS price philosopy works with [this video](https://youtu.be/op_9NfAVedY)
   - pay-on-demand
   - reserved capacity and the three payment models
   - spot resources
- [ ] Understand the Free Tier with [this video](https://youtu.be/a9__D53WsUs).
- [ ] Take a look about reserved capacity at [this video](https://youtu.be/XrmdkRQZhUQ).
- [ ] Also consider spot instances to your environments, check [this video](https://youtu.be/ITG1OpHz-JQ).
