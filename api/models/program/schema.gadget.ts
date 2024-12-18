import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "program" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Wz7pMN13gHaD",
  fields: {
    active: {
      type: "boolean",
      default: true,
      validations: { required: true },
      storageKey: "8ZRtIUyHy0h_",
    },
    commissionType: {
      type: "enum",
      default: "percentage",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["flat", "percentage"],
      storageKey: "9UkSMecrQUhN",
    },
    defaultCommissionRate: {
      type: "number",
      default: 15,
      decimals: 2,
      validations: { numberRange: { min: 0, max: 40 } },
      storageKey: "fMtzJf29bcEg",
    },
    name: { type: "string", storageKey: "ZcgvwYfffb0V" },
    partners: {
      type: "hasMany",
      children: { model: "partner", belongsToField: "program" },
      storageKey: "OzJcA7TQlWQX",
    },
  },
};
