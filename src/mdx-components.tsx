import { PostCallout } from "@/components/posts/PostCallout";
import { PostSection } from "@/components/posts/PostSection";
import { PostParagraph } from "@/components/posts/PostParagraph";

export function useMDXComponents(components = {}) {
  return {
    PostCallout,
    PostSection,
    PostParagraph,
    ...components,
  };
}
