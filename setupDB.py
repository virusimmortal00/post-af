import sqlite3
conn = sqlite3.connect('database.db')
conn.execute('CREATE TABLE posts (id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT,reason TEXT, post_date TEXT, app_id TEXT, url_string TEXT, payload TEXT, headers TEXT, payload_type TEXT);')
conn.commit()
conn.close()

#url_string, json=payload_dict, headers=headers


        
        