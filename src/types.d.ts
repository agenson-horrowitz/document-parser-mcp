// Type declarations for document parsing modules

declare module 'pdf-parse' {
  interface PDFInfo {
    Title?: string;
    Author?: string;
    Subject?: string;
    Creator?: string;
    Producer?: string;
    CreationDate?: string;
    ModDate?: string;
  }

  interface PDFData {
    numpages: number;
    numrender: number;
    info: PDFInfo;
    text: string;
  }

  function pdfParse(buffer: Buffer): Promise<PDFData>;
  export default pdfParse;
}

declare module 'tesseract.js' {
  interface Word {
    text: string;
    confidence: number;
    bbox: {
      x0: number;
      y0: number;
      x1: number;
      y1: number;
    };
  }

  interface RecognizeResult {
    data: {
      text: string;
      confidence: number;
      words?: Word[];
    };
  }

  interface Worker {
    recognize(image: Buffer | string): Promise<RecognizeResult>;
    terminate(): Promise<void>;
  }

  function createWorker(language?: string): Promise<Worker>;
  export { createWorker, Word, RecognizeResult, Worker };
}

declare module 'jsdom' {
  export class JSDOM {
    constructor(html: string, options?: { url?: string });
    window: {
      document: Document;
    };
  }
}

declare module 'turndown' {
  export default class TurndownService {
    constructor(options?: {
      headingStyle?: string;
      bulletListMarker?: string;
      codeBlockStyle?: string;
      emDelimiter?: string;
      strongDelimiter?: string;
    });
    turndown(html: string): string;
  }
}

declare module 'sharp' {
  interface Sharp {
    greyscale(): Sharp;
    normalize(): Sharp;
    sharpen(): Sharp;
    png(): Sharp;
    toBuffer(): Promise<Buffer>;
  }

  function sharp(buffer: Buffer): Sharp;
  export default sharp;
}

declare module 'cheerio' {
  interface CheerioAPI {
    (selector: string): CheerioAPI;
    find(selector: string): CheerioAPI;
    each(callback: (index: number, element: any) => void): void;
    text(): string;
    html(): string | null;
    remove(): CheerioAPI;
    load(html: string): CheerioAPI;
  }
  
  function load(html: string): CheerioAPI;
  export { load, CheerioAPI };
}