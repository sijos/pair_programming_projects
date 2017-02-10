class AddTimestamps < ActiveRecord::Migration
  def change
    rename_table :respones, :responses
  end
end
