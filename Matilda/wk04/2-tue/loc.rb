# use textfile.txt

puts 'ruby loc.rb'
print "Enter filename: "
file_name = gets.chomp

lines = IO.readlines(file_name)
puts "#{file_name} has #{lines.length} lines"
