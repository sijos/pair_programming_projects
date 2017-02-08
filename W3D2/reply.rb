require_relative 'questions_db.rb'
require_relative 'model_base.rb'

class Reply < ModelBase
  def self.find_by_user_id(user_id)
    replies = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT * FROM replies WHERE user_id = ?
    SQL

    replies.map { |reply| Reply.new(reply) }
  end

  def self.find_by_question_id(question_id)
    replies = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT * FROM replies WHERE question_id = ?
    SQL

    replies.map { |reply| Reply.new(reply) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
    @parent_id = options['parent_id']
    @body = options['body']
  end

  def author
    User.find_by_user_id(user_id)
  end

  def question
    Question.find_by_id(question_id)
  end

  def parent_reply
    find_by_id(parent_id)
  end

  def child_replies
    child = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT * FROM replies WHERE parent_id = #{@id}
    SQL

    return nil if child.empty?
    Reply.new(child.first)
  end

  # def save
  #   if @id
  #     # update
  #     QuestionsDatabase.instance.execute(<<-SQL, @question_id, @user_id, @parent_id, @body, @id)
  #       UPDATE replies
  #       SET question_id = ?, user_id = ?, parent_id = ?, body = ?
  #       WHERE id = ?
  #     SQL
  #   else
  #     # create
  #     QuestionsDatabase.instance.execute(<<-SQL, @question_id, @user_id, @parent_id, @body)
  #       INSERT INTO replies (question_id, user_id, parent_id, body)
  #       VALUES (?, ?, ?, ?)
  #     SQL
  #
  #     @id = QuestionsDatabase.instance.last_insert_row_id
  #   end
  # end

end
