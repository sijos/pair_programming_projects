# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Band.create!(name: "Pink Floyd")
# Band.create!(name: "Radiohead")
# Band.create!(name: "Red Hot Chili Peppers")
# Band.create!(name: "Led Zeppelin")
# Band.create!(name: "Jimi Hendrix")
# Band.create!(name: "Nickelback trollololol")

Album.create!(title: "The Wall", band_id: 1, recording_type: "studio")
Album.create!(title: "OK Computer", band_id: 2, recording_type: "studio")
Album.create!(title: "Hail to the Theif", band_id: 2, recording_type: "studio")
Album.create!(title: "Blood Sugar Sex Magic", band_id: 3, recording_type: "studio")
Album.create!(title: "How The West Was Won", band_id: 4, recording_type: "live")
Album.create!(title: "Swim", band_id: 7, recording_type: "studio")
Album.create!(title: "Up In Flames", band_id: 7, recording_type: "studio")
Album.create!(title: "Our Love", band_id: 7, recording_type: "studio")
