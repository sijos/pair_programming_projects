Rails.application.routes.draw do
  resources :users, only:[:new, :create, :destroy]
  resource :session, only:[:new, :create, :destroy]
  resources :subs
  resources :subs do
    resources :posts, only:[:create, :update, :new, :edit]
  end
  resources :posts, only: [:show, :destroy]
end
