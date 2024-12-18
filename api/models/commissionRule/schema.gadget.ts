import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "commissionRule" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "sZ01_tTnCLQr",
  fields: {
    commissions: {
      type: "hasMany",
      children: {
        model: "commission",
        belongsToField: "commissionRule",
      },
      storageKey: "kLWUXpldL6X_",
    },
    conditionField: {
      type: "enum",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["tag", "collection", "channel"],
      storageKey: "Vu6kReJt0Qvx",
    },
    conditionValue: { type: "string", storageKey: "9Kuki3XAKxMJ" },
    linkedPartnerChildren: {
      type: "hasMany",
      children: {
        model: "partner",
        belongsToField: "linkedPartnerParent",
      },
      storageKey: "-r3LeseTThRR",
    },
    name: {
      type: "string",
      validations: { required: true },
      storageKey: "ULtUyqnkcMes",
    },
    partner: {
      type: "belongsTo",
      parent: { model: "partner" },
      storageKey: "ZukKAZjvQ5tM",
    },
    rate: {
      type: "number",
      default: 15,
      decimals: 1,
      validations: {
        required: true,
        numberRange: { min: 1, max: 100 },
      },
      storageKey: "2wX8Nhyu2BPm",
    },
    trigger: {
      type: "enum",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["products"],
      storageKey: "xe1Bn2lAVXgY",
    },
    type: {
      type: "enum",
      default: "percent",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["flat", "percent"],
      validations: { required: true },
      storageKey: "aABiill5U44H",
    },
  },
};
