import type { MDXComponents } from "mdx/types";
import { PostCallout } from "@/components/posts/PostCallout";
import { PostSection } from "@/components/posts/PostSection";
import { PostParagraph } from "@/components/posts/PostParagraph";

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    PostCallout,
    PostSection,
    PostParagraph,
    ...components,
  };
}
