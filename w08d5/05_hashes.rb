user = {
  "username" => "monkey",
  "password" => "fuzz",
  "logged_in" => false
}

p user
p user["username"]


user2 = {
  :username => "Elton",
  :password => "superstar",
  :logged_in => true
}

p user2
p user2[:username]

user3 = {
  username: "Elton",
  password: "superstar",
  logged_in: false
}

p user3
p user3[:username]

my_key = "password"
p user3[my_key.to_sym]
