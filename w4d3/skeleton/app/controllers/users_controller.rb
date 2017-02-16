class UsersController < ApplicationController
  before_action :require_login

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      login!(@user)
      redirect_to cats_url
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_url
    end
  end


  private
  def user_params
    params.require(:user).permit(:user_name, :password)
  end

  def require_login
    redirect_to cats_url if current_user
  end

end
