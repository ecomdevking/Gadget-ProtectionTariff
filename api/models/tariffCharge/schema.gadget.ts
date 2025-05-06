import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "tariffCharge" model, go to https://tariff-guard.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "2L-tl7hwFz7u",
  comment:
    "Represents a historical tariff charge applied to an order, including the amount, calculation type, and currency.",
  fields: {
    amount: {
      type: "number",
      decimals: 2,
      validations: { required: true },
      storageKey: "U14B0efWtERQ",
    },
    appliedAt: {
      type: "dateTime",
      includeTime: true,
      validations: { required: true },
      storageKey: "zTNnKRTtSig4",
    },
    calculationType: {
      type: "enum",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["percentage", "fixed"],
      validations: { required: true },
      storageKey: "C2_XWMfG6Wsf",
    },
    currency: {
      type: "string",
      validations: { required: true },
      storageKey: "s5RrNDpVV557",
    },
    customerCountry: {
      type: "string",
      validations: { required: true },
      storageKey: "sOc0ZeydqJuK",
    },
    order: {
      type: "belongsTo",
      parent: { model: "shopifyOrder" },
      storageKey: "LdjOd1J6fiix",
    },
    percentageRate: {
      type: "number",
      decimals: 2,
      storageKey: "A8bAmTxx-0aA",
    },
    shop: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "shopifyShop" },
      storageKey: "YkMLm4NEI-la",
    },
  },
};
