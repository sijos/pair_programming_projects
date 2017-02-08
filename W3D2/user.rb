require_relative 'questions_db.rb'
require_relative 'question.rb'
require_relative 'model_base.rb'

class User < ModelBase
  attr_accessor :fname, :lname
  attr_reader :id

  def self.find_by_name(fname, lname)
    user = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT * FROM users WHERE fname = ? AND lname = ?
    SQL

    return nil if user.empty?
    User.new(user.first)
  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  # def save
  #   if @id
  #     # update
  #     QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname, @id)
  #       UPDATE
  #         users
  #       SET
  #         fname = ?, lname = ?
  #       WHERE
  #         id = ?
  #     SQL
  #   else
  #     # create
  #     QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname)
  #       INSERT INTO
  #         users (fname, lname)
  #       VALUES
  #         (?, ?)
  #     SQL
  #
  #     @id = QuestionsDatabase.instance.last_insert_row_id
  #   end
  # end

  def authored_questions
    Question.find_by_author_id(id)
  end

  def authored_replies
    Reply.find_by_user_id(id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(id)
  end

  def liked_questions
    QuestionLike.liked_questions_for_user_id(id)
  end

  def average_karma
    # write single query that returns 1) # of questions asked by user
    # and 2) # of likes on those questions
    karma = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT (CAST(COUNT(question_likes.question_id) AS FLOAT) /
        COUNT(DISTINCT(questions.id))) AS karma
      FROM questions
      LEFT OUTER JOIN question_likes ON questions.id = question_likes.question_id
      WHERE questions.user_id = #{@id}
    SQL

    return nil if karma.empty?
    karma.first["karma"]
  end
end
