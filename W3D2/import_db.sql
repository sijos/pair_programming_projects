CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  body TEXT,

  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  user_id INTEGER NOT NULL,
  body TEXT,

  FOREIGN KEY(question_id) REFERENCES questions(id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(parent_id) REFERENCES replies(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  --count INTEGER

  FOREIGN KEY(question_id) REFERENCES questions(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO
  users (fname, lname)
VALUES
  ('sofia', 'chen'),
  ('scott', 'snyder'),
  ('john', 'niceguy');

INSERT INTO
  questions (title, body, user_id)
VALUES
  ('why is it sequel and not sql?', 'this seems stupid', 2),
  ('what is the meaning of life?', NULL, 1),
  ('why is it raining all the time?', 'should I buy an umbrella?', 2);

  INSERT INTO
    question_follows (user_id, question_id)
  VALUES
    (1, 2),
    (2, 3),
    (1, 3);

  INSERT INTO
    replies (question_id, parent_id, user_id, body)
  VALUES
    (1, NULL, 2, 'yeah it seems stupid'),
    (1, 1, 1, 'i think you''re stupid'),
    (1, 2, 3, 'why can''t we all just get along :''('),
    (2, NULL, 3, 'eating donuts. mmmm.');

    INSERT INTO
      question_likes (user_id, question_id)
    VALUES
      (1, 1),
      (2, 3),
      (3, 2);
