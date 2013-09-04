class PlayersGames < ActiveRecord::Migration
  def change
    create_table :games_players do |t|
      t.belongs_to :player
      t.belongs_to :game
    end
       add_index :games_players, [:game_id, :player_id], :unique => :true
  end
end
