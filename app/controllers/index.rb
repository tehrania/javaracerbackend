get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/play' do
# p params
#   Player.create(pa)

  erb :track
end
