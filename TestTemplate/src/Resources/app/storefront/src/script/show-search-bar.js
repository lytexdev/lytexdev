import AddToCart from 'src/plugin/add-to-cart/add-to-cart.plugin';
import DomAccess from 'src/helper/dom-access.helper';

export default class ShowSearchBar extends AddToCart {

    init() {
        this.PluginManager = window.PluginManager;
        this._desktopSearchBar = DomAccess.querySelector(document, '.desktop-search-bar');
        this._inputGroup = DomAccess.querySelector(document, '.input-group');

        console.info('wefdkhgwfkhwrguihkl');

        this.registerEvents();
    }

    
    registerEvents() {
        this._desktopSearchBar.addEventListener('click', this.openSearchbar.bind(this));
    }

    openSearchbar() {
        this._inputGroup.classList.add('d-block');
    }
}