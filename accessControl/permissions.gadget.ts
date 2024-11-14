import type { GadgetPermissions } from "gadget-server";

/**
 * This metadata describes the access control configuration available in your application.
 * Grants that are not defined here are set to false by default.
 *
 * View and edit your roles and permissions in the Gadget editor at https://bladeshark.gadget.app/edit/settings/permissions
 */
export const permissions: GadgetPermissions = {
  type: "gadget/permissions/v1",
  roles: {
    "shopify-app-users": {
      storageKey: "Role-Shopify-App",
      models: {
        shopifyCart: {
          read: {
            filter: "accessControl/filters/shopify/shopifyCart.gelly",
          },
        },
        shopifyCartLineItem: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCartLineItem.gelly",
          },
        },
        shopifyCollect: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCollect.gelly",
          },
        },
        shopifyCollection: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCollection.gelly",
          },
        },
        shopifyDomain: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyDomain.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyFulfillment: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyFulfillment.gelly",
          },
        },
        shopifyFulfillmentEvent: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyFulfillmentEvent.gelly",
          },
        },
        shopifyGdprRequest: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyGdprRequest.gelly",
          },
          actions: {
            create: true,
            update: true,
          },
        },
        shopifyOrder: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyOrder.gelly",
          },
        },
        shopifyOrderAdjustment: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyOrderAdjustment.gelly",
          },
        },
        shopifyRefund: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyRefund.gelly",
          },
        },
        shopifyRefundLineItem: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyRefundLineItem.gelly",
          },
        },
        shopifyShop: {
          read: {
            filter: "accessControl/filters/shopify/shopifyShop.gelly",
          },
          actions: {
            install: true,
            reinstall: true,
            uninstall: true,
            update: true,
          },
        },
        shopifySync: {
          read: {
            filter: "accessControl/filters/shopify/shopifySync.gelly",
          },
          actions: {
            abort: true,
            complete: true,
            error: true,
            run: true,
          },
        },
      },
      actions: {
        scheduledShopifySync: true,
      },
    },
    unauthenticated: {
      storageKey: "unauthenticated",
    },
  },
};
