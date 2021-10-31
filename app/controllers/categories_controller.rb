class CategoriesController < ApplicationController
     def index
          render json: Category.all.to_json(except: [:created_at,:updated_at])
     end

     def show
          category = Category.find_by_id(params[:id])
          render json: category.items.to_json(except: [:created_at, :updated_at])
     end
end
