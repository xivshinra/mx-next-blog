declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { PostMeta } from "@/contents/posts/types";

  export const meta: PostMeta;

  const MDXComponent: ComponentType<any>;
  export default MDXComponent;
}
