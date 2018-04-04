require 'pry'


# A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]

# How would you return the string "Erik"?

puts a[1]

# How would you add your name to the array?

a.push "Matilda"


# B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?
puts h[1]

# How would you return the string "Two"?
puts h[:two]

# How would you return the number 2?
puts h["two"]

# How would you add {3 => "Three"} to the hash?
h[3] = "Three"

# How would you add {:four => 4} to the hash?

h[:four] = 4

# C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
"It's true!"

# What is the return value of is["Erik" == "Jonathan"]?
"It's false"

# What is the return value of is[9 > 10]?
"It's false"

# What is the return value of is[0]?
# undefined

# What is the return value of is["Erik"]?
# undefined

# D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
puts users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push 7

# How would you add yourself to the users hash?
users["Matilda"] = {}

# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].sort.first

# How would you return an array of Anil's favorite numbers that are also even?
evens = users["Anil"][:favorite_numbers].select.each_with_index do |i|
  i.even?
end
puts evens

# How would you return an array of the favorite numbers common to all users?
common = users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Jonathan"][:favorite_numbers]
puts common

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
combined_fav_numbers = users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers] + users["Jonathan"][:favorite_numbers]

puts combined_fav_numbers.sort.uniq
