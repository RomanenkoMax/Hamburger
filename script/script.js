/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    // for (let prop in this.constructor) {
    //     if (this.constructor[prop] === size) this[prop] = this.constructor[prop];
    //     if (this.constructor[prop] === stuffing) this[prop] = this.constructor[prop];
    //}

    // if (!this.hasOwnProperty('SIZE_SMALL')) {
    //     if (!this.hasOwnProperty('SIZE_LARGE')) {
    //         throw new HamburgerException('You must determine the size');
    //     }
    // }

    // if (!this.hasOwnProperty('STUFFING_CHEESE')) {
    //     if (!this.hasOwnProperty('STUFFING_SALAD')) {
    //         if (!this.hasOwnProperty('STUFFING_POTATO')) {
    //             throw new HamburgerException('You must determine at least one stuffing');
    //         }
    //     }
    // }

}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = 'small';
Hamburger.SIZE_LARGE = 'big';
Hamburger.STUFFING_CHEESE = 'cheese';
Hamburger.STUFFING_SALAD = 'salad';
Hamburger.STUFFING_POTATO = 'potato'
Hamburger.TOPPING_MAYO = ...
Hamburger.TOPPING_SPICE = ...

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) ...

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) ...

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () ...

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () ...

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () ...

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () ...

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () ...

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException (...) { ... }
