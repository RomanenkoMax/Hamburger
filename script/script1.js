function Hamburger(size, stuffing) {
    try {
        if (size === Hamburger.SIZE_LARGE || size === Hamburger.SIZE_SMALL) {
            if (size === Hamburger.SIZE_LARGE) {
                this.SIZE_LARGE = size;
            } else {
                this.SIZE_SMALL = size;
            }
        } else {
            throw new HamburgerException('You must determine the size');
        }

        if (stuffing === Hamburger.STUFFING_CHEESE || stuffing === Hamburger.STUFFING_SALAD || stuffing === Hamburger.STUFFING_POTATO) {
            if (stuffing === Hamburger.STUFFING_CHEESE) {
                this.STUFFING_CHEESE = stuffing;
            } else if (stuffing === Hamburger.STUFFING_SALAD) {
                this.STUFFING_SALAD = stuffing;
            } else {
                this.STUFFING_POTATO = stuffing;
            }
        } else {
            throw new HamburgerException('You must determine at least one stuffing');
        }
    }
    catch (e) {

        console.log(e.toString());
        return;
    }

    let toppings = [];

    this.getToppingsFromConstr = function () {
        return toppings.slice();
    };

    this.setToppingsFromConstr = function (newToppings) {
        toppings = newToppings;
    };

    this.getSizeFromConstr = function () {
        for (let key in this) {
            if (key === 'SIZE_SMALL') return 'SIZE_SMALL';
            else if (key === 'SIZE_LARGE') return 'SIZE_LARGE';
        }
    };

    this.getStuffingFromConstr = function () {

        for (let key in this) {
            if (key === 'STUFFING_CHEESE') return 'STUFFING_CHEESE';
            else if (key === 'STUFFING_SALAD') return 'STUFFING_SALAD';
            else if (key === 'STUFFING_POTATO') return 'STUFFING_POTATO';
        }

    }
};

Hamburger.SIZE_SMALL = {price: 50, calories: 20};
Hamburger.SIZE_LARGE = {price: 100, calories: 40};
Hamburger.STUFFING_CHEESE = {price: 10, calories: 20};
Hamburger.STUFFING_SALAD = {price: 10, calories: 5};
Hamburger.STUFFING_POTATO = {price: 15, calories: 10};
Hamburger.TOPPING_MAYO = {price: 20, calories: 5};
Hamburger.TOPPING_SPICE = {price: 15, calories: 0};

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {

    let resArr;
    try {

        if (topping === Hamburger.TOPPING_MAYO || topping === Hamburger.TOPPING_SPICE) {

            resArr = this.getToppingsFromConstr();

            if (resArr.indexOf(topping) >= 0) {
                throw new HamburgerException('You try to add already existing topping!');
            } else {
                resArr.push(topping);
                this.setToppingsFromConstr(resArr);
            }

        } else {
            throw new HamburgerException('Unknown topping')
        }
    } catch (e) {
        console.log(e.toString());
    }
};

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) {

    let resArr;
    try {

        if (topping === Hamburger.TOPPING_MAYO || topping === Hamburger.TOPPING_SPICE) {

            resArr = this.getToppingsFromConstr();

            if (resArr.indexOf(topping) === -1) {
                throw new HamburgerException('You try to remove not existing topping!');
            } else {
                resArr.splice(resArr.indexOf(topping), 1);
                this.setToppingsFromConstr(resArr);
            }

        } else {
            throw new HamburgerException('Unknown topping')
        }
    } catch (e) {
        console.log(e.toString());
    }


};

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
    let resArr;
    let result = [];
    try {

        resArr = this.getToppingsFromConstr();

        if (resArr.length === 0){

            throw new HamburgerException('You have not add any topping yet!');

        } else {

            resArr.forEach((value) => {

                if (value === Hamburger.TOPPING_MAYO){
                    result.push('TOPPING_MAYO');
                } else if (value === Hamburger.TOPPING_SPICE){
                    result.push('TOPPING_SPICE');
                }

            });

        }

        return result;

    } catch (e) {
        console.log(e.toString());
        return result;
    }

};

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function (){
  return this.getSizeFromConstr();
};

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function (){
  return this.getStuffingFromConstr();
};

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    let sizePrice = this[this.getSize()].price;
    let stuffingPrice = this[this.getStuffing()].price;
    let toppingPrice = this.getToppingsFromConstr().reduce(((previousValue, currentValue) => previousValue + currentValue.price), 0);

    return sizePrice + stuffingPrice + toppingPrice;

};

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function (){

    let sizeCalories = this[this.getSize()].calories;
    let stuffingCalories = this[this.getStuffing()].calories;
    let toppingCalories = this.getToppingsFromConstr().reduce(((previousValue, currentValue) => previousValue + currentValue.calories), 0);

    return sizeCalories + stuffingCalories + toppingCalories;

};
/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException(message) {

    this.message = message;
    this.name = 'HamburgerException: ';

};

HamburgerException.prototype.toString = function () {

    return `${this.name}${this.message}`;
};

let a1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
// console.log(a1);
console.log(a1.getStuffing());
console.log(a1.getSize());

console.log(a1.getToppings());
a1.addTopping(Hamburger.TOPPING_MAYO);
a1.addTopping(Hamburger.TOPPING_SPICE);

console.log("Price: %f", a1.calculatePrice());
console.log(a1.getToppings());

a1.removeTopping(Hamburger.TOPPING_MAYO);

console.log(a1.getToppings());
console.log("Calories: %f", a1.calculateCalories());
console.log("Price: %f", a1.calculatePrice());





