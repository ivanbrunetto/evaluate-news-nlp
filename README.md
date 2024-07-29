# Project Description

Project taken from Udacity **Build Tools and Single Page Web Apps** course for learning how to setup dev environment and build tools.

This web tool allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

Following are the project prerequisites:

- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
- External script - Service Worker
- External API - Meaningcloud

# Usage

git clone https://github.com/ivanbrunetto/evaluate-news-nlp.git

`cd` into evaluate-news-nlp folder and run:
- `npm install`
- `npm build-prod`
- `npm run start`

Get a valid API key at https://www.meaningcloud.com/

create .env file at the project root folder and add your API key as:
`key=<your key value>`

Open web browser and go to 'localhost:8000'

# Dependencies 

Check package.json file for more information
