
class NameValidator < ActiveModel::Validator
  def validate(record)
    if record.blank?
      record.errors.add(:base, "Name can't be empty")
      return false
    elsif Restaurant.where(name: record.name).exists?
      record.errors.add(:name_exists, "A restaurant with this name already exists")
      return false
    end
  end
end

class Restaurant < ApplicationRecord
  has_many :reviews

  validates_with NameValidator
  validates :name, :address, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 3 }, :allow_nil => true
  validates :max_delivery_time, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, :allow_nil => true

  def rating
    Review.where(restaurant_id: self.id).average(:rating)
  end
end



