import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getMockProducts, ProductCategory } from "./db";
import { z } from "zod";
import { serve } from "bun";

export const registerTools = (server: McpServer) => {
  // Register a tool that returns the current date and time
  // Assume getMockProducts is imported from somewhere

  server.registerTool(
    "calculateBasketTotal",
    {
      title: "Calculate Basket Total",
      description:
        "Calculates the total price of items in the basket based on product names and quantities.",
      inputSchema: {
        items: z.array(
          z.object({
            item: z
              .enum([
                "Wireless Mouse",
                "Yoga Mat",
                "Coffee Mug",
                "Bluetooth Speaker",
                "Notebook",
              ])
              .describe("Product name"),
            quantity: z.number().int().min(1).describe("Product quantity"),
          })
        ),
      },
    },
    async ({ items }: any) => {
      const products = await getMockProducts(); // [{ name: string, price: number }, ...]
      let total = 0;

      for (const { item, quantity } of items) {
        const product = products.find((p) => p.name === item);
        console.log(`Calculating for item: ${item}, quantity: ${quantity}`);
        if (product) {
          total += product.price * quantity;
        }
      }

      return {
        content: [
          {
            type: "text",
            text: `The total price of the basket is ${total}.`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "getProductCategories",
    {
      title: "Get Product Categories",
      description: "Returns a list of available product categories.",
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: `Available product categories: ${Object.values(
              ProductCategory
            )}.`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "getRefundPolicy",
    {
      title: "Get Refund Policy",
      description: "Returns the refund policy for products.",
    },
    async () => ({
      content: [
        {
          type: "text",
          text: `You can return any product within 30 days of purchase for a full refund, unless product category is Fitness.`,
        },
      ],
    })
  );
};
