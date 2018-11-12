require_relative 'application_controller'

class RestaurantsController < ApplicationController

  def index
    render json: Restaurant.all
  end

  def new
    @rest = Restaurant.new
  end

  def create
    @rest = Restaurant.new(restaurant_params)
    if @rest.valid?
      @rest.save
      render json: @rest
    elsif @rest.errors[:name_exists].present?
        render json: @rest.errors, status: :conflict
    else
      render json: @rest.errors, status: :bad_request
    end
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
    params.permit(:id, :name, :cuisine, :ten_bis, :address, :max_delivery_time)
  end

end
