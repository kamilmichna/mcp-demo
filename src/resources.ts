import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { ProductCategory } from "./db";
import { serve } from "bun";
export const registerResources = (server: McpServer) => {
  // Dynamic resource
  server.registerResource(
    "products",
    new ResourceTemplate("products://{category}", {
      list: async () => {
        // Example: return a list of available names with required 'uri' property
        const categories = Object.values(ProductCategory);
        return {
          resources: categories.map((category) => ({
            name: category,
            uri: `products://${category}`,
          })),
        };
      },
    }),
    {
      title: "Products Resource",
    },
    async (uri: { href: any }, { category }: any) => {
      const { getMockProducts } = await import("./db");
      const products = await getMockProducts().filter(
        (product) => product.category === category
      );

      return {
        contents: [
          {
            uri: uri.href,
            text: JSON.stringify(products, null, 2),
            mimeType: "application/json",
          },
        ],
      };
    }
  );

  server.registerResource(
    "policies",
    "policies://refund",
    {
      title: "Refund Policy",
      description: "Information about the refund policy for products",
    },
    async (uri: { href: string }) => ({
      contents: [
        {
          uri: uri.href,
          text: "You can return any product within 30 days of purchase for a full refund, unless product category is Fitness.",
          mimeType: "text/plain",
        },
      ],
    })
  );
};
