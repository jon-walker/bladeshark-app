import { deleteRecord, ActionOptions, DeleteCommissionsActionContext } from "gadget-server";

/** @param { DeleteCommissionsActionContext } context */
export const run = async ({ params, record, logger, api, connections }) => {
  await deleteRecord(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete",
};
