import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shopifyProduct" model, go to https://bladeshark.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-Shopify-Product",
  fields: {
    attributeTo: {
      type: "hasMany",
      children: {
        model: "partner",
        belongsToField: "attributionProducts",
      },
      storageKey: "xEvUNG7uoQAC",
    },
  },
  shopify: {
    fields: [
      "body",
      "category",
      "compareAtPriceRange",
      "customCollections",
      "handle",
      "hasVariantsThatRequiresComponents",
      "orderLineItems",
      "productType",
      "publishedAt",
      "shop",
      "shopifyCreatedAt",
      "shopifyUpdatedAt",
      "status",
      "tags",
      "templateSuffix",
      "title",
      "vendor",
    ],
  },
};
