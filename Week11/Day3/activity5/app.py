# import Flask
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello World"

@app.route("/about")
def about():
    name = "Drew"
    location = "Irvine"
    return f"My name is {name}, and I live in {location}"

@app.route("/contact")
def contact():
    email = "info@example.com"
    return f"Questions? Comments? Shoot an email to {email}"

if __name__ == "__main__":
    app.run(debug=True)