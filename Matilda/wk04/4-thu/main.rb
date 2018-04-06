require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'



get '/' do
  @price = 0
  if params[:stock] == ""
    redirect to('/')
  elsif params[:stock] != nil
    @price = StockQuote::Stock.quote(params[:stock]).latest_price
  end
  erb :index
end
