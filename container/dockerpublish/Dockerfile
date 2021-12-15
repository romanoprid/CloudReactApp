FROM python:3.8

WORKDIR /publish

RUN apt-get update -y
RUN apt-get install -y git

RUN git clone https://github.com/romanoprid/CloudReactApp.git

WORKDIR /publish/CloudReactApp/container/dockerpublish

RUN pip3 install requests

CMD ["python3", "post.py"]
