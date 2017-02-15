class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = Cat.new(cat_params)
    @cat.age = @cat.calc_age

    if @cat.save
      redirect_to cat_url(@cat)
    else
      render :new
    end
  end

  def edit
    @cat = Cat.find(params[:id])

    if @cat.persisted?
      render :edit
    else
      redirect_to :new
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :birth_date, :sex, :color, :description)
  end
end
