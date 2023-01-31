DROP TABLE IF EXISTS workout;

CREATE TABLE workout(
   theworkout varchar(100),
   completed BOOLEAN
);

INSERT into workout (theworkout) VALUES ('test workout');