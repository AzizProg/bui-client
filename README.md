# **Documentation of the Client Part of the Software Engineer Test at BuiCorporation**

For this documentation in French: :<br/>
[![English](https://img.shields.io/badge/lang-French-blue.svg)](README.fr.md)
#
I completed three tasks for BuiCorporation's Software Engineer technical test (backend, frontend, and mobile), each in a different Git repository. This is the repo for the frontend task.

Others parts:
* [Backend with Nest Js](https://github.com/AzizProg/bui-api)
* [Mobile with Flutter]()

# Description

## What was requested
- Use Next.js to design the application
- Dockerize the application by creating two files (Dockerfile and docker-compose.yml)
- Use the library [shadcn/ui](https://ui.shadcn.com/)

## Tools used
- The TypeScript language
- The Next.js framework
- The component library [shadcn/ui](https://ui.shadcn.com/)
- Tailwind CSS for styling and component customization
- Docker to isolate my dependencies and facilitate deployment

## Ce que j'ai réalisé
- A homepage similar to [buicorporation](https://buicorporation.com/)
- A login page to authenticate collaborators who are supposed to monitor wallet transactions
- A dashboard page to view transaction statistics and the number of registered clients
- A transactions page to gather all transactions in one place
- A page for transaction details and the client associated with the transaction
- A clients page that gathers all clients
- A page to view client information and all transactions of the client
- Filtering transactions by type (deposit, withdrawal, or transfer)
- Filtering clients by username
- Pagination
- Using cookies to store the token
- A middleware to protect access to certain routes for unauthenticated users 

# Project Structure
```
src
│
├── app/ entry point for accessing pages
│   │
│   ├── dashboard/ The section after authentication to access resources
│   │   │
│   │   ├── components/ Components related to the dashboard section
│   │   │
│   │   ├── customers/ Customers section
│   │   │   │
│   │   │   └── [id]/ Section for a single client (view client details)
│   │   │  
│   │   └── transactions/ Transaction section 
│   │       │
│   │       └── [id]/ Section for a single transaction (view transaction details)
│   │  
│   ├── home/ Homepage
│   │   │
│   │   └── components/ Homepage components
│   │  
│   └── login/ Section for collaborator authentication
│  
├── components/ Global components (shared between different sections)
│   │
│   └── ui/ components from the shadcn/ui library
│  
├── lib/ files for data retrieval, session management... (only because I didn't use clean architecture)
│
└── styles/ for global styles to apply to pages

```

# Installation
### Step 1:
- Clone this repository.
- Install Docker on your computer.
- Open the project in an IDE.

### Step 2:
Create a .env file at the root of the project and set the environment variables below.
```
API_BASE_URL=http://bui-api:3001/api/v1
JWT_SECRET_KEY="isASecret"
```
_**NB**: Make sure you have created the .env file and set the environment variables or simply use the one I have intentionally left at the root of the project containing the pre-defined variables; otherwise, the application startup process will not work._

# Usage

## With Docker
Step 1: Launch the project
In your IDE terminal, run the command below to launch the project with Docker:
```
docker-compose up --build
```
### Step 2: Verify that the container is in the defined network (optional)
From your terminal, run:
```
docker network inspect bui-network
```
This should display the information of the network that was created or joined (if bui-api was launched first) when you launched the application as defined in the docker-compose.yml file.
In the information returned by this command, look for the "containers" section, and you should find the container you just created.

# Overview
## Homepage
## Login page
## Dashboard page
## Transactions page
## Clients page

# Challenge

## Next.js
Understanding how Next.js works initially was challenging, so I took the time to read its documentation and consult resources to get through it. After completing this small project, I understand its utility better, and if I had to do it again, I would certainly go faster.

## Docker
Not being familiar with Docker, I had to update my knowledge, and during the project, I faced a communication issue between my containers (bui-api and bui-client). Since these are two different projects not in the same container, I initially had trouble understanding why they weren't communicating normally. Eventually, I realized I was still using "localhost," which is no longer useful in this case since my containers are each in a virtual environment, and each time my containers are built, a random address is assigned by Docker, preventing me from relying on their IPv4 addresses. I dug into the problem and, in the end, I had to create a Docker network to which both containers would be connected so they could communicate using their service names.
