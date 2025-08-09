"use client";

import { Clock, Users } from "lucide-react";
import type { Challenge } from "@/lib/types";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cn,
} from "@cad-challenges-hub/ui";
import { Link } from "react-router";

type Props = {
  challenge: Challenge;
  className?: string;
};

export default function ChallengeCard({ challenge, className }: Props) {
  const {
    slug,
    title,
    shortDescription,
    thumbnailImage,
    difficulty,
    category,
    estimatedTime,
    currentParticipants,
  } = challenge;

  return (
    <Card
      className={cn(
        "overflow-hidden hover:shadow-sm transition-shadow pt-0",
        className
      )}
    >
      <div className="relative aspect-[16/10] h-60 bg-muted overflow-hidden">
        <img
          src={
            thumbnailImage ||
            "/placeholder.svg?height=200&width=320&query=challenge%20thumbnail"
          }
          alt={`${title} thumbnail`}
          // fill
          className="object-cover h-full w-full"
          // sizes="(min-width: 668px) 33vw, 100vw"
          // priority={false}
        />
      </div>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full capitalize">
            {category}
          </Badge>
          <Badge className="rounded-full capitalize">{difficulty}</Badge>
        </div>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground gap-4">
          {typeof estimatedTime === "number" && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {estimatedTime} min
            </span>
          )}
          {typeof currentParticipants === "number" && (
            <span className="inline-flex items-center gap-1">
              <Users className="h-4 w-4" />
              {currentParticipants} joined
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full bg-black text-white hover:bg-black/90"
        >
          <Link to={`/challenges/${slug}`} className="w-full">
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
