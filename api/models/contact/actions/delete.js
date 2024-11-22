import { deleteRecord, ActionOptions, DeletePartnersActionContext } from "gadget-server";

/** @param { DeletePartnersActionContext } context */
export const run = async ({ params, record, logger, api, connections }) => {
  await deleteRecord(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete",
};
