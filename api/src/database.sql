CREATE TABLE students (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    age INT,
    dob DATE
);

INSERT INTO
    students (name, email, age, dob)
VALUES
    ('Joe', 'joe@gmail.com', 25, '1998-05-12'),
    ('Sara', 'sara@hotmail.com', '33', '1989-05-04');