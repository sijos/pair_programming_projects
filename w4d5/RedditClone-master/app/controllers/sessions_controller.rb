class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentails(params[:user][:username],
      params[:user][:password])
    if @user
      login!(@user)
      redirect_to subs_url
    else
      flash[:errors] = ['Invalid username and/or password']
      render :new
    end
  end

  def new
    render :new
  end

  def destroy
    logout!
    render :new
  end
end
