import { applyParams, save, ActionOptions, UpdatePartnersActionContext } from "gadget-server";

/** @param { UpdatePartnersActionContext } context */
export const run = async ({ params, record, logger, api, connections }) => {
  applyParams(params, record);
  await save(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update",
};
