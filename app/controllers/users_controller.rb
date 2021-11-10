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
          user.update!(password: params[:new_password])

          render json: user, status: :ok
     end

     def destroy
          user = User.find(params[:id]).destroy
          session.delete :user_id
          render json: user, status: :ok
     end
end