class AddColumnsToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :price, :string
    add_column :items, :image, :string
  end
end
