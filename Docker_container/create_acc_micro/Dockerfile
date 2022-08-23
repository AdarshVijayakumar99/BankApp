FROM python:alpine
ADD . /mymicroservice2
WORKDIR /mymicroservice2
RUN pip install -r requirements.txt
CMD ["python", "register_login_micro.py"]
