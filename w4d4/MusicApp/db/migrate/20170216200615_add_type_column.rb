class AddTypeColumn < ActiveRecord::Migration
  def change
    add_column :albums, :recording_type, :string, null: false
  end
end
