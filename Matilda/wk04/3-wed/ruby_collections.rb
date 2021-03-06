
require 'pry'
### Arrays

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in `planeteers`.

# planeteers[1]

# Add "Heart" to the end of `planeteers`.

planeteers.push "Heart"

# Remove "Captain Planet" from the array (without using a method).

planeteers.delete 'Captain Planet'

# Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = planeteers.concat rangers


# Alphabetize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).


heroes.sort { |a, z| a <=> z }

# Randomize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

heroes.shuffle

# #### Bonus
#
# Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

heroes.sample

# Select all elements in `heroes` that begin with "B" using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

only_b = heroes.select do |str|
  str.start_with?('B')
end
puts only_b

# ### Hashes
#
# Initialize a hash called `ninja_turtle` with the properties `name`, `weapon` and `radical`. They should have values of "Michelangelo", "Nunchuks" and `true` respectively.

ninja_turtle = {
  :name => "Michelangelo",
  :weapon => "Nunchuks",
  :radical => true
}

# Add a key `age` to `ninja_turtle`. Set it to whatever numerical value you'd like.

ninja_turtle[:age] = 47

# Remove the `radical` key-value pair from `ninja_turtle`.

ninja_turtle.delete(:radical)


# Add a key `pizza_toppings` to `ninja_turtle`. Set it to an array of strings (e.g., `["cheese", "pepperoni", "peppers"]`).

ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]


# Access the first element of `pizza_toppings`.

ninja_turtle[:pizza_toppings][0]

# Produce an array containing all of `ninja_turtle`'s keys using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).


ninja_turtle.keys.flatten


# #### Bonus
#
# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).

ninja_turtle.each do |key, value|
  puts "#{key} is equal to #{value}"
end
