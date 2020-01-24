require 'sinatra'
require 'json'

class Thermostat < Sinatra::Base

  get '/' do
    erb :homepage
  end

  post '/temperature' do
    push = JSON.parse(request.body.read)
    File.open("public/my_data.json","w"){ |f| f << push.to_json }
  end



  run! if $0 == __FILE__

end
