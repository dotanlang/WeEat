Rails.application.routes.draw do
  resources :restaurants, only: [:index, :create, :destroy, :update]
end
