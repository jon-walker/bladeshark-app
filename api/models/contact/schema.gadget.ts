import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "contact" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "oXCSuNNWUIj_",
  fields: {
    email: { type: "email", storageKey: "AbR0IgGm2Y1K" },
    firstName: { type: "string", storageKey: "k_uz0OuPB2l6" },
    lastName: { type: "string", storageKey: "WrfAB4VeKAu1" },
    partners: {
      type: "hasOne",
      child: { model: "partner", belongsToField: "contact" },
      storageKey: "oC3Ii5lGmB15",
    },
    phoneNumber: {
      type: "string",
      validations: { regex: ["([\\d]{10})"] },
      storageKey: "wI51iksUvKra",
    },
    primary: {
      type: "boolean",
      default: true,
      storageKey: "buRM3izQuxsM",
    },
  },
};
