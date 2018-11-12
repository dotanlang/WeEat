class Review < ApplicationRecord
  belongs_to :restaurant

  validates :restaurant_id, :reviewer_name, :rating, presence: true
  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 3 }, :allow_nil => true
end
