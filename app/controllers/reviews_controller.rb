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
    rest.update_attributes(review_params)
    render json: rest
  end

  private

  def review_params
    params.permit(:id, :restaurant_id, :reviewer_name, :rating, :comments)
  end
end