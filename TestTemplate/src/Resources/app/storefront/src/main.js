import StickyHeader from "./script/sticky-header";
import QuantityFieldPlugin from "./script/quantity-field.plugin";
import AddToCartTransition from "./script/add-to-cart-trans";
//import ShowSearchBar from "./script/show-search-bar";

window.PluginManager.override("AddToCart", AddToCartTransition, '[data-add-to-cart]', {
    changeAddingToCartBtn: "Wird in den Warenkorb gelegt"
})

window.PluginManager.register("QuantityField", QuantityFieldPlugin, '[data-quantity-field]')

//window.PluginManager.register("ShowSearchBar", ShowSearchBar, '[data-search-form]')


window.PluginManager.register("StickyHeader", StickyHeader, '[data-sticky-header]', {
    showOnScrollPosition: 2000,
})