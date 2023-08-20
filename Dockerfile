FROM node:latest

ARG WORK_DIR=/workspace
ENV PATH ${WORK_DIR}/node_modules/.bin:$PATH

# Set the base working directory for the container..
RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}

# Copy package files
#COPY package.json ${WORK_DIR}
#COPY package-lock.json ${WORK_DIR}

# Run npm installs
#RUN npm install -g @angular/cli
#RUN npm install

# Copy everything else
#COPY . ${WORK_DIR}

EXPOSE 4200
