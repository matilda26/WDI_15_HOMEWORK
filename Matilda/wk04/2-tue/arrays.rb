days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

#remove Sunday and add it to the beginning to the array
days_of_the_week.pop
days_of_the_week.unshift('Sunday')

#separate into weekdays and weekends
days_of_the_week = [
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  ['Saturday', 'Sunday']
]
#remove weekends
days_of_the_week.pop

#sort remaining days alphabetically
days_of_the_week.sort
puts days_of_the_week
