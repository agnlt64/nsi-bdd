from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template('index.html')

@views.route('/classement')
def classement():
    return render_template('classement.html')

@views.route('/resultats')
def resultats():
    return render_template('resultats.html')