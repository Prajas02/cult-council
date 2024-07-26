from flask import Flask, render_template, request, session, redirect, url_for,jsonify
from flask_cors import CORS, cross_origin
import helper.gsheet as gs
from googleapiclient.errors import HttpError
from uuid import uuid4
app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"
app.secret_key = str(uuid4())
sheet = gs.Gsheet()

@app.route("/")
@cross_origin()
def index():
    return "Why are we here? Just to suffer !"


@app.route("/clubs/<club_name>")
@cross_origin()
def clubs(club_name):
    try:
        cb = sheet.get_club_by_name(club_name).get_dict()
    except HttpError:
        cb = {'Bad':'Request'}
    return jsonify(cb)



@app.errorhandler(404)
@cross_origin()
def page_not_found(e):
    return "Not found bbye", 404


if __name__ == "__main__":
    app.run(debug=True)
