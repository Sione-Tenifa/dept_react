
20.times do
  department = Department.create(
    name: Faker::Commerce.department,
  )
  40.times do
    Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Commerce.color,
      price: Faker::Commerce.price.to_f,
      department_id: department.id,
    )
  end
end
puts 'created items'