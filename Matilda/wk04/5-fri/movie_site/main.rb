require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_query(sql)
  conn = PG.connect(dbname: 'moviesite')
  output = conn.exec(sql)
  conn.close
  return output
end


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
  testResult = run_query("select * from movies where title = '#{params[:abc]}';")
  if testResult.any?
    @title = testResult.first['title']
    @date = testResult.first['release_date']
    @duration = testResult.first['duration']
    @director = testResult.first['director']
    @actors = testResult.first['actors']
    @summary = testResult.first['summary']
    @imageposter = testResult.first['image']
    @website = testResult.first['website']
    erb :movie
  else
    result = HTTParty.get('http://omdbapi.com/?apikey=2f6435d9&t='+ params[:abc])
    @title = result["Title"]
    @date = result["Released"]
    @duration = result["Runtime"]
    @director = result["Director"]
    @actors = result["Actors"]
    @summary = result["Plot"].gsub("'", "")
    @imageposter = result["Poster"]
    @website = result["Website"]
    File.open('search_history.txt', 'a+') do |file|
        file.puts params[:abc]
    end
    sql = "insert into movies (title, release_date, duration, director, actors, summary, image, website) values ('#{@title}', '#{@date}','#{@duration}','#{@director}','#{@actors}','#{@summary}','#{@imageposter}','#{@website}');"
    run_query(sql)
    erb :movie
  end
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
