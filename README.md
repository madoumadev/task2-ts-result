# Задание #2

## Создал перемены
total - общая сумма
pricePerMonth - стоимость за месяц
priceWithDiscount - стоимость за месяц со скидкой

## Создал интефейс 
IPriceWithDiscount {
  price: number; цена товара
  discount: number; скидка в процентах
  isInstallment: boolean; есть ли рассрочка или нет 
  months : number; количество месяцев
}

## Если  есть рассрочка то: 
       pricePerMonth = цена товара/ количество месяцев
       priceWithDiscount = (pricePerMonth * discount) / 100;
       total = pricePerMonth - priceWithDiscount; 
## Если  нет рассрочки то: 
        priceWithDiscount = (цена товара * discount) / 100;
        total = price - priceWithDiscount

## Функция totalPrice венет total 

