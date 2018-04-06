require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'


get '/' do
  @title = 0
  if params[:t] == ""
    redirect to('/')
  elsif params[:t] != nil
    redirect to('/movie')
  end
  erb :index
end 

get '/movie' do
  result = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&t='+ params[:t])
  @title = result["Title"]
  @date = result["Released"]
  @duration = result["Runtime"]
  @director = result["Director"]
  @summary = result["Plot"]
  @imageposter = result["Poster"]
  erb :movie
end

get '/about' do
  erb :about
end

get '/home' do
  redirect to('/')
end
