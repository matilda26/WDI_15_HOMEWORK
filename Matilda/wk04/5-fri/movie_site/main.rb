require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'


get '/' do
  @title = 0
  if params[:s] == ""
    redirect to('/')
  elsif params[:s] != nil
    redirect to('/search')
  end
  erb :index
end

get '/search' do
  options = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&s='+ params[:s])
  movies = options["Search"]
  $titleOptions = []
  movies.each do |movie|
     $titleOptions.push(movie["Title"])
  end
  if $titleOptions.length == 1
    redirect to('/movie')
  end
  erb :search
end

get '/movie' do
  if $titleOptions.length == 1
    params[:abc] = $titleOptions[0]
  end
  result = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&t='+ params[:abc])
  @title = result["Title"]
  @date = result["Released"]
  @duration = result["Runtime"]
  @director = result["Director"]
  @summary = result["Plot"]
  @imageposter = result["Poster"]
  File.open('search_history.txt', 'a+') do |file|
      file.puts params[:abc]
  end
  erb :movie
end

get '/about' do
  erb :about
end

get '/home' do
  redirect to('/')
end

get '/history' do
@history = IO.readlines('search_history.txt')
 erb :history
end
