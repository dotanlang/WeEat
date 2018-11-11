Rails.application.routes.draw do
  resources :reviews
  resources :restaurants, only: [:index, :create, :destroy, :update]
end
