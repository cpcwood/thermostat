require 'sinatra'

class Thermostat < Sinatra::Base

  get '/' do
    erb :homepage
  end



  run! if $0 == __FILE__

end
