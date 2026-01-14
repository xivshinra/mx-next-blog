import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostsByTag, getAllTags } from "@/contents/posts";

type Props = {
  params: Promise<{ tag: string }>;
};

export default async function BlogByTagPage({ params }: Props) {
  const { tag } = await params;

  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold">Articles tagués “{tag}”</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.metadata.slug}>
            <Link href={`/blog/${post.metadata.slug}`}>
              {post.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function generateStaticParams() {
  return getAllTags().map((tag) => ({
    tag,
  }));
}
