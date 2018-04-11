require 'pry'

class Monkey
  def initialize(name, species)
    @name = name
    @species = species
    @food_eaten = []
  end

  def eat(food)
    @food_eaten.push(food)
  end

  def introduce
    todayFood = @food_eaten.join(' and ')
    puts "Hi! My name is #{@name}, I am a #{@species}. I had #{todayFood} for brunch!"
  end
end
