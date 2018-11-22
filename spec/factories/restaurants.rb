require 'factory_bot'

FactoryBot.define do
  factory :restaurant do
    name { Faker::Name.unique.name }
    cuisine { Faker::Witcher.monster }
    address { Faker::Address.full_address }
    max_delivery_time { Faker::Number.between(30, 120) }
    ten_bis { Faker::Boolean.boolean }

    trait :asian do
      cuisine { "asian" }
    end

    trait :pizza do
      cuisine { "pizza" }
    end

    trait :vegan do
      cuisine { "vegan" }
    end

    trait :has_ten_bis do
      ten_bis { true }
    end

    trait :has_no_ten_bis do
      ten_bis { false }
    end

    factory :pizza_with_ten_bis, traits: [:pizza, :has_ten_bis]
    factory :vegan_with_no_ten_bis, traits: [:vegan, :has_no_ten_bis]
  end
end