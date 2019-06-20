class HousesController < ApplicationController

  def index
    @houses = House.all
  end

  def show
    @house = House.where(id: params[:id])
    puts @house
    @students = Student.where(house_id: params[:id])

  end

end
