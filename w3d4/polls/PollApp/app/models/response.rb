# == Schema Information
#
# Table name: responses
#
#  id            :integer          not null, primary key
#  respondent_id :integer          not null
#  answer_id     :integer          not null
#

class Response < ActiveRecord::Base
  validates :respondent_id, :answer_id, presence: true
  validate :respondent_already_answered?

  def sibling_responses
    self.question.responses.where.not(id: self.id)
  end

  def respondent_already_answered?
    if self.sibling_responses.exists?(id: self.id)
      errors[:response] << "can't answer same question twice"
    end
  end

  belongs_to :respondent,
    class_name: :User,
    primary_key: :id,
    foreign_key: :respondent_id

  belongs_to :answer_choice,
    class_name: :AnswerChoice,
    primary_key: :id,
    foreign_key: :answer_id

  has_one :question,
    through: :answer_choice,
    source: :question

end
