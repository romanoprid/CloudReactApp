FROM python:3.8

WORKDIR /publish

RUN apt-get update -y
RUN apt-get install -y git

RUN git clone https://github.com/Denys-Doskochynskiy/cloud-uklon-lab.git

WORKDIR /publish/cloud-uklon-lab/1

RUN pip3 install requests

CMD ["python3", "post.py"]
