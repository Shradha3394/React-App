var faker = require("faker");
var data = [];
var categories = ["Indian", "Italian", "Chinese", "Continental"];
faker.seed(100);

for (var i = 0; i <= 500; i++) {
    var category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: faker.commerce.price()
    });
}
module.exports = () => ({
    menu: data,
    categories: categories,
    orders: []
});