class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def login!(user)
    @current_user = user
    #reset_session_token
    user.reset_session_token!
    #store in sessions hash
    session[:session_token] = user.session_token
  end

  def current_user
    # search Users for our current session token
    # return as @current_user
    return nil if session[:session_token].nil?
    @current_user ||=  User.find_by_session_token(session[:session_token])
  end
end
