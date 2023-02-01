DROP TABLE IF EXISTS workout;

CREATE TABLE workout(
   day varchar(30),
   theworkout varchar(100),
   completed BOOLEAN
);

INSERT into workout (theworkout) VALUES ('test workout');