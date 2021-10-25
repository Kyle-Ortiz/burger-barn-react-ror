class SessionsController < ApplicationController
     def index
          session[:session_hello] ||= "World"
          cookies[:cookies_hello] ||= "World"
          render json: { session: session, cookies: cookies.to_hash }
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
