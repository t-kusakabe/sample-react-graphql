##########################
## Builder Container
##########################
FROM node:18.10.0-alpine3.15 as builder

WORKDIR /sample-react-graphql-relay

COPY package.json package-lock.json ./

RUN npm i --no-progress

COPY . .

RUN npm run build

##########################
## Application Container
##########################
FROM node:18.10.0-alpine3.15

WORKDIR /sample-react-graphql-relay

COPY --from=builder /sample-react-graphql-relay ./

CMD ["npm", "run", "start"]
