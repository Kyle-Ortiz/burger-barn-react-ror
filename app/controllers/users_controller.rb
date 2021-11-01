class UsersController < ApplicationController
     def create
          user = User.create!(username: params[:username], password: params[:password])

          if user.errors.present?
               render :json => user.errors.full_messages, status: :unprocessable_entity
          else
               return render :json => user, status: :created
          end
     end

     def update
          user = User.find(params[:user_id])
          user.Update!(password: params[:new_assword])

          render :json => user, status: :updated
     end
end