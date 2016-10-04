FROM ubuntu:16.04

MAINTAINER Princip <principle.main@gmail.com>

ENV workdir /kernel-bulk-data

WORKDIR $workdir

ADD . $workdir

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN chmod 755 $workdir
RUN apt-get update && apt-get upgrade -y
RUN apt-get install apt-utils -y
RUN apt-get install curl -y
RUN apt-get install wget -y
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN cd $workdir
RUN npm i
RUN source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | tee /etc/apt/sources.list.d/rethinkdb.list
RUN wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | apt-key add -
RUN apt-get update
RUN apt-get install rethinkdb -y
RUN cd $workdir

EXPOSE 4000

CMD ./run.sh
