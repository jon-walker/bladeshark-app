import { applyParams, save, ActionOptions, UpdateCommissionsActionContext } from "gadget-server";

/** @param { UpdateCommissionsActionContext } context */
export const run = async ({ params, record, logger, api, connections }) => {
  applyParams(params, record);
  await save(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update",
};
