from flask import Blueprint, request
import sqlite3

api = Blueprint('api', __name__, url_prefix='/api/rechercher')

conn = sqlite3.connect("app/api/cross.db", check_same_thread=False)
cursor=conn.cursor()

def id_from_genre(genre, id) :
    """
    on renvoie un nouvel ID en fonction du genre, voir la BDD pour plus de détails 
    """
    nouveau_id = 0
    if genre == "garcon" : 
        if id == 1 : # Benjamins
            nouveau_id = 1
        if id == 2 : # Minimes
            nouveau_id = 3
        if id == 3 : # Cadets 
            nouveau_id = 5
        if id == 4 : # Juniors
            nouveau_id = 7
    elif genre == "fille" : # en théorie il n'y aurait pas d'autres possibilités
        if id == 1 : # Benjamins 
            nouveau_id = 2
        if id == 2 : # Minimes
            nouveau_id = 4
        if id == 3 : # Cadets
            nouveau_id = 6 
        if id == 4 : # Juniors
            nouveau_id = 8 
    return nouveau_id

@api.route('/eleve')
def search_eleve():
    dossard = request.args.get('dossard')
    rows = ''
    if dossard is None:
        return {}
    else:
        requete_sql = f"""
SELECT ELEVE.nom , ELEVE.prenom , DOSSARD.temps FROM ELEVE
INNER JOIN DOSSARD ON ELEVE.id_eleve = DOSSARD.id_eleve
WHERE id_dossard = {dossard}
"""
        cursor.execute(requete_sql)
        conn.commit()
        rows = cursor.fetchone()
    return {
        "nom_famille" : rows[0],
        "prenom" : rows[1],
        "temps" : rows[2]
    }

@api.route('/categorie')
def search_categorie():
    id = request.args.get('id')
    genre = request.args.get('genre')
    id = id_from_genre(genre, int(id))
    annee = request.args.get('annee')
    rows = ''
    if id is None:
        return {}
    else:
        requete_sql = f"""
SELECT nom, prenom, temps FROM DOSSARD
INNER JOIN ELEVE ON DOSSARD.id_dossard = ELEVE.id_eleve
WHERE id_catégorie = {id} AND année = {annee}
ORDER BY temps ASC
"""
        cursor.execute(requete_sql)
        conn.commit()
        rows = cursor.fetchall()
    return rows

@api.route('/podium')
def search_podium():
    id = request.args.get('id')
    genre = request.args.get('genre')
    id = id_from_genre(genre, int(id))
    annee = request.args.get('annee')
    rows = ''
    if id is None:
        return {}
    else:
        requete_sql = f"""
SELECT nom, prenom, temps FROM DOSSARD
INNER JOIN ELEVE ON DOSSARD.id_dossard = ELEVE.id_eleve
WHERE id_catégorie = {id} AND année = {annee}
ORDER BY temps ASC
"""
        cursor.execute(requete_sql)
        conn.commit()
        rows = cursor.fetchall()
    return rows[:3]

