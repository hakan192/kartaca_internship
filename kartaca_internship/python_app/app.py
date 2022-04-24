from flask import Flask, jsonify
from pymongo  import MongoClient
import random
import json

app = Flask(__name__)

@app.route("/")
def hello():
    return "Merhaba Python ! "

def get_db():
    client = MongoClient(host="mongo",
                         port=27017,
                         username='admin',
                         password='admin',
                         authSource="admin"
                         )
                         
    db = client["stajdb"]
    return db

@app.route("/staj")
def fetch_iller():
    db=""
    try:   
        db = get_db()
        _collection = db.iller.find()
        collection=[{"il": col["il"], "nufus": col["nufus"] ,'ilceler':col['ilceler']} for col in _collection]
        winner_city = random.choice(collection)
        return json.dumps(winner_city)
    except:
        pass
    finally:
        if type(db) == MongoClient:
            db.close()
        

@app.route("/ulkeler")
def fetch_ulkeler():
    db=""
    try:   
        db = get_db()
        _collection = db.ulkeler.find()
        collection=[{"ulke": col["ulke"], "nufus": col["nufus"] ,'basket':col['baskent']} for col in _collection]
        winner_country = random.choice(collection)
        return jsonify(winner_country)
    except:
        pass
    finally:
        if type(db) == MongoClient:
            db.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=4444,debug=True)