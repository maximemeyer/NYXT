CREATE DATABASE IF NOT EXISTS nyxt;
use nyxt;
DROP TABLE IF EXISTS commentaires;
DROP TABLE IF EXISTS favoris;
DROP TABLE IF EXISTS PRODUIT;
DROP TABLE IF EXISTS utilisateur;

CREATE TABLE IF NOT EXISTS utilisateur(
  id_util INT NOT NULL auto_increment,
  nom_util VARCHAR(50) NOT NULL,
  prenom_util VARCHAR(50) NOT NULL,
  email_util VARCHAR(100) NOT NULL,
  date_naissance_util date,
  mot_de_passe_util TEXT NOT NULL,
  PRIMARY KEY(id_util)
);

CREATE TABLE IF NOT EXISTS PRODUIT(
  id_produit INT NOT NULL auto_increment,
  nom_produit VARCHAR(100),
  description_produit TEXT,
  type_produit VARCHAR(100),
  score int,
  prix DECIMAL,
  PRIMARY KEY(id_produit)
);

CREATE TABLE IF NOT EXISTS favoris(
  id_fav INT NOT NULL auto_increment,
  id_produit INT NOT NULL,
  id_util INT NOT NULL,
  PRIMARY KEY(id_fav, id_produit, id_util),
  FOREIGN KEY(id_produit) REFERENCES PRODUIT(id_produit),
  FOREIGN KEY(id_util) REFERENCES UTILISATEUR(id_util)
);

CREATE TABLE IF NOT EXISTS commentaires
(
  id_commentaire int not null,
  id_produit int not null,
  id_utilisateur int not null,
  texte TEXT,
  note int,
  PRIMARY KEY(id_commentaire),
  FOREIGN KEY(id_utilisateur) REFERENCES UTILISATEUR(id_util)
);

