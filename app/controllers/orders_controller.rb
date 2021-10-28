class OrdersController < ApplicationController

     def index
          render json: {yo: "mama"}
     end

     def show
          user = User.find(params[:user_id])
          render json: user.orders
     end

     def create
          order = Order.create!(order_hash: params[:order_hash], user_id: params[:user_id])
          render json: order
     end
end