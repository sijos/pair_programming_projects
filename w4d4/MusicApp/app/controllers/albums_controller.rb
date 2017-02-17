class AlbumsController < ApplicationController
  before_action :require_login!

  def show
    @album = Album.find(params[:id])
    @band = Band.find(@album.band_id)
    if @album
      render :show
    else
      flash[:errors] = @album.errors.full_messages
      redirect_to bands_url
    end
  end

  def new
    @album = Album.new
    @bands = Band.all
    render :new
  end

  def create
    @album = Album.new(album_params)
    @bands = Band.all
    if @album.save
      redirect_to album_url(@album)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end
  end

  def edit
    @album = Album.find(params[:id])
    @bands = Band.all
    render :edit
  end

  def update
    @album = Album.find(params[:id])
    if @album.update_attributes(album_params)
      redirect_to album_url(@album)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :edit
    end
  end

  private
  def album_params
    params.require(:album).permit(:title, :band_id, :recording_type)
  end
end
