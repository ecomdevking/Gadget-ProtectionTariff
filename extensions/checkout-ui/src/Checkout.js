"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // 1. Choose an extension target
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function _checkout() {
    const data = require("@shopify/ui-extensions-react/checkout");
    _checkout = function() {
        return data;
    };
    return data;
}
const _default = (0, _checkout().reactExtension)("purchase.checkout.block.render", ()=>/*#__PURE__*/ React.createElement(Extension, null));
function Extension() {
    const translate = (0, _checkout().useTranslate)();
    const { extension } = (0, _checkout().useApi)();
    const instructions = (0, _checkout().useInstructions)();
    const applyAttributeChange = (0, _checkout().useApplyAttributeChange)();
    // 2. Check instructions for feature availability, see https://shopify.dev/docs/api/checkout-ui-extensions/apis/cart-instructions for details
    if (!instructions.attributes.canUpdateAttributes) {
        // For checkouts such as draft order invoices, cart attributes may not be allowed
        // Consider rendering a fallback UI or nothing at all, if the feature is unavailable
        return /*#__PURE__*/ React.createElement(_checkout().Banner, {
            title: "checkout-ui",
            status: "warning"
        }, translate("attributeChangesAreNotSupported"));
    }
    // 3. Render a UI
    return /*#__PURE__*/ React.createElement(_checkout().BlockStack, {
        border: "dotted",
        padding: "tight"
    }, /*#__PURE__*/ React.createElement(_checkout().Banner, {
        title: "checkout-ui"
    }, translate("welcome", {
        target: /*#__PURE__*/ React.createElement(_checkout().Text, {
            emphasis: "italic"
        }, extension.target)
    })), /*#__PURE__*/ React.createElement(_checkout().Checkbox, {
        onChange: onCheckboxChange
    }, translate("iWouldLikeAFreeGiftWithMyOrder")));
    async function onCheckboxChange(isChecked) {
        // 4. Call the API to modify checkout
        const result = await applyAttributeChange({
            key: "requestedFreeGift",
            type: "updateAttribute",
            value: isChecked ? "yes" : "no"
        });
        console.log("applyAttributeChange result", result);
    }
}


//# sourceMappingURL=Checkout.js.map