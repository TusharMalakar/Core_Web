FROM node:12.4.0

RUN mkdir /user/src/app
WORKDIR /user/src/app

RUN npm install -g @angualr/cli@8.0.2

COPY . /user/src/app

CMD ng serve --host 0.0.0.0 --port 4200