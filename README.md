![node](https://img.shields.io/badge/node-16-green)
![express](https://img.shields.io/badge/express-4.16.1-red)

# next-technology-frontend-app

## Fetch results from Apple api and render on frontend

A frontend app in React to display search results from an Apple search api. Express static file serving was used in this project

## 🤔 How do I use this?

<summary>Hey- before you actually use this, make sure you've [Docker](https://www.docker.com/) installed and running. Expand to read more</summary>

### Step 1: Build Image

In your project directory, run

```sh
docker build --build-arg PORT=9000 NODE_ENV=development --tag next-app-frontend-castro:latest .
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

### Step 3: Open in browser

> http://localhost:4000

## You can skip all the above setup and test at:

> https://next-technology-app.onrender.com
