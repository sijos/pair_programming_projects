# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  birth_date  :date             not null
#  age         :integer          not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#  color       :string           not null
#

class Cat < ActiveRecord::Base
  validates :name, :birth_date, :age, :sex, :color, presence: true
  validates :color, inclusion: { in: %w(black brown white tan yellow orange green),
    message: "%{value} is not a valid color" }
  validates :sex, inclusion: { in: %w(M F), message: "Sex can only be M or F"}

  def calc_age
    ((Date.today - self.birth_date) / 365).to_i
  end

  has_many :cat_rental_requests, :dependent => :destroy
end
