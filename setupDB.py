import sqlite3
conn = sqlite3.connect('database.db')
conn.execute('CREATE TABLE posts (code TEXT,reason TEXT, post_date TEXT, url_string TEXT, payload TEXT, headers TEXT);')
conn.commit()
conn.close()

#url_string, json=payload_dict, headers=headers


        
        