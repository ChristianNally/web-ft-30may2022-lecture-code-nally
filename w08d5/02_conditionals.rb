num = 5

# if num > 2
#   p "num is larger than 2"
# else
#   p "num must be 2 or less"
# end

first_name = 'Nally'
second_name = 'Fuzz'

# FULL_NAME = "Monkey Fuzz"

# if first_name == 'Monkey'
#   p "M"
# elsif second_name == 'Fuzz'
#   p "F"
# else
#   p 'I do not recognize you'
# end


# if ((name !== 'Paul')) {
#   console.log('tada!');
# }

# unless first_name == 'Monkey'
#   p 'who are you?'
# end

puts "I know who you are" if first_name == 'Monkey'
puts "Who are you?" unless first_name == 'Monkey'

num = 77
puts (num < 10) ? "single digits" : "multiple digits"
