class TracksController < ApplicationController
  before_action :require_login!

  def show
    @track = Track.find(params[:id])
    if @track
      @album = Album.find(@track.album_id)
      render :show
    else
      flash[:errors] = @track.errors.full_messages
      redirect_to bands_url
    end
  end

  def new
    @track = Track.new
    render :new
  end

  def create
    @track = Track.new(track_params)
    @album = Album.find(@track.album_id)
    if @track.save
      redirect_to track_url(@track)
    else
      flash.now[:errors] = @track.errors.full_messages
      render :new
    end
  end

  def edit
    @track = Track.find(params[:id])
    render :edit
  end

  def update
    @track = Track.find(params[:id])
    if @track.update_attributes(track_params)
      redirect_to track_url(@track)
    else
      flash.now[:errors] = @track.errors.full_messages
      render :edit
    end
  end

  def destroy

  end

  private
  def track_params
    params.require(:track).permit(:song_name, :album_id, :lyrics)
  end
end
