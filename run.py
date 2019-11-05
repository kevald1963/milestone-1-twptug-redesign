import os
import json
from flask import Flask, render_template, request, flash

app = Flask(__name__)

app.secret_key = 'some_secret_key'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=os.environ.get('PORT'),
            debug=True)