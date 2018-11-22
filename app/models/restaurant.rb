require_relative '../../app/models/validations/restaurant_name_validator'

class Restaurant < ApplicationRecord
  has_many :reviews

  validates_with NameValidator, on: :create
  validates :name, :address, presence: true
  validates :max_delivery_time, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, :allow_nil => true

end



