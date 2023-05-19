/** @format */
function totalPrice(data) {
    var total;
    var pricePerMonth;
    var priceWithDiscount;
    if (data.isInstallment) {
        pricePerMonth = data.price / data.months;
        priceWithDiscount = (pricePerMonth * data.discount) / 100;
        total = pricePerMonth - priceWithDiscount;
    }
    else {
        priceWithDiscount = (data.price * data.discount) / 100;
        total = data.price - priceWithDiscount;
    }
    console.log(total);
    return total;
}
totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
