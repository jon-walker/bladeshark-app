import { useState } from 'react';
import {
  Card,
  Layout,
  Page,
  Text,
  BlockStack,
	Button
} from "@shopify/polaris";
import {
  AutoTable,
} from "@gadgetinc/react/auto/polaris";
import { useNavigate } from 'react-router-dom';
import { api } from "../api";

export default function PartnerManage() {
	const navigate = useNavigate();

	return (
		<Page
		title="Manage BLADESHARK Partners"
		backAction={{
			content: "Shop Information",
			onAction: () => navigate("/"),
		}}
		primaryAction={
			<Button
				variant="primary"
				onClick= { () => navigate("/partner-new")}
			>Add New Partner</Button>
		}
		>
			<Layout>
				<Layout.Section>
					<Card padding="400" >
						<BlockStack gap="500" >
							<Text variant='headingXl' as="h2">Manage BLADESHARK Partners</Text>
							<AutoTable
								model={api.partner}
								selectable={false}
								resourceName={{ singular : "Partner", plural: "Partners"}}
								columns={[
									"organization",
									"program.name",
									{header: "Contact", field: "contact.firstName"},
									{header: "Phone", field: "contact.phone"},
									{header: "Email", field: "contact.email"},
									"paymentEmail",
									"status",
									"updatedAt"
								]}
							/>
						</BlockStack>
					</Card>
				</Layout.Section>
			</Layout>
		</Page>
	)
}
