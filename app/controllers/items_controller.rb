class ItemsController < ApplicationController
     def index 
          render json: Item.all.to_json(only: [:category_id, :id, :name, :description])
     end
end
