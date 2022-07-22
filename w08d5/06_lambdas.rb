pets = ['Snoopy', 'Toki', 'Kaiser', 'Darth Vader', 'Theodore']

# pets.each do |name|
# p "Hello #{name}"
# end

# pets.each { |name|
#   p "Hello #{name}"
# }

do_thing = lambda { |moniker| p "Hello #{moniker}!!!!" }
do_thing_two = Proc.new { |moniker| p "Hello #{moniker}" }

pets.each &do_thing_two
