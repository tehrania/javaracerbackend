class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many_and_belongs_to :players
end
