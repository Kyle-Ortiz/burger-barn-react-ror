class User < ApplicationRecord
     has_secure_password
     has_many :orders
     validates :username, presence: true, uniqueness: true

     def self.most_orders
          # current_max_count = 0 
          # current_user_id = nil
          # User.all.each do |user|
          #      if user.order.length > current_max_count
          #           current_max_count = user.order.length
          #           current_user_id = user.id
          #      end
          # end
          # return current_user_id
          User.all.max_by {|user| user.orders.length}
         
     end


end
