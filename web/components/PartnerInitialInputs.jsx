import {
  AutoStringInput,
  AutoSubmit,
  AutoBelongsToInput,
  AutoEmailInput
} from "@gadgetinc/react/auto/polaris";
import React from 'react';

export function PartnerInitialInputs() {

  return (
    <>
      <AutoBelongsToInput field="program" label="Partner Type" />
      <AutoStringInput field="organization" label="Team or Organization (Optional)" />
      <AutoEmailInput field="paymentEmail" label="Payment Email (Optional)" />
      <AutoSubmit>{"Next: Contacts"}</AutoSubmit>
    </>
  );
}