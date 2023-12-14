from donnees import *
%load_ext sql
%sql sqlite://
%sql PRAGMA foreign_keys = ON;    
%sql {les_requetes}

.open "LIVRES";

CREATE TABLE "ELEVE" (
  "id_eleve" INTEGER,
  "nom" VARCHAR(255),
  "prenom" VARCHAR(255),
  "date_de_naissance" VARCHAR(255),
  "sexe" VARCHAR(255),
  PRIMARY KEY ("id_eleve")
);

CREATE TABLE "DOSSARD" (
  "id_dossard" INTEGER,
  "année" VARCHAR(255),
  "temps" VARCHAR(255),
  "date_cross" VARCHAR(255),
  "id_classe" INTEGER,
  "id_eleve" INTEGER,
  "id_catégorie" INTEGER,
  PRIMARY KEY ("id_dossard"),
  FOREIGN KEY ("id_classe") REFERENCES "CLASSE" ("id_classe")
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY ("id_eleve") REFERENCES "ELEVE" ("id_eleve")
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY ("id_catégorie") REFERENCES "CATÉGORIE" ("id_catégorie")
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE "CLASSE" (
  "id_classe" INTEGER,
  "nom_classe" VARCHAR(255),
  "année" VARCHAR(255),
  PRIMARY KEY ("id_classe")
);

CREATE TABLE "CATÉGORIE" (
  "id_catégorie" INTEGER,
  "nom_catégorie" VARCHAR(255),
  "sexe" VARCHAR(255),
  "distance" VARCHAR(255),
  PRIMARY KEY ("id_catégorie")
);


{
 "cells": [],
 "metadata": {},
 "nbformat": 4,
 "nbformat_minor": 5
}