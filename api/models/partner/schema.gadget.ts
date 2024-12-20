import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "partner" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "aIlDb77fM3bH",
  fields: {
    attributionProducts: {
      type: "belongsTo",
      parent: { model: "shopifyProduct" },
      storageKey: "LnY1LOXnLwNv",
    },
    commissionRules: {
      type: "hasMany",
      children: {
        model: "commissionRule",
        belongsToField: "partner",
      },
      storageKey: "WEPvY7pyxfsZ",
    },
    contact: {
      type: "belongsTo",
      parent: { model: "contact" },
      storageKey: "7JtDRiZLsTyR",
    },
    linkedPartnerParent: {
      type: "belongsTo",
      parent: { model: "commissionRule" },
      storageKey: "dPrEBog08OhL",
    },
    organization: { type: "string", storageKey: "1NDVscRymb23" },
    paymentEmail: { type: "email", storageKey: "PQOaGHNv2Ry9" },
    payments: {
      type: "hasMany",
      children: { model: "payment", belongsToField: "partner" },
      storageKey: "BeoLJxfGa-7_",
    },
    program: {
      type: "belongsTo",
      parent: { model: "program" },
      storageKey: "Hb0Tjdg3rWh4",
    },
    status: {
      type: "enum",
      default: "active",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["active", "locked", "inactive"],
      storageKey: "0qEe5H4aFqcZ",
    },
  },
};
