FROM node
WORKDIR /work
COPY package.json /work/package.json
COPY yarn.lock /work/yarn.lock
RUN yarn
COPY . /work
RUN yarn && yarn build

FROM httpd:2.4
COPY --from=0 /work/dist/ /usr/local/apache2/htdocs/
