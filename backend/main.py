from flask import Flask,render_template,request,session,redirect,url_for
from flask_cors import CORS, cross_origin
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def index():
  return "Why are we here? Just to suffer !"



@app.errorhandler(404)
@cross_origin()
def page_not_found(e):
    return "Not found bbye", 404



if __name__ == '__main__':
    app.run(debug=True)