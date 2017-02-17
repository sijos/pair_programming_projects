# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Cat.create!({name: 'KitKat', birth_date: Date.new(2014, 1, 1), age: 3, sex: 'M', color: 'black', description: 'Rules with iron fist'})
# Cat.create!({name: 'Mittens', birth_date: Date.new(2013, 1, 4), age: 4, sex: 'F', color: 'orange', description: 'Kitten mitten pioneer'})
# Cat.create!({name: 'Ghengis', birth_date: Date.new(2012, 4, 14), age: 4, sex: 'F', color: 'white', description: 'The one and only'})

CatRentalRequest.create!({cat_id: 1, start_date: Date.new(2017, 2, 1), end_date: Date.new(2017, 2, 10)})
CatRentalRequest.create!({cat_id: 2, start_date: Date.new(2016, 12, 1), end_date: Date.new(2017, 1, 1)})
CatRentalRequest.create!({cat_id: 3, start_date: Date.new(2017, 2, 4), end_date: Date.new(2017, 2, 13)})
