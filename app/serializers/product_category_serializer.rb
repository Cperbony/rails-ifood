class ProductCategorySerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :title

  has_many :products
end
