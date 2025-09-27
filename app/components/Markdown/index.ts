export { default as MarkdownRenderer } from './MarkdownRenderer'
export { default as MarkdownEditor } from './MarkdownEditor'

// Type exports
export type { MarkdownEditorProps } from './MarkdownEditor'
export type { MarkdownRendererProps } from './MarkdownRenderer'

// Utility types
export interface MarkdownConfig {
  showLineNumbers?: boolean
  theme?: 'light' | 'dark' | 'auto'
  enableSyntaxHighlight?: boolean
  enableTables?: boolean
  enableTaskLists?: boolean
}

// Default configurations
export const defaultMarkdownConfig: MarkdownConfig = {
  showLineNumbers: false,
  theme: 'auto',
  enableSyntaxHighlight: true,
  enableTables: true,
  enableTaskLists: true,
}
