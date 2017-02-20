# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text
#  sub_id     :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  validates :title, :sub_id, :user_id, presence: true

  belongs_to :author,
  foreign_key: :user_id,
  class_name: 'User'

  belongs_to :sub

  has_many :post_subs
  has_many :subs,
    through: :post_subs,
    source: :sub
end
