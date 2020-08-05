import os
from flask import Flask, render_template

app = Flask(__name__)

app.secret_key = 'some_secret_key'


@app.route('/')
def index():
    return render_template("index.html", title="Home")


@app.route('/newcastle')
def newcastle():
    return render_template("newcastle.html", title="Newcastle")


@app.route('/gateshead')
def gateshead():
    return render_template("gateshead.html", title="Gateshead")


@app.route('/northtyneside')
def northtyneside():
    return render_template("northtyneside.html", title="North Tyneside")


@app.route('/southtyneside')
def southtyneside():
    return render_template("southtyneside.html", title="South Tyneside")


@app.route('/sunderland')
def sunderland():
    return render_template("sunderland.html", title="Sunderland")


@app.route('/airpollution')
def airpollution():
    return render_template("airpollution.html", title="Air Pollution")


@app.route('/cyclingcampaigns')
def cyclingcampaigns():
    return render_template("cyclingcampaigns.html", title="Cycling Campaigns")


@app.route('/busnews')
def busnews():
    return render_template("busnews.html", title="Bus News")


@app.route('/rail')
def rail():
    return render_template("rail.html", title="Rail")


@app.route('/media')
def media():
    return render_template("media.html", title="Media")


@app.route('/transpcomm')
def transpcomm():
    return render_template("transpcomm.html", title="Transport Committee")


@app.route('/pensioners')
def pensioners():
    return render_template("pensioners.html", title="Pensioners")


@app.route('/disability')
def disability():
    return render_template("disability.html", title="Disability")


@app.route('/hospitalbuses')
def hospitalbuses():
    return render_template("hospitalbuses.html", title="Hospital Buses")


@app.route('/calendar')
def calendar():
    return render_template("calendar.html", title="Calendar")


@app.route('/reregulation')
def reregulation():
    return render_template("reregulation.html", title="Re-regulation")


@app.route('/blog')
def blog():
    return render_template("blog.html", title="Blog")


@app.route('/about')
def about():
    return render_template("about.html", title="About")


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=os.environ.get('PORT'),
            debug=True)
