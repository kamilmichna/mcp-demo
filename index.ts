import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { registerResources } from "./src/resources";
import { registerTools } from "./src/tools";

// Create an MCP server
const server = new McpServer({
  name: "demo-server",
  version: "1.0.0",
});

server.registerPrompt(
  "create-return-request",
  {
    title: "Return Request Creation",
    description: "Create a return request for a product",
    argsSchema: { productName: z.string(), returnReason: z.string() },
  },
  ({ productName, returnReason }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Please create a return request for the product "${productName}" with the following reason:\n\n${returnReason}`,
        },
      },
    ],
  })
);

registerTools(server);

registerResources(server);

const transport = new StdioServerTransport();
await server.connect(transport);
