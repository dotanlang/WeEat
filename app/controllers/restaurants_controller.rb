require_relative 'application_controller'

class RestaurantsController < ApplicationController

  def index
    render json: Restaurant.all
  end

  def create
    rest = Restaurant.create(restaurant_params)
    render json: rest
  end

  def destroy
    Restaurant.destroy(params[:id])
  end

  def update
    rest = Restaurant.find(params[:id])
    rest.update_attributes(restaurant_params)
    render json: rest
  end

  private

  def restaurant_params
    params.permit(:id, :name, :cuisine, :rating, :ten_bis, :address, :max_delivery_time)
  end
end
