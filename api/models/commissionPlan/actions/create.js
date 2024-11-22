import { applyParams, save, ActionOptions, CreateCommissionsActionContext } from "gadget-server";

/** @param { CreateCommissionsActionContext } context */
export const run = async ({ params, record, logger, api, connections }) => {
  applyParams(params, record);
  await save(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};
