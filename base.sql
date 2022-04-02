CREATE TABLE IF NOT EXISTS utilisateur(
  id_util INT NOT NULL auto_increment,
  nom_util VARCHAR(50) NOT NULL,
  prenom_util VARCHAR(50) NOT NULL,
  email_util VARCHAR(50) NOT NULL,
  date_naissance_util date,
  mot_de_passe_util TEXT NOT NULL,
  PRIMARY KEY(id_util)
);

