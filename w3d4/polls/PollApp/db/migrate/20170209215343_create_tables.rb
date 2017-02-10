class CreateTables < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
    end

    create_table :questions do |t|
      t.text :body, null: false
      t.integer :poll_id, null: false
    end

    create_table :answer_choices do |t|
      t.text :answer, null: false
      t.integer :question_id, null: false
    end

    create_table :respones do |t|
      t.integer :respondent_id, null: false
      t.integer :answer_id, null: false
    end
  end
end
