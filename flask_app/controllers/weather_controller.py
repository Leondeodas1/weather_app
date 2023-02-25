from flask_app import app
from flask import render_template, request, redirect, session, flash, url_for
from flask_app.models import weather_model
from flask_bcrypt import Bcrypt



@app.route('/')
def index():
    return render_template('index.html')