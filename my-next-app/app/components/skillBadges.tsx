import Link from "next/link"

import { Badge } from "@/components/ui/badge"

export function CodingBadges() {
  return (
    <> {/* Use a React Fragment to group multiple badges */}
      <Badge asChild>
        <Link href="/">Python • 6/10</Link>
      </Badge>
      <Badge asChild>
        <Link href="/">JavaScript • 4/10</Link>
      </Badge>
      <Badge asChild>
        <Link href="/">HTML & CSS • 5/10</Link>
      </Badge>
    </>
  );
}

export function SoftSkillBadges() {
  return (
    <>
      <Badge asChild>
        <Link href="/">Communication • 6/10</Link>
      </Badge>
      <Badge asChild>
        <Link href="/">Time Management • 4/10</Link>
      </Badge>
      <Badge asChild>
        <Link href="/">Perseverence • 8/10</Link>
      </Badge>
    </>
  );
}

export function PassionBadges() {
  return (
    <>
      <Badge asChild>
        <Link href="/">Photography</Link>
      </Badge>
      <Badge asChild>
        <Link href="/">Fitness & Lifestyle</Link>
      </Badge>
      <Badge asChild>
        <Link href="/">Family</Link>
      </Badge>
    </>
  );
}