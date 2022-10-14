![node](https://img.shields.io/badge/node-16-green)
![express](https://img.shields.io/badge/express-4.16.1-red)

# next-technology-frontend-app

## Fetch results from Apple api and render on frontend

A frontend app in React to display search results from an Apple search api. Express static file serving was used in this project

## 🤔 How do I use this?

<details>
<summary>Hey- before you actually use this, make sure you've [Docker](https://www.docker.com/) installed and running. Expand to read more</summary>
<br>
### 🚨 ENV VARS

This project uses environment variables, but if you are using docker you can ignore these as they have already been set

1. PORT
2. NODE_ENV

Once you have each of these, you're all set!

</details>

### Step 1: Build Image

In your project directory, run

```sh
docker build --tag next-app-frontend-castro:latest .
```

### Step 2: Verify Image

When build is complete you can verify your image with:

```sh
docker images
```

Then run your image with (make sure port 4000 is free on your local machine):

```sh
docker run -p 4000:9000 -d --name next-app-frontend-castro next-app-frontend-castro
```

### Step 3: Follow Logs

#### Run following commands to follow logs

```sh
docker ps
docker logs next-app-frontend-castro
```

#### If you need to go inside the container you can use the exec command:

```sh
docker exec -it next-app-frontend-castro /bin/bash
```

### Step 4: Open Postman and try out the api

First do a curl

```sh
curl -i localhost:4000/health
```

You should get a `HEALTHY!!!!!` response. You can open Postman (to make it easier) and test your the api

The endpoint for getting the search results is `localhost:4000/api/search?searchTerm=burna`

## You can skip all the above setup and test the deploy prod endpoints at:

> https://l788umca3c.execute-api.us-west-2.amazonaws.com/prod/
