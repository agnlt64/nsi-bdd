from flask import Blueprint
import sqlite3

api = Blueprint('api', __name__, url_prefix='/api')

conn = sqlite3.connect("cross.db")
cursor=conn.cursor()

@api.route('/search')
def search():
    return {
        'numero': 0,
        'nom': '',
        'prenom': '',
        'classe': '',
        'date_naissance': '',
        'categorie': '',
        'sexe': ''
    }

