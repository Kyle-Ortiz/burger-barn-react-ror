Rails.application.routes.draw do

  resources :items, only: [:index]
  resources :categories, only: [:index, :show]
  resources :sessions, only: [:index, :create]
  resources :orders, only: [:show,:create,:update,:destroy]
  resources :users, only: [:show,:create,:update,:destroy]
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
