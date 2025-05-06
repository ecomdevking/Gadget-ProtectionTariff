import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "tariffConfiguration" model, go to https://tariff-guard.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "arDSeGHAJhms",
  comment:
    "This model stores configurations for merchant tariffs, including how the tariff is calculated, its description, and geographical application restrictions.",
  fields: {
    applyToUSCustomersOnly: {
      type: "boolean",
      default: true,
      storageKey: "nMRdPsgRTGel",
    },
    calculationType: {
      type: "enum",
      default: "percentage",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["percentage", "fixed"],
      storageKey: "Jmg17ZQHhri9",
    },
    currency: { type: "string", storageKey: "lFUQoemsAkWa" },
    description: { type: "string", storageKey: "CadsACMI_6HO" },
    enabled: { type: "boolean", storageKey: "yJtnosOpaTsY" },
    fixedAmount: {
      type: "number",
      decimals: 0,
      storageKey: "MgTHaz9uo6g1",
    },
    percentageRate: {
      type: "number",
      default: 150,
      decimals: 2,
      storageKey: "IxbHaTtpapNu",
    },
    shop: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "shopifyShop" },
      storageKey: "rRQjG4r6gEUp",
    },
  },
};
