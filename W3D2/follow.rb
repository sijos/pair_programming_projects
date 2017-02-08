require_relative 'questions_db.rb'
require_relative 'user.rb'

class QuestionFollow

  def self.followers_for_question_id(question_id)
    # return array of User objects
    followers = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT users.id, fname, lname FROM users
        JOIN question_follows ON users.id = question_follows.user_id
        JOIN questions ON question_follows.question_id = questions.id
      WHERE question_follows.question_id = ?
    SQL

    followers.map { |follower| User.new(follower) }
  end

  def self.followed_questions_for_user_id(user_id)
    questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT questions.id, title, questions.user_id, body
      FROM questions
        JOIN question_follows ON questions.id = question_follows.question_id
        JOIN users ON question_follows.user_id = users.id
      WHERE question_follows.user_id = ?
    SQL

    questions.map { |question| Question.new(question) }
  end

  def self.most_followed_questions(n)
    # fetches the n most followed questions
    questions = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT questions.id, title, questions.user_id, body
      FROM questions
        JOIN question_follows ON questions.id = question_follows.question_id
      GROUP BY
        question_follows.question_id
      ORDER BY
        COUNT(question_follows.question_id) DESC
      LIMIT #{n}
    SQL

    questions.map { |question| Question.new(question) }
  end

end
