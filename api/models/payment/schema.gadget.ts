import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "payment" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "6-GO2hrqW8SN",
  fields: {
    amount: {
      type: "number",
      default: 0,
      decimals: 2,
      storageKey: "Y7YiJKqfWLfr",
    },
    partner: {
      type: "belongsTo",
      parent: { model: "partner" },
      storageKey: "74N4Ug0oMrwO",
    },
    status: {
      type: "enum",
      default: "Due",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["Paid", "Due", "Cancelled"],
      storageKey: "aPBctpKGmXYP",
    },
  },
};
