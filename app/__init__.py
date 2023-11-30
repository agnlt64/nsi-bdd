from flask import Flask
import secrets

def create_app() -> Flask:
    """
    Fonction principale qui créé une application Flask
    """
    app = Flask(__name__)
    app.secret_key = secrets.token_urlsafe(40)

    from .views import views
    from .api import api
    app.register_blueprint(views)
    app.register_blueprint(api)

    return app