import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.3.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2024-10",
        enabledModels: [
          "shopifyCart",
          "shopifyCartLineItem",
          "shopifyCollect",
          "shopifyCollection",
          "shopifyDomain",
          "shopifyFulfillment",
          "shopifyFulfillmentEvent",
          "shopifyOrder",
          "shopifyOrderAdjustment",
          "shopifyRefund",
          "shopifyRefundLineItem",
        ],
        type: "partner",
        scopes: [
          "read_orders",
          "unauthenticated_read_checkouts",
          "unauthenticated_write_checkouts",
          "read_fulfillments",
          "read_products",
        ],
      },
    },
  },
};
