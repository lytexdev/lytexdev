import AddToCart from 'src/plugin/add-to-cart/add-to-cart.plugin';
import DomAccess from 'src/helper/dom-access.helper';
import HttpClient from 'src/service/http-client.service';

export default class AddToCartTransition extends AddToCart {

    static options = {
        changeAddingToCartBtn: "Wird in den Warenkorb gelegt"
    }

    init() {
        this.PluginManager = window.PluginManager;
        this._cartEl = DomAccess.querySelector(this.el, '.btn-buy');
        this._client = new HttpClient(window.accessKey, window.contextToken,);
        super.init();
    }


    _openOffCanvasCart(instance, requestUrl, formData) {
        this._client.post(requestUrl, formData, this._afterAddItemToCart.bind(this));
    }


    _afterAddItemToCart() {;
        this._addToCartTrans();
    }


    _addToCartTrans() {
        this._cartEl.classList.add('change-color-trans');

        const textContentBefore = this._cartEl.textContent;

        this._cartEl.textContent = this.options.changeAddingToCartBtn;

        window.setTimeout(() => {
            this._cartEl.textContent = textContentBefore;
            this._cartEl.classList.remove('change-color-trans');
            location.reload();
        }, 1150)
    }
}