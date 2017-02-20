class PostsController < ApplicationController

  before_action :is_author?, only:[:edit, :update, :destroy]

  helper_method :is_author?

  def new
    render :new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.sub_id = params[:sub_id]
    PostSub.create!(post_id: @post.id, sub_id: params[[:sub_ids]]) #might not work
    fail
    if @post.save
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      redirect_to new_sub_post_url(params[:sub_id])
    end
  end

  def edit
    @post = Post.find(params[:id])
    @sub = Sub.find(@post.sub_id)
    render :edit
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      redirect_to new_sub_post_url(params[:sub_id])
    end
  end

  def show
    @post = Post.find(params[:id])
    @sub = Sub.find(@post.sub_id)
    render :show
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to sub_url(@post)
  end

  private

  def is_author?
    post = Post.find(params[:id])
    post.author == current_user
  end

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end
end
