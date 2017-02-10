# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([{ user_name: 'Vinson'}, {user_name: 'Scott'}, {user_name: 'Kanye'}])
poll1 = Poll.create({title: 'Albums of the Year', author_id: 3})
poll2 = Poll.create({title: 'Weather Poll', author_id: 1})

questions1 = Question.create([{body: 'What is the best album?', poll_id: poll1.id},
  {body: 'Why is it my album?', poll_id: poll1.id},
  {body: 'What\'s wrong with you if you picked another album?', poll_id: poll1.id}])

questions2 = Question.create([{body: 'Why does it rain so much?', poll_id: poll2.id},
  {body: 'Is it global warming?', poll_id: poll2.id},
  {body: 'What do the clouds look like to you?', poll_id: poll2.id}])

p1q1 = AnswerChoice.create([{answer: 'Lemonade', question_id: questions1[0].id},
{answer: 'TLOP (pick this one)', question_id: questions1[0].id},
{answer: 'Not JayZ\'s album', question_id: questions1[0].id}])

p1q2 = AnswerChoice.create([{answer: 'It\'s the best', question_id: questions1[1].id},
{answer: 'I\' the greatest of all time', question_id: questions1[1].id},
{answer: 'All the above', question_id: questions1[1].id}])

p1q3 = AnswerChoice.create([{answer: 'You crazy', question_id: questions1[2].id},
{answer: 'You lost your damn mind!', question_id: questions1[2].id},
{answer: 'All the above', question_id: questions1[2].id}])

p2q1 = AnswerChoice.create([{answer: 'I dont know', question_id: questions2[0].id},
{answer: 'Ask the weatherman', question_id: questions2[0].id},
{answer: 'I dont care I like the rain', question_id: questions2[0].id}])

p2q2 = AnswerChoice.create([{answer: 'Yes', question_id: questions2[1].id},
{answer: 'No', question_id: questions2[1].id},
{answer: 'What\'s global warming?', question_id: questions2[1].id}])

p2q3 = AnswerChoice.create([{answer: 'Rubber duckies', question_id: questions2[2].id},
{answer: 'Icecream!', question_id: questions2[2].id},
{answer: 'Kanye', question_id: questions2[2].id}])

responses = Response.create([{respondent_id: 1, answer_id: p1q1[2].id },
  {respondent_id: 1, answer_id: p1q2[1].id },
  {respondent_id: 1, answer_id: p1q3[0].id },
  {respondent_id: 1, answer_id: p2q1[0].id },
  {respondent_id: 1, answer_id: p2q2[0].id },
  {respondent_id: 1, answer_id: p2q3[1].id },
  {respondent_id: 2, answer_id: p1q1[1].id },
  {respondent_id: 2, answer_id: p1q2[2].id },
  {respondent_id: 2, answer_id: p1q3[1].id },
  {respondent_id: 2, answer_id: p2q1[2].id },
  {respondent_id: 2, answer_id: p2q2[0].id },
  {respondent_id: 2, answer_id: p2q3[2].id },
  {respondent_id: 3, answer_id: p1q1[1].id },
  {respondent_id: 3, answer_id: p1q2[2].id },
  {respondent_id: 3, answer_id: p1q3[2].id },
  {respondent_id: 3, answer_id: p2q1[0].id },
  {respondent_id: 3, answer_id: p2q2[2].id },
  {respondent_id: 3, answer_id: p2q3[2].id }])
