# == Schema Information
#
# Table name: shortened_urls
#
#  id         :integer          not null, primary key
#  short_url  :string
#  long_url   :text             not null
#  created_at :datetime
#  updated_at :datetime
#  user_id    :integer          not null
#

class ShortenedUrl < ActiveRecord::Base
  validates :long_url, presence: true, uniqueness: true
  validates :user_id, presence: true

  def self.random_code
    rand_string = SecureRandom.urlsafe_base64(12)
    while ShortenedUrl.exists?(short_url: rand_string)
      rand_string = SecureRandom.urlsafe_base64(12)
    end
    rand_string
  end

  def self.generate(user, long_url)
    ShortenedUrl.new(user_id: user.id, long_url: long_url, short_url: self.random_code)
  end

  def num_clicks
    self.visitors.count
  end

  def num_uniques
    self.uniq_visitors.count
  end

  def num_recent_uniques
    self.visits
    .where("created_at > '2017-02-08 23:41:18.76868'")
    .select(:user_id)
    .distinct
    .count
  end

  belongs_to :submitter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :visits,
    primary_key: :id,
    foreign_key: :url_id,
    class_name: :Visit

  has_many :visitors,
    through: :visits,
    source: :visited_user

  has_many :uniq_visitors,
    -> { distinct },
    through: :visits,
    source: :visited_user
end
