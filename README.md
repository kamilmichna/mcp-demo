# MCP Demo

This repository demonstrates the **Model Context Protocol (MCP)**, an open standard for enabling AI models to interact with external resources, business logic, and structured data in a secure and context-aware manner.

---

## About Model Context Protocol (MCP)

**Model Context Protocol (MCP)** is designed to bridge AI models with real-world systems, allowing them to fetch, process, and act on contextual information beyond simple text prompts.

### History

MCP was created to address the need for AI models to access and manipulate external data and business logic. Developed through collaboration in the AI and developer communities, MCP is actively maintained and adopted in both research and production environments.

### Production Usage

MCP powers advanced AI assistants, business automation tools, and context-driven applications. Notable use cases include:

- **GitHub Copilot**: Uses MCP to enhance code suggestions with project context.
- **Enterprise AI platforms**: Integrate MCP for querying databases, applying business rules, and interacting with APIs.
- **Custom AI agents**: Used in customer support, e-commerce, and workflow automation.

### MCP Clients

MCP can be integrated into various clients to enhance AI capabilities:

- **IDE Extensions**: (e.g., VS Code, JetBrains) for context-aware code completion and refactoring.
- **Chatbots and Virtual Assistants**: For accurate, context-driven responses.
- **Web Applications**: For dynamic content generation and business logic execution.
- **Custom Integrations**: Developers can add MCP support to their own tools for AI-driven resource access.

### Transports

MCP supports multiple transport mechanisms:

- **HTTP/HTTPS**: For remote resource access.
- **WebSockets**: For real-time, bidirectional communication.
- **Local IPC**: For secure, high-performance local interactions.

### Capabilities

MCP enables models to:

- **Access Resources**: Query and manipulate structured data (e.g., products, users).
- **Execute Business Logic**: Invoke functions, apply policies, and calculate results.
- **Enforce Policies**: Ensure compliance with business rules (e.g., refund eligibility).
- **Augment Prompts**: Enhance model prompts with contextual data.

### Resources

Resources in MCP are structured entities such as:

- **Product Catalogs**
- **User Profiles**
- **Business Policies**
- **Custom Data Stores**

Resources use standardized schemas for easy querying and manipulation.

### Prompts

MCP allows prompts to be enriched with contextual information, enabling models to generate more accurate and relevant outputs.

### Policies

Policies in MCP govern model interactions with resources, ensuring security, privacy, and compliance. Examples include refund policies, access controls, and data validation rules.

For more details, visit the [official MCP website](https://modelcontextprotocol.io/).

---

## Repository Overview

This demo showcases how MCP can be used to build intelligent, context-aware applications with clear separation between model logic and resource management.

### Structure

- **index.ts**: Entry point for the application.
- **src/db.ts**: Database logic and data access.
- **src/resources.ts**: Resource definitions and handlers.
- **src/tools.ts**: Utility functions and tools for MCP operations.
- **bun.lock, package.json, tsconfig.json**: Project configuration and dependencies.

### Resources

- **Product Catalog**: Organized by category (e.g., Fitness), with product details such as name and price.
- **Business Logic**: Includes refund policies and basket total calculations.
- **MCP Resource Files**: Example product data and category definitions.

---
