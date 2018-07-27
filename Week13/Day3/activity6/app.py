# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE
app = Flask(__name__)
# @TODO: Create a list of dictionaries
# CODE GOES HERE
dogs = [{"name": 'Fido', 'type': 'Lab'},
        {"name": 'Rex', 'type': 'Collie'},
        {'name': 'Suzzy', 'type': 'Terrier'},
        {'name': 'Tomato', 'type': 'Retriever'}]
# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
# CODE GOES HERE
@app.route('/')
def index():
    return render_template('index.html', dogs=dogs)

if __name__ == "__main__":
    app.run(debug=True)