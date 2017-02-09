# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email: 'email1')
User.create(email: 'email2')
User.create(email: 'email3')

ShortenedUrl.generate(User.first, 'longurl1').save
ShortenedUrl.generate(User.last, 'longurl2').save
ShortenedUrl.generate(User.last, 'longurl3').save

Visit.create(user_id: 1, url_id: 3)
Visit.create(user_id: 1, url_id: 2)
Visit.create(user_id: 2, url_id: 1)
Visit.create(user_id: 3, url_id: 1)
Visit.create(user_id: 3, url_id: 3)
Visit.create(user_id: 2, url_id: 3)
