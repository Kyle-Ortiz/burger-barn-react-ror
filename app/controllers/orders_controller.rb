class OrdersController < ApplicationController

     def index
          
     end

     def show
          user = User.find(params[:id])
          render json: user.orders
     end

     def update

     end

     def create
          user_orders = Order.where(user_id: params[:user_id])
          user_last = user_orders.last
          if user_last 
               if user_last.is_complete?
                    new_order =  Order.create!(order_hash: params[:order_hash], user_id: params[:user_id], is_complete: false)
                    render json: new_order.to_json(except: [:created_at, :updated_at]), status: :created
               else 
                    updated_order = user_orders.last.update!(order_hash: params[:order_hash])
                    render json: updated_order.to_json(only: [:order_hash])
               end
          else 
               new_order =  Order.create!(order_hash: params[:order_hash], user_id: params[:user_id], is_complete: false)
               render json: new_order.to_json(except: [:created_at, :updated_at]), status: :created
          end
     end
end