# small alpine.
FROM node:lts-alpine

# setting the workdir determines where the following commands are run
WORKDIR /home/node/app

# copy npm files and install
COPY ./package.json       /home/node/app/package.json
COPY ./package-lock.json  /home/node/app/package-lock.json
RUN npm install

# copy the source code and settings file
COPY ./src /home/node/app/src
COPY ./settings.js /home/node/app/settings.js

EXPOSE 4000
ENTRYPOINT ["npm"]
CMD ["start"]