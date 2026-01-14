import Link from "next/link";
import { posts } from "@/contents/posts";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {Object.values(posts).map((post) => {
        const imageSrc = post.metadata.image ?? "/assets/placeholder.jpg";

        return (
          <Card
            key={post.metadata.slug}
            className="col-span-12 md:col-span-6 xl:col-span-4"
          >
            <CardHeader>
              <Link
                href={`/blog/${post.metadata.slug}`}
                className="text-xl font-medium"
              >
                <h2 className="line-clamp-1">{post.metadata.title}</h2>
              </Link>
            </CardHeader>

            <CardContent>
              <Image
                src={imageSrc}
                alt={post.metadata.title}
                width={400}
                height={200}
                className="rounded-md aspect-video object-cover w-full mb-4 hover:scale-102 transition-transform duration-300"
              />

              {post.metadata.description && (
                <p className="text-muted-foreground">
                  {post.metadata.description}
                </p>
              )}
            </CardContent>

            <CardFooter className="justify-between">
              <div className="flex gap-2">
                {post.metadata.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                  >
                    <Link
                      href={`/blog/tag/${tag}`}
                      className="capitalize"
                    >
                      {tag}
                    </Link>
                  </Badge>
                ))}
              </div>

              <CardAction>
                <Button
                  size="sm"
                  variant="link"
                  asChild
                >
                  <Link href={`/blog/${post.metadata.slug}`}>
                    Lire plus
                    <ArrowRight />
                  </Link>
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
