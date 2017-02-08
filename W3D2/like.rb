require_relative 'questions_db.rb'
require_relative 'user.rb'

class QuestionLike

  def self.likers_for_question_id(question_id)
    # return array of User objects
    likers = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT users.id, fname, lname FROM users
        JOIN question_likes ON users.id = question_likes.user_id
        JOIN questions ON question_likes.question_id = questions.id
      WHERE question_likes.question_id = ?
    SQL

    likers.map { |liker| User.new(liker) }
  end

  def self.num_likes_for_question_id(question_id)
    likes = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT COUNT(question_id)
      FROM question_likes
      WHERE question_id = ?
    SQL
  end

  def self.liked_questions_for_user_id(user_id)
    questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT questions.id, title, questions.user_id, body
      FROM questions
        JOIN question_likes ON questions.id = question_likes.question_id
        JOIN users ON question_likes.user_id = users.id
      WHERE question_likes.user_id = ?
    SQL

    questions.map { |question| Question.new(question) }
  end

  def self.most_liked_questions(n)
    # fetches the n most liked questions
    questions = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT questions.id, title, questions.user_id, body
      FROM questions
        JOIN question_likes ON questions.id = question_likes.question_id
      GROUP BY
        question_likes.question_id
      ORDER BY
        COUNT(question_likes.question_id) DESC
      LIMIT #{n}
    SQL

    questions.map { |question| Question.new(question) }
  end
end
