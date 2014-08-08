require 'sinatra'
require 'httparty'
require 'geokit'

set :root, File.dirname(__FILE__)
# set :views, Proc.new { File.join(root, "..", "views") }



  get '/' do
    erb :index
  end

  post '/event' do
  	longitude, latitude = params.values
    uri = "http://www.skiddle.com/api/v1/events/?api_key=6bfc32decec200ac7098d9e2f91d47de&latitude=#{latitude}&longitude=#{longitude}&radius=50&Eventcode=FEST"
    puts uri
    response = HTTParty.get(uri)
  	response.to_json
  end

