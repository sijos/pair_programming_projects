class CreateShortenedUrl < ActiveRecord::Migration

  def change
    create_table :shortened_urls do |t|
      t.string :short_url
      t.text :long_url, null: false
      t.timestamps
    end

    add_index :shortened_urls, :long_url, unique: true
  end

end
