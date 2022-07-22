
# i = 0
# loop do
#   i += 1
#   break if i > 5 # p 1 through ?
#   p i
# end

ii = 0
while ii < 3 do
  ii += 1
  puts ii
end

p '========'

ii = 0
until ii > 3 do
  ii += 1
  puts ii
end

names = ['Cat', 'Dog', 'Fish', 'Scorpion']

for name in names do
  p "I have a #{name}"
end

names.each do |moniker|
  p "I have a #{moniker}!"
end

list_of_integers = [1,2,3,4,5,6]
select_list = list_of_integers.select do |num|
  num >= 3
end
p list_of_integers
p select_list


(5..10).each do |number|
  p number
end

13.times do |is_this_a_thing|
  p "thing: #{is_this_a_thing}"
end
