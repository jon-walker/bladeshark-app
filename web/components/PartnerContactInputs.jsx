import {
  AutoStringInput,
  AutoEmailInput,
  AutoSubmit,
  AutoHiddenInput
} from "@gadgetinc/react/auto/polaris";
import React from 'react';

export function PartnerContactInputs() {

  return (
    <>
      <AutoStringInput field="firstName" label="First Name" />
      <AutoStringInput field="lastName" label="Last Name" />
      <AutoHiddenInput field="primary" value={true} />
      
      <AutoEmailInput field="email" label="Contact Email" />
      <AutoStringInput 
        field="phone" 
        label="Phone" 
        rules={{ maxLength: 12 }} 
      />
      <AutoSubmit>{"Next: Commissions"}</AutoSubmit>
    </>
  );
}