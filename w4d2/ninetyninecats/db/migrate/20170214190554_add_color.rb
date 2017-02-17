class AddColor < ActiveRecord::Migration
  def change
    add_column :cats, :color, :string, null: false
  end
end
