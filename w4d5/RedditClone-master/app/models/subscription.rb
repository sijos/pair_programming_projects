# == Schema Information
#
# Table name: subscriptions
#
#  id      :integer          not null, primary key
#  user_id :integer          not null
#  sub_id  :integer          not null
#

class Subscription < ActiveRecord::Base
  validates :user_id, :sub_id, presence: true

  belongs_to :user
  belongs_to :sub
end
