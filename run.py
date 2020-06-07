import os
from flask import Flask, render_template

app = Flask(__name__)

app.secret_key = 'some_secret_key'


@app.route('/')
def index():
    return render_template("index.html")


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


@app.route('/airpollution')
def airpollution():
    return render_template("airpollution.html")


@app.route('/cyclingcampaigns')
def cyclingcampaigns():
    return render_template("cyclingcampaigns.html")


@app.route('/busfacts')
def busfacts():
    return render_template("busfacts.html")


@app.route('/rail')
def rail():
    return render_template("rail.html")


@app.route('/media')
def media():
    return render_template("media.html")


@app.route('/transpcomm')
def transpcomm():
    return render_template("transpcomm.html")


@app.route('/pensioners')
def pensioners():
    return render_template("pensioners.html")


@app.route('/disability')
def disability():
    return render_template("disability.html")


@app.route('/hospitalbuses')
def hospitalbuses():
    return render_template("hospitalbuses.html")


@app.route('/calendar')
def calendar():
    return render_template("calendar.html")


@app.route('/reregulation')
def reregulation():
    return render_template("reregulation.html")


@app.route('/blog')
def blog():
    return render_template("blog.html")


@app.route('/about')
def about():
    return render_template("about.html")


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=os.environ.get('PORT'),
            debug=True)
