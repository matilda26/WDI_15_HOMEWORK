require 'pry'


puts "pick a number between 1 and 99: "

class Say
  def initialize(input)
    @input = input
  end
  def to_english
    words = {0=>"zero", 1=>"one", 2=>"two", 3=>"three", 4=>"four", 5=>"five", 6=>"six", 7=>"seven", 8=>"eight", 9=>"nine", 10=>"ten", 11=>"eleven", 12=>"twelve", 13=>"thirteen", 14=>"fourteen", 15=>"fifteen", 16=>"sixteen", 17=>"seventeen", 18=>"eighteen", 19=>"nineteen", 20=>"twenty", 30=>"thirty", 40=>"forty", 50=>"fifty", 60=>"sixty", 70=>"seventy", 80=>"eighty", 90=>"ninety"}
    if @input <= 0 || @input > 99
      puts "sorry, #{@input} is not in range. Number must be between 1 and 99 inclusive"
    elsif @input.to_s.length == 1
      puts words[input]
    elsif
      indiv_num = @input.to_s.split('').map(&:to_i)
      indiv_num[0] = indiv_num[0]*10
      puts "#{words[indiv_num[0]]} #{words[indiv_num[1]]}"
    end
  end
end
# binding.pry
