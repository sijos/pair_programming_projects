class CreateModerators < ActiveRecord::Migration
  def change
    create_table :moderators do |t|
      t.integer :user_id, null: false
      t.integer :sub_id, null: false
    end
    add_index :moderators, :user_id
    add_index :moderators, :sub_id
  end
end
