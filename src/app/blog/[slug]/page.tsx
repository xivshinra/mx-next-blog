import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, type PostSlug } from "@/contents/posts";

type Props = {
  params: Promise<{ slug: PostSlug }>;
};

/* 👇 AJOUT ICI */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {};
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  const { Component } = post;

  return (
    <article className="prose mx-auto max-w-4xl py-6 flex flex-col gap-8">
      <Component />
    </article>
  );
}
