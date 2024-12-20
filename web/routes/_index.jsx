import { AutoTable } from "@gadgetinc/react/auto/polaris";
import {
  BlockStack,
  Box,
  Card,
  Layout,
  Link,
  Page,
  Text
} from "@shopify/polaris";
import { api } from "../api";

export default function Index() {
  return (
    <Page title="BLADESHARK Partners App">
      <Layout>
        <Layout.Section>
          <Card padding="0">
            {/* use Autocomponents to build UI quickly: https://docs.gadget.dev/guides/frontend/autocomponents  */}
            <AutoTable
              //@ts-ignore
              model={api.shopifyShop}
              columns={["name", "countryName", "currency", "customerEmail"]}
            />
            <Box padding="400">
              <Text variant="headingMd" as="h6">
                Shop records fetched from:{" "}
                <Link
                  url={`/edit/development/model/DataModel-Shopify-Shop/data`}
                  target="_blank"
                  removeUnderline
                >
                  api/models/shopifyShop/data
                </Link>
              </Text>
            </Box>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
