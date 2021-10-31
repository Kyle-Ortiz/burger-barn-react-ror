# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Creating database"
# items = [
#      ["Classic Cheeseburger", "Same as the classic hamburger, just add cheese", "2","$8.99","https://images.unsplash.com/photo-1603508102981-f44b20e0c124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
#      ["Bacon Cheeseburger", "Get our delicious cheeseburger but with our fresh, made to order premium bacon and caramelized onions", "2", "$10.99", "https://images.unsplash.com/photo-1551360021-0ff7982d13dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1210&q=80"],
#      ["The not a Burger", "Vegetarian friendly made with fresh black bean patties", "2","$7.99","https://images.unsplash.com/photo-1585730316463-715e64340a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1325&q=80"],
#      ["Ultra Burger", "Three patties, onions, bacon, cheese, amazing.", "2","$13.99","https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"],
#      ["Grilled Chicken", "Marinated Grilled Chicken served with loaded mashed potatoes and steamed broccoli", "3","$8.99","https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
#      ["Fried Chicken Strips", "Thick juicy tenders, fried in oil, with a side of secret sauce and freaky fries", "3","$9.99","https://images.unsplash.com/photo-1619019187211-adf2f6119afd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
#      ["Grilled Chicken Salad", "House Salad Topped with Marinated Grilled Chiken", "3","$8.99","https://images.unsplash.com/photo-1582034986517-30d163aa1da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"],
#      ["Chicken Sandwich", "Fried chicken patty with pickles, letuce, and spicy mayo", "3","$9.99","https://images.unsplash.com/photo-1610150157941-f7bcc26f8914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
#      ["Chicken nuggets", "Nuggies with fries and secret sauce", "3","$7.99","https://images.unsplash.com/photo-1619881590738-a111d176d906?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"],
#      ["Mac & Cheese", "The cheesiest mac this side of the Mississippi", "4","$3.99","https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
#      ["Side House Salad", "Salad with carrots, tomatoes, onions, croutons, mixed cheese dressed in ranch dressing", "4","$3.99","https://images.unsplash.com/photo-1568158958563-c13c713d69f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"],
#      ["Fries", "Cajun seasons fries, secret sauce and ketchup on side", "4","$4.99","https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
#      ["Coke", "Soda from Coca-Cola", "5","$1.99","https://images.unsplash.com/photo-1554866585-cd94860890b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80"],
#      ["Dr. Pepper", "Dr.Pepper", "5","$1.99","https://images.unsplash.com/photo-1581996323441-538096e854b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"],
#      ["Water", "Water", "5","$0.00","https://images.unsplash.com/photo-1554140426-5e830b73a5e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
#      ["Iced Tea", "Unsweet Iced Tea", "5","$0.99","https://images.unsplash.com/photo-1601390395693-364c0e22031a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80"],
#      ["Sweet Tea", "Sweet Iced Tea", "5","$0.99","https://images.unsplash.com/photo-1601390395693-364c0e22031a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80"],
#      ["Coffee", "Black Coffee", "5","$0.99","https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"],
#      ["Fudge Brownies", "Fresh chocoloate fudge brownies made daily", "6","$2.99","https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2494&q=80"],
#      ["Strawberry Cheesecake", "Best Cheesecake in town, with strawberry fruit and sauce", "6","$3.99","https://images.unsplash.com/photo-1621955511667-e2c316e4575d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
#      ["Sugar Cookies", "Just a simple cookie", "6","$1.99","https://images.unsplash.com/photo-1621236378699-8597faf6a176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=723&q=80"]
# ]

# categories= [
#      ["Appetizers","https://images.unsplash.com/photo-1607098665874-fd193397547b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
# ["Burgers","https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"],
# ["Chicken","https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"],
# ["Sides","https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
# ['Drinks',"https://images.unsplash.com/photo-1497534446932-c925b458314e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=944&q=80"],
# ['Desserts',"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"]
# ]

# categories.map do |category,image|
#      Category.create!(name: category, images: image)
# end

# items.map do |name, description,category_id,price,image|
#      Item.create!(name: name, description: description, category_id: category_id, price: price, image: image)
# end

appetizers = [
     ["Southwest Eggrolls","Our take on the famous asian eggroll with crispy tortilla shells filled with meat, cheese, and vegetables","1","$7.99","https://images.unsplash.com/photo-1606525437679-037aca74a3e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
     ["Chips and Queso","Creamy Cheese Dip with seasoned tortilla chips","1","$5.99","https://images.unsplash.com/photo-1572040975635-c561ad4f2fd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
     ["Fried Pickles","Dill pickles slices battered and fried to perfection, served wit ranch","1","$6.99","https://media.istockphoto.com/photos/delicious-battered-fried-pickles-picture-id494090889?s=612x612"],
     ["Boneless Buffalo Wings","Spicy boneless buffalo wings served ranch and blue cheese","1","$8.99","https://images.unsplash.com/photo-1608039755401-742074f0548d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"],
     ["Table Nachos","A table sized serving of ground beef nachos with every topping you can think of, for those large parties","1","$14.99","https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"]
]
appetizers.map do |name, description,category_id,price,image|
     Item.create!(name: name, description: description, category_id: category_id, price: price, image: image)
end


puts "Database seeded"