class CategorySerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :title, :image_url

  def image_url
    rails_blob_url(object.image) if object.image.attached?
    #rails_blob_path(object.image)
  end
end
