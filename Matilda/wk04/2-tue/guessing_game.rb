puts 'Welcome to the guessing game!'
print 'How big do you want this game to be? 1 to : '

top_number = gets.chomp.to_i

print "Guess a number between 1 - #{top_number}: "
secret = rand(1..top_number)
guess = gets.chomp.to_i

while guess != secret
  if guess < secret
    print 'Higher... Guess again: '
    guess = gets.chomp.to_i
  elsif guess > secret
    print 'Lower... Guess again: '
    guess = gets.chomp.to_i
  end
end

puts 'You win!'
