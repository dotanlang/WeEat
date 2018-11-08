# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.delete_all
Restaurant.create(name: 'Shi-Shi', cuisine: 'asian', rating: 3, ten_bis: false, address: 'Shlomo Ibn Gabirol St 33, Tel Aviv-Yafo', max_delivery_time: 40)
Restaurant.create(name: 'Goodness', cuisine: 'vegan', rating: 2, ten_bis: true, address: 'King George St 41, Tel Aviv-Yafo', max_delivery_time: 60)
Restaurant.create(name: 'Lila Pizza', cuisine: 'pizza', rating: 3, ten_bis: false, address: 'Merkhavya St 4, Tel Aviv-Yafo', max_delivery_time: 75)