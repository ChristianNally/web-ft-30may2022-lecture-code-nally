class Car

  def initialize color, year, model
    @color = color
    @year = year
    @model = model
  end

  # def color= new_color
  #   @color = new_color
  # end

  # def color
  #   @color
  # end

  attr_accessor :year
  attr_reader :color
  attr_writer :model
end


my_car = Car.new "red", 2007, "matrix"
p my_car

my_car.color = "green"
p my_car.color


p my_car.year
my_car.year = 2010
p my_car


