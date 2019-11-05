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

@app.route('/newcastle')
def newcastle():
    return render_template("newcastle.html")

@app.route('/gateshead')
def gateshead():
    return render_template("gateshead.html")

@app.route('/northtyneside')
def northtyneside():
    return render_template("northtyneside.html")

@app.route('/southtyneside')
def southtyneside():
    return render_template("southtyneside.html")

@app.route('/sunderland')
def sunderland():
    return render_template("sunderland.html")

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=os.environ.get('PORT'),
            debug=True)