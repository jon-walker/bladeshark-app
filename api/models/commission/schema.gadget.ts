import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "commission" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "3XW_em8bNVbQ",
  fields: {
    commissionRule: {
      type: "belongsTo",
      parent: { model: "commissionRule" },
      storageKey: "yOaWgYP64_m3",
    },
    partners: {
      type: "belongsTo",
      parent: { model: "partner" },
      storageKey: "STnsDdicJ3C4",
    },
    payment: {
      type: "belongsTo",
      parent: { model: "payment" },
      storageKey: "zE3oAFA93P-x",
    },
  },
};
