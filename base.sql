CREATE DATABASE IF NOT EXISTS nyxt;
use nyxt;

DROP TABLE IF EXISTS favoris;
DROP TABLE IF EXISTS PRODUIT;
DROP TABLE IF EXISTS utilisateur;

CREATE TABLE IF NOT EXISTS utilisateur(
  id_util INT NOT NULL auto_increment,
  nom_util VARCHAR(50) NOT NULL,
  prenom_util VARCHAR(50) NOT NULL,
  email_util VARCHAR(50) NOT NULL,
  date_naissance_util date,
  mot_de_passe_util TEXT NOT NULL,
  PRIMARY KEY(id_util)
);

CREATE TABLE IF NOT EXISTS PRODUIT(
  id_produit INT NOT NULL auto_increment,
  nom_produit VARCHAR(50),
  description_produit VARCHAR(50),
  type_produit VARCHAR(50),
  enStock INT,
  prix DECIMAL
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

