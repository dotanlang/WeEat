require 'factory_bot'

FactoryBot.define do
  factory :review do
    restaurant_id { Faker::Number.between(1, 30) }
    reviewer_name { Faker::Name.unique.name }
    rating { Faker::Number.between(0, 3) }
    comments { Faker::NewGirl.quote }
  end
end
