class CreateOrdersTable < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.json :order_hash
      t.integer :customer_id

      t.timestamps
    end
  end
end
