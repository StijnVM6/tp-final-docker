# Stijn Vande Maele

TP docker final

## Partie 1:

```
cd .\client-livres\
git init
git add .
git commit -m "init"
npm i
```

### Create: Dockerfile

```
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm i -g serve

EXPOSE 5001

CMD ["serve", "-s", "dist", "-p", "5001"]
```

> node:20-alpine is a very lightweight node image.

### Create: .dockerignore

> copy paste .gitignore plus add: <br>

`.dockerignore` <br>
`README.md`

```
docker build -t my-docker-username/tp-docker-final-front .
docker run -dp 5001:5001 my-docker-username/tp-docker-final-front
```

## Partie 2:

```
cd .\tp-final-docker-back\
git init
git add .
git commit -m "init"
npm i
npm run start
```

> npm run start is to create the dist folder with the index.js

### Create: Dockerfile

```
FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "dist/index.js"]
```

> node:20-alpine is a very lightweight node image.

### Create: .dockerignore

> copy paste .gitignore plus add: <br>

`.dockerignore` <br>
`README.md`<br>

```
docker build -t my-docker-username/tp-docker-final-back .
docker run -dp 1992:3000 my-docker-username/tp-docker-final-back
```

## Partie 3:

```
docker ps
```

> copy paste container id's

```
docker container stop {container_id_front}
docker container stop {container_id_back}
```

### Create: docker-compose.yml

```
services:
    backend:
        build: ./tp-final-docker-back
        ports:
            - "1992:3000"
        restart: always

    frontend:
        build: ./client-livres
        ports:
            - "5001:5001"
        restart: always
        depends_on:
            - backend
```

Create the composed containers:
`docker compose up -d` <br>

## Partie 4:

### Back:

`cd .\tp-final-docker-back\`<br>

```
docker build -t my-docker-username/tp-docker-final-back .
docker push my-docker-username/tp-docker-final-back
```

Create a git workflow: <br>
`.github/workflows/docker.yml` <br>

```
name: Docker
on:
    push:
        branches: [main]
    pull_request:
        branches: [main]
jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - name: Login to DockerHub
              run: echo "${{ secrets.DOCKERHUB_TOKEN }}" | docker login -u "${{ secrets.DOCKERHUB_USERNAME }}" --password-stdin
            - name: Build Docker image
              run: docker build -t ${{ secrets.DOCKERHUB_USERNAME }}/getting-started .
            - name: Push Docker image
              run: docker push ${{ secrets.DOCKERHUB_USERNAME }}/getting-started
            - name: ping render
              run: curl -X GET ${{ secrets.URL }}
```

-   Render -> new web service from Docker image
-   Add DOCKERHUB_TOKEN & DOCKERHUB_USERNAME & URL as environments secrets in your github repo settings <br>
    > Tip: DOCKERHUB_TOKEN needs to be creates in you docker hub account settings (access token)
    > Tip: URL is the secret webhook found in the deployemnt settings of your project

### Front:

`cd .\client-livres\`<br>

-   git init -> git add -> git commit -> blablabla... publish branch to public repo...
-   Vercel -> new project -> import git repo
-   Done, rejoice!

... Ou on cracke et on utilise cloud based hosting service like azure, aws, etc... to implement the docker-compose and call it a day ^^
