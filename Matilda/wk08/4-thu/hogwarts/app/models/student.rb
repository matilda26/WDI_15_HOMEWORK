class Student < ActiveRecord::Base
  belongs_to :houses
  # mount_uploader :images, ImageUploader
end
