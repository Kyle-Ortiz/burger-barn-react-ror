class OrdersController < ApplicationController

     def index
          
     end

     def show
          user = User.find(params[:user_id])
          render json: user.orders
     end

     # def update

     # end

     def create
          order = Order.create!(order_hash: params[:order_hash], user_id: params[:user_id])
          render json: order.to_json(except: [:created_at, :updated_at]), status: :created
     end
end