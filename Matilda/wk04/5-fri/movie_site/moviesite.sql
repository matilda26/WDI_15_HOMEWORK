CREATE DATABASE moviesite;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200),
  release_date VARCHAR(20),
  duration VARCHAR(20),
  director VARCHAR(100),
  actors VARCHAR(1000),
  summary VARCHAR(2000),
  image VARCHAR(1000),
  website VARCHAR(1000)
);
