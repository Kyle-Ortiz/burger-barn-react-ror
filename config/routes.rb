Rails.application.routes.draw do

  resources :items
  resources :categories
  resources :sessions, only: [:index, :create]
  resources :orders, only: [:show,:create,:destroy]
  resources :users, only: [:create,:update,:destroy]
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
