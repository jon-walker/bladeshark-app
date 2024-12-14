import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.3.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2024-10",
        enabledModels: [
          "shopifyCollect",
          "shopifyCollection",
          "shopifyDomain",
          "shopifyOrder",
          "shopifyOrderAdjustment",
          "shopifyOrderLineItem",
          "shopifyProduct",
          "shopifyRefund",
          "shopifyRefundLineItem",
        ],
        type: "partner",
        scopes: [
          "read_orders",
          "unauthenticated_read_checkouts",
          "unauthenticated_write_checkouts",
          "read_products",
        ],
      },
    },
  },
};
