class StudentsController < ApplicationController

  def index
    @students = Student.all
    # @houses = House.where(id: student.house_id)
  end

  def show
    @student = Student.find(params[:id])
    @house = House.find(@student.house_id)
  end

  def new

  end

end
