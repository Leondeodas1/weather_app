from flask_app import app
from flask import render_template, request, redirect, session, flash, url_for
from flask_app.models import weather_model
from flask_bcrypt import Bcrypt

@app.route("/getlogin")
def getlogin():
    return render_template('login.html')

@app.route('/register') 
def getregir():
    return render_template('regrister.html') 

@app.route("/getreg")
def getreg():
    return redirect("/register")