class RestaurantsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Restaurant.all
  end

  def create
    Rails.logger.info 'CREATE!!'
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
    params.require(:restaurant).permit(:id, :name, :cuisine, :rating, :ten_bis, :address, :max_delivery_time)
  end
end
