import { applyParams, save, ActionOptions, UpdateShopifyOrderActionContext } from "gadget-server";
import { preventCrossShopDataAccess } from "gadget-server/shopify";
import { isTypedArray } from "util/types";

/**
 * @param { UpdateShopifyOrderActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { UpdateShopifyOrderActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
  let orderId = record.id;
  let orderLineItems = api.shopifyOrderLineItem.findMany({
    filter: {
        orderId: { equals: orderId }
    },
    select: {
      id: true,
      product: {
        edges: {
          node: {
            id: true,
            attributibleTo:
          }
        }
      }
    }
  });

  if (orderLineItems.length > 0 ) {

  }
};

/** @type { ActionOptions } */
export const options = { actionType: "update" };
