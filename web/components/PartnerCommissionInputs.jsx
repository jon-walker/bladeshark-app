import {
  AutoStringInput,
  AutoSubmit
} from "@gadgetinc/react/auto/polaris";
import {
	ChoiceList
} from "@shopify/polaris";
import React, { useState, useCallback } from 'react';


export function PartnerCommissionInputs() {
	const [selected, setSelected] = useState('')

	const handleChange = useCallback((value) => {setSelected(value)}, []);

  // TODO :
  return (
    <>
			<AutoStringInput field="conditionValue" label="Tag Name" onFocus={(val) => {
          console.log('Value:', val);
        }}
			/>
			<ChoiceList
				title="Identify referrals based on:"
				choices={[
					{label: 'Product Tag', value: 'tag'},
					{label: 'Product Collection', value: 'collection'},
					{label: 'Sales Channel', value: 'channel'},
				]}
				selected={selected}
				onChange= { handleChange }
    	/>

			{( selected == 'tag' ) && (
				<AutoStringInput field="conditionValue" label="Tag Name" />
			)}

			{( selected == 'collection' ) && (
				<AutoStringInput field="conditionValue" label="Collection Name" />
			)}

			{( selected == 'channel' ) && (
				<AutoStringInput field="conditionValue" label="Sales Channel" />
			)}

      <AutoSubmit>{"Add Commission Rule"}</AutoSubmit>
    </>
  );
}
