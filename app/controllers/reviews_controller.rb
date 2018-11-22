class ReviewsController < ApplicationController

  def index
    render json: Review.all
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    if @review.valid?
      @review.save

      update_restaurant_rating(@review.restaurant_id)
      render json: @review
    else
      render json: @review.errors, status: :bad_request
    end
  end

  def destroy
    Review.destroy(params[:id])
  end

  def update
    rest = Review.find(params[:id])
    rest.update_attributes(update_review_params)
    if params[:rating].present?
      update_restaurant_rating(rest.restaurant_id)
    end

    render json: rest
  end

  private

  def review_params
    params.permit(:id, :restaurant_id, :reviewer_name, :rating, :comments)
  end

  def update_review_params
    params.permit(:rating, :comments)
  end

  def update_restaurant_rating(rest_id)
    rest = Restaurant.find(rest_id)
    new_rating = Review.where(restaurant_id: @review.restaurant_id).average(:rating).round(0)
    rest.rating = new_rating
    rest.save
  end
end