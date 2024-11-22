import { applyParams, save, ActionOptions, CreatePartnersActionContext } from "gadget-server";

/** @param { CreatePartnersActionContext } context */
export const run = async ({ params, record, logger, api, connections }) => {
  applyParams(params, record);
  await save(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};
