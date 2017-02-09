# == Schema Information
#
# Table name: visits
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  url_id     :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Visit < ActiveRecord::Base
  validates :user_id, :url_id, presence: true

  def self.record_visit!(user, shortened_url)
    self.new(user_id: user.id, url_id: shortened_url.id).save
  end

  belongs_to :visited_user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :visited_url,
    primary_key: :id,
    foreign_key: :url_id,
    class_name: :ShortenedUrl

end
