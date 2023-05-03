FROM node:16

WORKDIR /need-romance
COPY . /need-romance

RUN yarn install
RUN yarn build

CMD yarn start