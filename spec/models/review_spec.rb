require 'rails_helper'

RSpec.describe Review, type: :model do

  # validations
  it { should validate_presence_of(:restaurant_id) }
  it { should validate_presence_of(:reviewer_name) }
  it { should validate_presence_of(:rating) }

  it { should allow_value(0).for(:rating) }
  it { should allow_value(3).for(:rating) }
  it { should_not allow_value(-2).for(:rating) }
  it { should_not allow_value(5).for(:rating) }
  it { should_not allow_value("some string").for(:rating) }

  # relations
  it { should belong_to(:restaurant) }

end
