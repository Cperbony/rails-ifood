class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: :show

  def index
    @restaurants = Restaurant.near(params[:city] || 'São Paulo')
    filter_by_category if params[:category]
    render json: @restaurants
  end

  def show
    render json: @restaurants, product_categories: true
  end

  def search
  end

  private

  def filter_by_category
    @restaurants = @restaurants.select do |r|
      r.category.title == params[:category]
    end
  end
end
