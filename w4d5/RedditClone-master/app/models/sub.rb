# == Schema Information
#
# Table name: subs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Sub < ActiveRecord::Base
  validates :title, :description, presence: true

  has_many :subscriptions
  has_many :moderators
  has_many :posts

  has_many :sub_mods,
    through: :moderators,
    source: :user

  has_many :users,
    through: :subscriptions,
    source: :user

  has_many :post_subs
  has_many :x_posts,
    through: :post_subs,
    source: :post
end
