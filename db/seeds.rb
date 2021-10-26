# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

items = [
     ["Classic Cheeseburger", "Same as the classic hamburger, just add cheese", "2"],
     ["Bacon Cheeseburger", "Get our delicious cheeseburger but with our fresh, made to order premium bacon and caramelized onions", "2"],
     ["The not a Burger", "Vegetarian friendly made with fresh black bean patties", "2"],
     ["Ultra Burger", "Three patties, onions, bacon, cheese, amazing.", "2"],
     ["Grilled Chicken", "Marinated Grilled Chicken served with loaded mashed potatoes and steamed broccoli", "3"],
     ["Fried Chicken Strips", "Thick juicy tenders, fried in oil, with a side of secret sauce and freaky fries", "3"],
     ["Grilled Chicken Salad", "Same as the classic hamburger, just add cheese", "3"],
     ["Chicken Sandwich", "Fried chicken patty with pickles, letuce, and spicy mayo", "3"],
     ["Chicken nuggets", "Nuggies with fries and secret sauce", "3"],
     ["Mac & Cheese", "The cheesiest mac this side of the Mississippi", "4"],
     ["Side House Salad", "Salad with carrots, tomatoes, onions, croutons, mixed cheese dressed in ranch dressing", "4"],
     ["Fries", "Cajun seasons fries, secret sauce and ketchup on side", "4"],
     ["Coke", "Soda from Coca-Cola", "5"],
     ["Dr. Pepper", "Dr.Pepper", "5"],
     ["Water", "Water", "5"],
     ["Iced Tea", "Unsweet Iced Tea", "5"],
     ["Sweet Tea", "Sweet Iced Tea", "5"],
     ["Coffee", "Black Coffee", "5"],
     ["Fudge Brownies", "Fresh chocoloate fudge brownies made daily", "6"],
     ["Strawberry Cheesecake", "Best Cheesecake in town, with strawberry fruit and sauce", "6"],
     ["Sugar Cookies", "Just a simple cookie", "6"]
]

items.map do |name, description,category_id|
     Item.create(name: name, description: description, category_id: category_id)
end