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

    this.getToppings = function () {
        return toppings.slice();
    };

    this.setToppings = function (newToppings) {
        toppings = newToppings;
    };

    this.getSize = function () {
        for (let key in this) {
            if (key === 'SIZE_SMALL') return 'SIZE_SMALL';
            else if (key === 'SIZE_LARGE') return 'SIZE_LARGE';
        }
    };

    this.getStuffing = function () {

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

    let resArr = [];
    if (topping === Hamburger.TOPPING_MAYO || topping === Hamburger.TOPPING_SPICE){

        resArr = this.getToppings();
        if (resArr.indexOf(topping) >= 0) {
            resArr.push(topping);
        } else {
            resArr.splice(resArr.indexOf(topping), 1);
        }

    } else {
        throw new HamburgerException ('Unknown topping')
    }

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
console.log(a1);
console.log(a1.getStuffing());
console.log(a1.getSize());

//a2 = new Hamburger(Hamburger.SIZE_LARGE);
// let a3 = new Hamburger();

// console.log(a1);
//console.log(a2);
// console.log(a3);

// throw new HamburgerException('HELLO');
