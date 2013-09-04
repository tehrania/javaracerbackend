class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many_and_belongs_to :games
  validates :name, uniqueness: true 
end
