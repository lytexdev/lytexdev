import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class QuantityFieldPlugin extends Plugin {

    init() {
        this.minus = DomAccess.querySelector(this.el, '.decrease');
        this.plus = DomAccess.querySelector(this.el, '.increase');
        this.field = DomAccess.querySelector(this.el, 'input[type="number"]');

        this.registerEvents();
    }

    
    registerEvents() {
        this.minus.addEventListener('click', this.decreaseQuantity.bind(this));
        this.plus.addEventListener('click', this.increaseQuantity.bind(this));
    }


    decreaseQuantity() {
        const newQuant = parseInt(this.field.value) - 1;

        if (newQuant <= 1) {
            this.field.value = 1;
            return;
        }
        this.field.value = newQuant;
    }


    increaseQuantity() {
        this.field.value = parseInt(this.field.value) + 1;
    }
}