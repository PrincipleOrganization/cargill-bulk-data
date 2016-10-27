FROM ubuntu:16.04

MAINTAINER Princip <principle.main@gmail.com>

ENV workdir /kernel-bulk-data

WORKDIR $workdir

ADD ./dist $workdir

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN chmod 755 $workdir

#Preparing
RUN apt-get update && apt-get upgrade -y
RUN apt-get install apt-utils -y
RUN apt-get install curl -y
RUN apt-get install wget -y
RUN apt-get install git -y

# NodeJS
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN cd $workdir
RUN npm i

# MongoB
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update
RUN apt-get install mongodb-org -y
RUN chmod 755 prepare.sh
RUN ./prepare.sh

# Run file
RUN chmod 755 run.sh

EXPOSE 4000

CMD ./run.sh
