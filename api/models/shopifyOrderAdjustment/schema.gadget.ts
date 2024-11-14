import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shopifyOrderAdjustment" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-Shopify-OrderAdjustment",
  fields: {},
  shopify: {
    fields: [
      "amount",
      "amountSet",
      "kind",
      "order",
      "reason",
      "refund",
      "shop",
      "taxAmount",
      "taxAmountSet",
    ],
  },
};
