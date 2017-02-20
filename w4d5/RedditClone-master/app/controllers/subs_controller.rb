class SubsController < ApplicationController

  before_action :require_login!
  before_action :is_mod?, only: [:edit, :update, :destroy]

  helper_method :is_mod?

  def index
    @subs = Sub.all
    render :index
  end

  def new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    if @sub.save
      Moderator.create!(user_id: current_user.id, sub_id: @sub.id)
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @sub.errors.full_messages
      redirect_to new_sub_url
    end
  end

  def edit
    @sub = Sub.find(params[:id])
    render :edit
  end

  def update
    @sub = Sub.find(params[:id])
    if @sub.update_attributes(sub_params)
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @sub.errors.full_messages
      redirect_to new_sub_url
    end
  end

  def show
    @sub = Sub.find(params[:id])
    render :show
  end

  def destroy
    @sub = Sub.find(params[:id])
    @sub.destroy
    redirect_to subs_url
  end

  def is_mod?
    subreddit = Sub.find(params[:id])
    subreddit.sub_mods.include?(current_user)
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description)
  end

end
