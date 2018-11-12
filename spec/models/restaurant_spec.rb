require 'rails_helper'

RSpec.describe Restaurant, type: :model do

  # validations
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:address) }

  it { should allow_value(0).for(:max_delivery_time) }
  it { should allow_value(100).for(:max_delivery_time) }
  it { should_not allow_value(-2).for(:max_delivery_time) }
  it { should_not allow_value("some string").for(:max_delivery_time) }

  # relations
  it { should have_many(:reviews) }

end
