class ContactsController < ApplicationController
  def index
    #render text: "Major Tom in index action"
    render json: Contact.all
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: @contact
    else
      render(
        json: @contact.errors.full_messages, status: :unprocessable_entity
      )
    end
  end

  def show
    @contact = Contact.find(params[:id])
    render json: @contact
  end

  def update
    @contact = Contact.find(params[:id])

    if @contact.update(contact_params)
      render json: @contact
    else
      render json: @contact.errors.full_messages
    end
  end

  def destroy
    @contact = Contact.find(params[:id])

    if @contact.destroy
      render json: @contact
    else
      render text: "contact lives 5vr"
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :email, :user_id)
  end
end
