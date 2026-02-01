/**
 * TypeScript types for the MCP Design System Server
 */

/**
 * Metadata for a component variant option
 */
export interface VariantOption {
  name: string;
  description?: string;
}

/**
 * Component variants (e.g., size, variant)
 */
export interface ComponentVariants {
  [key: string]: string[];
}

/**
 * Component prop definition
 */
export interface ComponentProp {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  defaultValue?: string;
}

/**
 * Usage example for a component
 */
export interface ComponentExample {
  title: string;
  description: string;
  code: string;
}

/**
 * Complete metadata for a component
 */
export interface ComponentMetadata {
  name: string;
  path: string;
  description: string;
  category?: string;
  variants?: ComponentVariants;
  props: ComponentProp[];
  examples: ComponentExample[];
  subComponents?: string[];
}

/**
 * Request to get component information
 */
export interface GetComponentInfoRequest {
  name: string;
}

/**
 * Request to get component code
 */
export interface GetComponentCodeRequest {
  name: string;
}

/**
 * Request to generate usage example
 */
export interface GenerateUsageExampleRequest {
  name: string;
  variant?: string;
  size?: string;
  props?: Record<string, unknown>;
}

/**
 * Request to search components
 */
export interface SearchComponentsRequest {
  query: string;
}

/**
 * Response for tool calls
 */
export interface ToolResponse {
  content: Array<{
    type: string;
    text: string;
  }>;
}
