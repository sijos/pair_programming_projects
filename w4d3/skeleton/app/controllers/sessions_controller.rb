class SessionsController < ApplicationController
  before_action :require_login, only: [:new, :create]

  def new
    render :new
  end

  def create
    # find the user by username
    @user = User.find_by_credentials(params[:user][:user_name],
                                     params[:user][:password])
    if @user != nil
      login!(@user)
      redirect_to cats_url
    else
      # flash the errors
      flash[:errors] = ["Invalid credentials"]
      redirect_to new_sessions_url
    end
  end

  def destroy
    @current_user.reset_session_token if @current_user
    session[:session_token] = nil
    render :new
  end

  private
  def session_params
    params.require(:user).permit(:user_name, :password)
  end

  def require_login
    redirect_to cats_url if current_user
  end

end
