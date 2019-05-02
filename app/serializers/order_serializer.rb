class OrderSerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :restaurant_id, :total_value, :status
end
