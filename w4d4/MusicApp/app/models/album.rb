# == Schema Information
#
# Table name: albums
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  band_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  recording_type :string           not null
#

class Album < ActiveRecord::Base
  RECORDINGS = %w(studio live)

  validates :title, :band_id, presence: true
  validates :recording_type, presence: true, inclusion: RECORDINGS

  belongs_to :band
  has_many :tracks, dependent: :destroy
end
