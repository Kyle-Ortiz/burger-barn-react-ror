class SessionsController < ApplicationController
     def index
          if session[:user.id]
               user = User.find(session[:user_id])
               render json: user
          else
               render json: {message: 'You have not logged in'}
          end
          
     end

     def create 
          user = User.find_by_username(params[:username])
          if user.authenticate(params[:password])
               session[:user_id] = user.id
               render json: user
          else 
               render json: {error: "Invalid"}
          end
     end
end
