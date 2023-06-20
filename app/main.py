# Importing Libraries.. id867530999
from datetime import datetime
from flask import Flask, render_template, request, flash
from flask_bootstrap import Bootstrap5
from flask_toastr import Toastr
from flask_wtf import FlaskForm
import hmac
import hashlib
import json
import requests
import sqlite3
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms import DecimalField, RadioField, SelectField, TextAreaField, FileField
from wtforms.validators import InputRequired

app = Flask(__name__)
bootstrap = Bootstrap5(app)
toastr = Toastr(app)

app.config['SECRET_KEY'] = 'secretkey'
app.config['BOOTSTRAP_BOOTSWATCH_THEME'] = 'sandstone'
app.config['TOASTR_POSITION_CLASS'] = 'toast-top-center'
app.config['TOASTR_TIMEOUT'] = '1500'
#app.static_folder = 'static'

class MyForm(FlaskForm):

    api_dev_key = StringField('dev key:', validators=[InputRequired()])
    api_endpoint = StringField('api:', validators=[InputRequired()])
    #event = TextAreaField('event:', validators=[InputRequired()])
    api_app_id= StringField('app id:', validators=[InputRequired()])
    api_body = TextAreaField('body:', validators=[InputRequired()])
    submit = SubmitField()

@app.route('/', methods=['GET', 'POST'])
def index():
    form = MyForm()
    #if form.validate_on_submit():
    #create_db_table()
    # value='9uGa48E7MubBXdWigP6j3Y'
    
    con = sqlite3.connect("database.db")
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute("select * from posts order by post_date desc")
    rows = cur.fetchall()

    if request.method == 'POST':
        secret_key = form.api_dev_key.data
        #secret_keyb = b"9uGa48E7MubBXdWigP6j3Y"
        
        payload = form.api_body.data
        #payload_event = form.event.data
        payload_app_id = form.api_app_id.data
        #app_id = "id641654987"
        payload_dict = json.loads(payload)
        #payload_event_dict = json.loads(payload_event)
        #iso_date = datetime.datetime.utcnow().isoformat()

        headers = {
            "accept": "application/json",
            "content-type": "application/json"
        }

        afsig_pre = payload_dict["timestamp"] + payload_dict["ip"] + payload_dict["lang"]
        
        # Compute the HMAC of the message using the SHA-256 hash function
        af_sig = hmac.new(secret_key.encode("utf-8"), afsig_pre.encode("utf-8"), hashlib.sha256).hexdigest()
        service_url = "https://s2s.appsflyer.com/v2.0/"
        
        url_string = service_url + payload_app_id + "?af_sig=" + af_sig

        r = requests.post(url_string, json=payload_dict, headers=headers)

        #print("Current timestamp", str_date_time)

        

        # Get the current timestamp
        current_timestamp = datetime.now()

        # Format the timestamp
        post_date = current_timestamp.strftime('%Y-%m-%d %H:%M:%S')

        #return f'Message: {message}'
        #return url_string + '\n \n' + payload + '\n \n' + payload_event
        
        con = sqlite3.connect("database.db")
        cur = con.cursor()

        #(code TEXT,reason TEXT, date TEXT, url_string TEXT, payload_dict TEXT, headers TEXT)

        if r.status_code == 200:
            flash(str(r.status_code) + ' ' + str(r.text), 'success')
        else:
             flash(str(r.status_code) + ' ' + str(r.text), 'error')
        
        cur.execute("INSERT INTO posts (code,reason,post_date,url_string,payload,headers) VALUES (?,?,?,?,?,?)",(str(r.status_code),str(r.text),post_date,url_string,str(payload),str(headers) ))

        con.commit()
        con.close()

        con = sqlite3.connect("database.db")
        con.row_factory = sqlite3.Row
        cur = con.cursor()
        cur.execute("select * from posts order by post_date desc")
        rows = cur.fetchall()
        con.close()

        return render_template('index.html', form=form, rows=rows)
    return render_template('index.html', form=form, rows=rows)

if __name__ == '__main__':
	app.run()
        
# b012f850970817347591bbaed8690de0a49df8f17c291dbff34b527cbbcde50b
# b012f850970817347591bbaed8690de0a49df8f17c291dbff34b527cbbcde50b

"""
{
        "att": 3,
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
        "lang": "en-US",
        "timestamp": "2022-12-06T00:20:01.502",
        "inst_date": "2022-12-06T00:16:01.502",
        "os": "15.6.1",
        "ip": "96.250.1.168",
        "type": "iPhone",
        "counter": 4,
        "aie": true,
        "event_currency": "USD",
        "event_name": "af_purchase",
        "event_value": {"af_revenue" : 19.99, "af_currency": "USD", "af_quantity": 1, "af_content_type" : "shirt"}
    }
"""