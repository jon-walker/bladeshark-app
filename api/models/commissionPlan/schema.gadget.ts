import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "commissionPlan" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "sZ01_tTnCLQr",
  fields: {
    commissions: {
      type: "hasMany",
      children: {
        model: "commission",
        belongsToField: "commissionPlan",
      },
      storageKey: "kLWUXpldL6X_",
    },
    name: { type: "string", storageKey: "ULtUyqnkcMes" },
    partners: {
      type: "hasMany",
      children: {
        model: "partner",
        belongsToField: "commissionPlan",
      },
      storageKey: "OBO_hW6pWxUY",
    },
    programs: {
      type: "hasMany",
      children: {
        model: "program",
        belongsToField: "defaultCommissionPlan",
      },
      storageKey: "H1yodMxEEjEy",
    },
    rate: {
      type: "number",
      default: 15,
      decimals: 1,
      validations: { numberRange: { min: 1, max: 100 } },
      storageKey: "2wX8Nhyu2BPm",
    },
    type: {
      type: "enum",
      default: "percent",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["flat", "percent"],
      storageKey: "aABiill5U44H",
    },
  },
};
