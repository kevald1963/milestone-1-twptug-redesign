import os
from flask import Flask, render_template
import psycopg2
from datetime import datetime

DB_NAME = os.environ['DB_NAME']
DB_USER = os.environ['DB_USER']
DB_PASS = os.environ['DB_PASS']
DB_HOST = os.environ['DB_HOST']
SECRET_KEY = os.environ['SECRET_KEY']

app = Flask(__name__)

app.secret_key = SECRET_KEY


@app.route('/calendar')
def calendar():

    this_month = str(datetime.now().month)
    if len(this_month) == 1:
        this_month = "0" + this_month

    this_year = str(datetime.now().year)
    start_day = "01"
    end_day = "31"
    start_date = this_year + "-" + this_month + "-" + start_day
    end_date = this_year + "-" + this_month + "-" + end_day

    conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)
    curs = conn.cursor()
    curs.execute(
        "SELECT * "
        "FROM event "
        "WHERE event_date "
        "BETWEEN '" + start_date +
        "' AND '" + end_date + "'"
    )
    curs.close()
    conn.close()

    return render_template("calendar2.html", title="Calendar")


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
