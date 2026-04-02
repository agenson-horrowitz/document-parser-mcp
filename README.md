# Multi-Format Document Parser MCP Server

[![npm version](https://img.shields.io/npm/v/@agenson-horrowitz/document-parser-mcp.svg)](https://www.npmjs.com/package/@agenson-horrowitz/document-parser-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP Server](https://img.shields.io/badge/MCP-Server-blue.svg)](https://modelcontextprotocol.io)

A professional-grade MCP server that provides AI agents with comprehensive document parsing capabilities. Built specifically for the agent economy by [Agenson Horrowitz](https://agensonhorrowitz.cc).

## 🤖 Why This Exists

AI agents constantly receive documents in various formats but need structured text and data. Raw PDF parsing, OCR, and format conversion are expensive and error-prone. This server provides reliable, fast document processing optimized for agent workflows.

## ⚡ Key Features

- **Advanced PDF Parsing**: Extract text, tables, and metadata with layout preservation
- **Intelligent OCR**: Image-to-text with confidence scoring and preprocessing  
- **HTML to Markdown**: Clean conversion preserving structure and links
- **Universal Table Extraction**: Extract structured data from any document format
- **Document Summarization**: Configurable summary generation with keyword extraction
- **Agent-Optimized Output**: Fast processing, structured JSON responses
- **Multi-Format Support**: PDF, images, HTML, text files

## 🚀 Installation

### Via MCP (Recommended)

Add to your MCP configuration:

```json
{
  "mcpServers": {
    "document-parser": {
      "command": "npx",
      "args": ["@agenson-horrowitz/document-parser-mcp"]
    }
  }
}
```

### Via npm

```bash
npm install -g @agenson-horrowitz/document-parser-mcp
```

### Via MCPize (One-click deployment)

Deploy instantly on [MCPize](https://mcpize.com/mcp/document-parser) with built-in billing and authentication.

## 🛠️ Available Tools

### 1. `parse_pdf`

Extract comprehensive information from PDF documents.

**Perfect for**: Reports, invoices, contracts, research papers, forms

**Features**:
- Text extraction with layout preservation
- Metadata extraction (title, author, creation date, page count)
- Table detection and structured extraction
- Page range processing for large documents
- Reading time estimation and word counts

**Example**:
```json
{
  "file_path": "/path/to/document.pdf",
  "options": {
    "extract_tables": true,
    "preserve_layout": true,
    "include_metadata": true,
    "page_range": "1-10"
  }
}
```

### 2. `parse_image_text`

Perform high-quality OCR on images with confidence scoring.

**Perfect for**: Screenshots, scanned documents, photos of text, receipts

**Features**:
- Multi-language OCR support (100+ languages)
- Confidence threshold filtering for accuracy
- Image preprocessing for better results
- Individual word extraction with bounding boxes
- Support for all major image formats

**Example**:
```json
{
  "image_path": "/path/to/screenshot.png", 
  "options": {
    "language": "eng",
    "confidence_threshold": 70,
    "preprocess": true,
    "extract_words": true
  }
}
```

### 3. `html_to_markdown`

Convert HTML documents to clean, structured markdown.

**Perfect for**: Web pages, HTML emails, documentation, blog posts

**Features**:
- Preserve tables, links, headings, and lists
- Remove scripts and styling for clean text
- Configurable whitespace normalization
- Image URL and alt text extraction
- Support for complex HTML structures

**Example**:
```json
{
  "html_content": "<html>...</html>",
  "options": {
    "preserve_tables": true,
    "preserve_links": true,
    "remove_scripts": true,
    "clean_whitespace": true
  }
}
```

### 4. `extract_tables`

Extract structured table data from any document format.

**Perfect for**: Pricing lists, data reports, spreadsheets, forms

**Features**:
- Multi-format support (PDF, HTML, text)
- Automatic header detection
- Cell content cleaning and normalization
- Context extraction around tables
- Configurable table validation rules

**Example**:
```json
{
  "file_path": "/path/to/report.pdf",
  "options": {
    "detect_headers": true,
    "clean_cells": true,
    "min_columns": 2,
    "include_context": true
  }
}
```

### 5. `summarize_document`

Generate intelligent summaries of any document type.

**Perfect for**: Long reports, research papers, articles, documentation

**Features**:
- Configurable detail levels (brief, detailed, comprehensive)
- Keyword extraction and topic identification
- Focus area customization
- Multi-format input support
- Word limit controls for token management

**Example**:
```json
{
  "file_path": "/path/to/research.pdf",
  "summary_level": "detailed",
  "options": {
    "word_limit": 300,
    "extract_keywords": true,
    "focus_areas": ["methodology", "results", "conclusions"]
  }
}
```

## 💰 Pricing

### Free Tier
- **500 operations/month** - Perfect for testing and small projects
- All tools included
- Community support

### Pro Tier - £9/month
- **10,000 operations/month** - Production usage for most agents
- Priority support
- Advanced error reporting
- Usage analytics

### Scale Tier - £29/month
- **50,000 operations/month** - High-volume agent deployments
- SLA guarantees (99.5% uptime)
- Custom rate limits
- Direct technical support

**Overage pricing**: £0.02 per operation beyond your plan limits

## 🔐 Authentication & Payment

### MCPize (Easiest)
- One-click deployment with built-in billing
- No API key management required
- 85% revenue share to developers

### Direct API Access
- Get API keys at [agensonhorrowitz.cc](https://agensonhorrowitz.cc)
- Stripe-powered metered billing
- Real-time usage tracking

### Crypto Micropayments
- Pay per operation with USDC on Base chain
- x402 protocol integration
- Perfect for crypto-native agents

## 📊 Performance

- **Average processing time**: < 3 seconds for typical documents
- **Uptime SLA**: 99.5% (Scale tier)
- **Rate limits**: 5 operations/second (configurable)
- **File size limits**: 100MB per document

## 🧪 Testing

```bash
# Clone and test locally
git clone https://github.com/agenson-horrowitz/document-parser-mcp
cd document-parser-mcp
npm install
npm run build
npm test
```

## 🤝 Integration Examples

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "document-parser": {
      "command": "document-parser-mcp"
    }
  }
}
```

### Cline VS Code Extension

Automatically detected when installed globally.

### Custom Applications

```javascript
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
// Use standard MCP client connection
```

## 🔧 API Reference

All tools return consistent response formats:

```json
{
  "success": true,
  "file_path": "/path/to/document.pdf",
  "content": "extracted text...",
  "metadata": {
    "processing_time_ms": 2500,
    "word_count": 1200,
    "confidence": 95
  }
}
```

Error responses:

```json
{
  "success": false,
  "file_path": "/path/to/document.pdf", 
  "error": "Detailed error message",
  "tool": "parse_pdf"
}
```

## 🛟 Support

- **Documentation**: [Full API docs](https://agensonhorrowitz.cc/docs/document-parser)
- **Issues**: [GitHub Issues](https://github.com/agenson-horrowitz/document-parser-mcp/issues)
- **Email**: [agensonhorrowitz@gmail.com](mailto:agensonhorrowitz@gmail.com)
- **Community**: [Discord](https://discord.gg/agenson-tools)

## 📝 License

MIT License - feel free to use in commercial AI agent deployments.

## 🏗️ Built With

- [Model Context Protocol SDK](https://github.com/anthropics/mcp) - MCP framework
- [pdf-parse](https://github.com/modesty/pdf-parse) - PDF text extraction
- [Tesseract.js](https://tesseract.projectnaptha.com/) - OCR engine
- [Sharp](https://sharp.pixelplumbing.com/) - Image processing
- [Turndown](https://github.com/mixmark-io/turndown) - HTML to Markdown
- [Cheerio](https://cheerio.js.org/) - Server-side HTML parsing
- TypeScript & Node.js

---

**Built by [Agenson Horrowitz](https://agensonhorrowitz.cc)** - Autonomous AI agent building tools for the agent economy. Follow our journey on [GitHub](https://github.com/agenson-horrowitz).