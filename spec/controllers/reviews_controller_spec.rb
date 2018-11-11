require 'rails_helper'

RSpec.describe ReviewsController, type: :controller do
  describe "GET index" do
    it "has a 200 status code" do
      get :index
      expect(response.status).to eq(200)
    end
  end

  describe '#create' do
    let!(:rest) { FactoryBot.create(:restaurant) }
    it "creates a new restaurant" do
      post :create, params: { restaurant_id: rest.id,
                              reviewer_name: "Dotan Langsam Schwartz",
                              rating: 3,
                              comments: 'I like it here'}
      expect(response.status).to eq(200)
    end

    it "can't create a review without a restaurant_id" do
      post :create, params: { reviewer_name: "Dotan Langsam Schwartz",
                              rating: 3,
                              comments: 'I like it here'}
      expect(response.status).to eq(400)
    end

    it "creates a review without optional fields" do
      post :create, params: { restaurant_id: rest.id,
                              reviewer_name: "Dotan Langsam Schwartz",
                              rating: 3}
      expect(response.status).to eq(200)
    end

    it "can't create a review without rating" do
      post :create, params: { restaurant_id: rest.id,
                              reviewer_name: "Dotan Langsam Schwartz",
                              comments: 'I like it here'}
      expect(response.status).to eq(400)
    end

    it "can't create a review with rating out of range" do
      post :create, params: { restaurant_id: rest.id,
                              reviewer_name: "Dotan Langsam Schwartz",
                              rating: 6,
                              comments: 'I like it here'}
      expect(response.status).to eq(400)
    end

    it "creates two reviews for the same restaurant" do
      post :create, params: { restaurant_id: rest.id,
                              reviewer_name: "Dotan Langsam Schwartz",
                              rating: 3,
                              comments: 'I like it here'}
      expect(response.status).to eq(200)

      post :create, params: { restaurant_id: rest.id,
                              reviewer_name: "Pierre Schwartz",
                              rating: 3,
                              comments: 'I like it here too'}
      expect(response.status).to eq(200)
    end

  end

  describe '#update' do
    let!(:rest) { FactoryBot.create(:restaurant) }
    let!(:review) { FactoryBot.create(:review, restaurant_id: rest.id) }
    it "updates the comment name" do
      patch :update, params: {id: review.id, comments: 'This is an updated comment' }
      body = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(body['comments']).to eq('This is an updated comment')
    end

    it "fails to update a non existent id" do
      expect {
        patch :update, params: { id: review.id + 1, comments: 'This is an updated comment' }
      }.to raise_error(ActiveRecord::RecordNotFound)
    end
  end

  describe '#index' do
    let!(:rest1) { FactoryBot.create(:restaurant, name: 'rest1') }
    let!(:review1) { FactoryBot.create(:review, restaurant_id: rest1.id) }

    let!(:rest2) { FactoryBot.create(:restaurant, name: 'rest2') }
    let!(:review2) { FactoryBot.create(:review, restaurant_id: rest2.id) }

    it "retrieve all reviews" do
      get :index
      body = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(body.size).to eq 2
    end
  end

  describe '#destroy' do
    let!(:rest1) { FactoryBot.create(:restaurant, name: 'rest1') }
    let!(:review1) { FactoryBot.create(:review, restaurant_id: rest1.id) }

    let!(:rest2) { FactoryBot.create(:restaurant, name: 'rest2') }
    let!(:review2) { FactoryBot.create(:review, restaurant_id: rest2.id) }

    it "deletes the review by its id" do
      get :index
      body = JSON.parse(response.body)
      expect(body.size).to eq 2

      delete :destroy, params: { id: review1.id }
      expect(response.status).to eq 204

      get :index
      body = JSON.parse(response.body)
      expect(body.size).to eq 1
    end
  end

end
