from app import create_app

app = create_app()

# lancer l'application sur l'adresse http://127.0.0.1:8080
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)