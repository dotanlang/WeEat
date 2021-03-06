require_relative '../../app/controllers/restaurants_controller'
require 'json'


describe RestaurantsController, type: :controller do
  describe "GET index" do
    it "has a 200 status code" do
      get :index
      expect(response.status).to eq(200)
    end
  end

  describe '#create' do
    it "creates a new restaurant" do
      post :create, params: { name: 'Artzieli11',
                                    cuisine: 'pizza',
                                    ten_bis: true,
                                    address: 'street in tel aviv',
                                    max_delivery_time: 45 }
      expect(response.status).to eq(200)
      rest_id = JSON.parse(response.body)['id']
      expect(Restaurant.count()).to eq(1)
      expect(Restaurant.find_by_name('Artzieli11')['id']).to eq(rest_id)
    end

    it "creates a restaurant without optional fields" do
      post :create, params: { name: 'Artzieli', address: 'street in tel aviv' }
      expect(response.status).to eq(200)
      rest_id = JSON.parse(response.body)['id']
      expect(Restaurant.count()).to eq(1)
      expect(Restaurant.find_by_name('Artzieli')['id']).to eq(rest_id)
    end

    it "can't create a restaurant without a name" do
      post :create, params: { address: 'street in tel aviv' }
      expect(response.status).to eq(400)
      expect(Restaurant.count()).to eq(0)
    end

    it "can't create a restaurant with a name that already exists" do
      post :create, params: { name: 'Artzieli1',
                              cuisine: 'pizza',
                              ten_bis: true,
                              address: 'street in tel aviv',
                              max_delivery_time: 45 }
      expect(response.status).to eq(200)
      expect(Restaurant.count()).to eq(1)

      post :create, params: { name: 'Artzieli1',
                              cuisine: 'pizza',
                              ten_bis: true,
                              address: 'street in tel aviv',
                              max_delivery_time: 45 }
      expect(response.status).to eq(409)
      expect(Restaurant.count()).to eq(1)
    end

  end

  describe '#update' do
    let!(:rest) { FactoryBot.create(:restaurant) }
    it "updates the restaurant's name" do
      patch :update, params: {id: rest.id, name: 'Chez Pierre' }
      body = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(body['name']).to eq('Chez Pierre')
    end

    it "fails to update a non existent id" do
      expect {
        patch :update, params: { id: rest.id + 1, name: 'Chez Pierre' }
      }.to raise_error(ActiveRecord::RecordNotFound)
    end
  end

  describe '#index' do
    let!(:rest1) { FactoryBot.create(:restaurant) }
    let!(:rest2) { FactoryBot.create(:restaurant) }

    it "retrieve all restaurants" do
      get :index
      body = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(body.size).to eq 2
    end
  end

  describe '#destroy' do
    let!(:rest1) { FactoryBot.create(:restaurant) }
    let!(:rest2) { FactoryBot.create(:restaurant) }

    it "deletes the restaurant by it's id" do
      delete :destroy, params: { id: rest1.id }
      expect(response.status).to eq 204

      get :index
      body = JSON.parse(response.body)
      expect(body.size).to eq 1
    end
  end

end