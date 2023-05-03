FROM node:latest
ADD . /home/pyscript-react
WORKDIR /home/pyscript-react
RUN yarn --ignore-engines
CMD ["yarn", "build"]