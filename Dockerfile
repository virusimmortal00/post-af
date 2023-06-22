FROM tiangolo/uwsgi-nginx-flask:python3.11

COPY requirements.txt /tmp
COPY setupDB.py /tmp
WORKDIR /tmp
RUN pip install -r requirements.txt
RUN python setupDB.py

COPY ./app /app