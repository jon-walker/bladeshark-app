import { useState } from 'react';
import {
  Card,
  Layout,
  Page,
  Text,
  BlockStack
} from "@shopify/polaris";
import {
  AutoForm,
  AutoHiddenInput
} from "@gadgetinc/react/auto/polaris";
import { api } from "../api";

import { PartnerInitialInputs } from "../components/PartnerInitialInputs";
import { PartnerContactInputs } from '../components/PartnerContactInputs';
import { PartnerCommissionInputs } from '../components/PartnerCommissionInputs';

export default function NewPartner() {
  const [section, setSection ] = useState("initial"); // initial, contact, commission
  const [partnerId, setPartnerId] = useState(null);

  // Pass in data needed for relationship fields & cue next form
  const handlePartnerSuccess = (result) => {
    setPartnerId(result.id);
    setSection('contact');
  };

  const handleContactSuccess = (result) => {
    setPartnerId(result.partnerOrganization);
    setSection('commission');
  };

  return (
    <Page
      title="Add New BLADESHARK Partner"
      backAction={{
        content: "Shop Information",
        onAction: () => navigate("/"),
      }}
    >
      <Layout>
        <Layout.Section>
          <Card padding="400" >

            {(section === 'initial') && (
              <BlockStack gap="500" >
                <Text variant="headingXl" as="h2">Organization Info</Text>
                <AutoForm
                  action={api.partner.create}
                  submitLabel="Next: Contacts"
                  onSuccess={handlePartnerSuccess}
                >
                  <PartnerInitialInputs />
                </AutoForm>
              </BlockStack>
            )}

            {(section === 'contact') && (
              <BlockStack gap="500" >
                <Text variant="headingXl" as="h2">Contact Info</Text>
                <AutoForm
                  action={api.contact.create}
                  submitLabel={"Next: Commissions"}
                  onSuccess={handleContactSuccess}
                >
                  <AutoHiddenInput field='partnerOrganization' value={partnerId} />
                  <PartnerContactInputs />
                </AutoForm>
              </BlockStack>
            )}

						{(section === 'commission') && (
              <BlockStack gap="500" >
                <Text variant="headingXl" as="h2">Commission Rules</Text>
                <AutoForm
                  action={api.commissionRule.create}
                  submitLabel="Finish and Save"
                  onSuccess={handlePartnerSuccess}
                >
                  <PartnerCommissionInputs />
                </AutoForm>
              </BlockStack>
            )}

          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
