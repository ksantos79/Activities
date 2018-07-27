from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

db = client.store_inventory
collection = db.produce

@app.route('/')
def index():
    # write a statement that fins all the items in the db sets it to a variable
    inventory = list(db.collection.find())
    print(inventory)

    return render_template("index.html", inventory=inventory)

if __name__ == "__main__":
    app.run(debug=True)
