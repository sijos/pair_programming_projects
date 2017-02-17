# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  song_name  :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  lyrics     :text
#

class Track < ActiveRecord::Base
  validates :song_name, :album_id, presence: true

  belongs_to :album
end
