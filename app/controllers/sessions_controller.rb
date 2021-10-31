class SessionsController < ApplicationController
     def index
          if session[:user_id]
               user = User.find(session[:user_id])
               render json: user
          else
               render json: {message: 'You have not logged in'}
          end
          
     end

     def create 
          user = User.find_by_username(params[:username])
          if user 
               if user.authenticate(params[:password])
                    session[:user_id] = user.id
                    render json: user
               else 
                    render json: {message: 'Username or password incorrect'}
               end
          else 
               render json: {message: "Username or password is incorrect"}
          end
     end

     def destroy 
          session.delete :user_id
          head :no_content
     end
end
