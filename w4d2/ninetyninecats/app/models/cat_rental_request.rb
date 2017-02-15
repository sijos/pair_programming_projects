# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           not null
#  created_at :datetime
#  updated_at :datetime
#

class CatRentalRequest < ActiveRecord::Base
  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion:   { in: %w(PENDING APPROVED DENIED) }
  validate :no_overlapping_approved_requests_for_cat

  def overlapping_requests
    start = self.start_date
    finish = self.end_date
    CatRentalRequest.where("start_date BETWEEN(#{start} AND #{finish})
      OR end_date BETWEEN(#{start} AND #{finish})")
  end

  def overlapping_approved_requests
    overlapping_requests.where("status = 'APPROVED'")
  end

  def no_overlapping_approved_requests_for_cat
    if overlapping_approved_requests.exists?(cat_id: self.cat_id)
      errors[:cat_id] << "cat is already rented during that time"
    end
  end

  belongs_to :cat
end
