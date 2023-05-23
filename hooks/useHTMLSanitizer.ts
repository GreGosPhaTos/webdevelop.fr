import DOMPurify from 'isomorphic-dompurify';

export const useHTMLSanitizer = (): { sanitizeHTML: (htmlString: string) => string } => {
  const sanitizeHTML = (htmlString: string): string => DOMPurify.sanitize(htmlString);
  return { sanitizeHTML };
};
