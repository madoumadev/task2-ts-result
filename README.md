# Задание #2

1. Создал перемены
total - общая сумма
pricePerMonth - стоимость за месяц
priceWithDiscount - стоимость за месяц со скидкой

2. Создал интефейс 
IPriceWithDiscount {
  price: number; цена товара
  discount: number; скидка в процентах
  isInstallment: boolean; есть ли рассрочка или нет 
  months : number; количество месяцев
}

3. Если  есть рассрочка то: 
       pricePerMonth = цена товара/ количество месяцев
       priceWithDiscount = (pricePerMonth * discount) / 100;
       total = pricePerMonth - priceWithDiscount; 
4. Если  нет рассрочки то: 
        priceWithDiscount = (цена товара * discount) / 100;
        total = price - priceWithDiscount

5. Функция totalPrice венет total 
# task2-ts-result
