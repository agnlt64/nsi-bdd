from flask import Blueprint, request
import sqlite3

api = Blueprint('api', __name__, url_prefix='/api/rechercher')

conn = sqlite3.connect("app/api/cross.db", check_same_thread=False)
cursor=conn.cursor()

@api.route('/eleve')
def search_eleve():
    dossard = request.args.get('dossard')
    rows = ''
    if dossard is None:
        print('pas de dossard')
    else:
        requete_sql = f"""
SELECT ELEVE.nom , ELEVE.prenom , DOSSARD.temps FROM ELEVE
INNER JOIN DOSSARD ON ELEVE.id_eleve = DOSSARD.id_eleve
WHERE id_dossard = {dossard}
"""
        cursor.execute(requete_sql)
        conn.commit()
        rows = cursor.fetchall()
        assert len(rows) == 1, "Erreur: le numéro de dossard n'est pas unique"
        rows = rows[0]
    return rows

@api.route('/categorie')
def search_categorie():
    id = request.args.get('id')
    rows = ''
    if id is None:
        print('pas de categorie')
    else:
        requete_sql = f"""
SELECT nom, prenom, temps FROM DOSSARD
INNER JOIN ELEVE ON DOSSARD.id_dossard = ELEVE.id_eleve
WHERE id_catégorie = {id}
ORDER BY temps ASC
"""
        cursor.execute(requete_sql)
        conn.commit()
        rows = cursor.fetchall()
    return rows

@api.route('/podium')
def search_podium():
    id = request.args.get('id')
    rows = ''
    if id is None:
        print('pas de podium de categorie')
    else:
        requete_sql = f"""
SELECT nom, prenom, temps FROM DOSSARD
INNER JOIN ELEVE ON DOSSARD.id_dossard = ELEVE.id_eleve
WHERE id_catégorie = {id}
ORDER BY temps ASC
"""
        cursor.execute(requete_sql)
        conn.commit()
        rows = cursor.fetchall()
    return rows[:3]

