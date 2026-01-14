import DemoPost, { meta as demoPostMeta } from "./demo-post.mdx";
import HelloWorld, { meta as helloWorldMeta } from "./hello-world.mdx";
import FakePost, { meta as fakePostMeta } from "./another-fake-post.mdx";

export const posts = {
  [demoPostMeta.slug]: {
    Component: DemoPost,
    metadata: demoPostMeta,
  },
  [helloWorldMeta.slug]: {
    Component: HelloWorld,
    metadata: helloWorldMeta,
  },
  [fakePostMeta.slug]: {
    Component: FakePost,
    metadata: fakePostMeta,
  },
} as const;

export function getAllPosts() {
  return Object.values(posts);
}

export function getPostsByTag(tag: string) {
  return Object.values(posts).filter((post) =>
    post.metadata.tags.includes(tag)
  );
}

export function getAllTags() {
  return Array.from(
    new Set(Object.values(posts).flatMap((post) => post.metadata.tags))
  );
}

export type PostSlug = keyof typeof posts;
