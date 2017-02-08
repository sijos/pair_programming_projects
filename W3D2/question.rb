require_relative 'questions_db.rb'
require_relative 'reply.rb'
require_relative 'model_base.rb'

class Question < ModelBase

  attr_accessor :body, :title, :user_id
  attr_reader :id

  def self.find_by_author_id(user_id)
    questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT * FROM questions WHERE user_id = ?
    SQL

    questions.map { |question| Question.new(question) }
  end

  def self.most_followed(n)
    QuestionFollow.most_followed_questions(n)
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @user_id = options['user_id']
    @body = options['body']
  end

  def author
    User.find_by_id(user_id)
  end

  def replies
    Reply.find_by_question_id(id)
  end

  def followers
    QuestionFollow.followers_for_question_id(id)
  end

  def likers
    QuestionLike.likers_for_question_id(id)
  end

  def num_likes
    QuestionLike.num_likes_for_question_id(id)
  end

  def most_liked(n)
    QuestionLike.most_liked_questions(n)
  end

  # def save
  #   if @id
  #     # update
  #     QuestionsDatabase.instance.execute(<<-SQL, @title, @body, @user_id, @id)
  #       UPDATE questions
  #       SET title = ?, body = ?, user_id = ?
  #       WHERE id = ?
  #     SQL
  #   else
  #     # create
  #     QuestionsDatabase.instance.execute(<<-SQL, @title, @body, @user_id)
  #       INSERT INTO questions (title, body, user_id)
  #       VALUES (?, ?, ?)
  #     SQL
  #
  #     @id = QuestionsDatabase.instance.last_insert_row_id
  #   end
  # end
end
