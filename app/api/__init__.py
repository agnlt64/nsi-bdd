from flask import Blueprint

api = Blueprint('api', __name__, url_prefix='/api')

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
