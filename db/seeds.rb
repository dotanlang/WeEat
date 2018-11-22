# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.delete_all
Restaurant.delete_all

rest1 = Restaurant.create(name: 'Shi-Shi', cuisine: 'asian', ten_bis: false, address: 'Shlomo Ibn Gabirol St 33, Tel Aviv-Yafo', max_delivery_time: 40)
rest2 = Restaurant.create(name: 'Goodness', cuisine: 'vegan', ten_bis: true, address: 'King George St 41, Tel Aviv-Yafo', max_delivery_time: 60)
rest3 = Restaurant.create(name: 'Lila Pizza', cuisine: 'pizza', ten_bis: false, address: 'Merkhavya St 4, Tel Aviv-Yafo', max_delivery_time: 75)

Review.create(restaurant_id: rest1.id, reviewer_name: 'Dotan', rating:3, comments: 'healthy and tasty')
Review.create(restaurant_id: rest2.id, reviewer_name: 'Pierre', rating:0, comments: "hated it! cats can't eat vegan. where are the fish?")
Review.create(restaurant_id: rest3.id, reviewer_name: 'Oliver', rating:2, comments: 'love me some pizza')

