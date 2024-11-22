import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "partner" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "aIlDb77fM3bH",
  fields: {
    commissionPlan: {
      type: "belongsTo",
      parent: { model: "commissionPlan" },
      storageKey: "s5GJayk2sztU",
    },
    contact: {
      type: "belongsTo",
      parent: { model: "contact" },
      storageKey: "h5q1_cBNTazh",
    },
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
  },
};
