class AddUserIdToUrl < ActiveRecord::Migration
  def change
    add_column :shortened_urls, :user_id, :integer, null: false
  end
end
