FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image for the Tweet Sentiment Analysis backend API."
LABEL maintainer = ["danielmurph8@gmail.com", "dylanedwards290@gmail.com"]

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "dev"]