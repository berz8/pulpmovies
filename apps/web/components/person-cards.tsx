"use client";

import type { Cast, Crew } from "@/types/tmdb/credits";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { cn } from "@/lib/utils";

export function CastCard({
	person,
	variant = "card",
}: { person: Cast; variant?: "card" | "list" }) {
	const photoPath = !person.profile_path
		? "/images/fallback-profile.jpg"
		: `https://image.tmdb.org/t/p/w185${person.profile_path}`;
	return (
		<Link
			href={`/person/${person.id}-${slugify(person.name)}`}
			prefetch={true}
			className={cn(
				"w-full rounded-lg overflow-hidden bg-[rgba(255,255,255,0.1)]",
				variant === "list" && "flex gap-3",
			)}
		>
			<Image
				loading="lazy"
				src={photoPath}
				width={185}
				height={278}
				quality={70}
				alt={person.name}
				className={cn(variant === "list" && "h-20 w-auto")}
			/>
			<div
				className={cn(
					"px-1 py-2",
					variant === "list" ? "text-base" : "text-xs",
				)}
			>
				<div className="font-bold">{person.name}</div>
				<div className="opacity-60 italic">{person.character}</div>
			</div>
		</Link>
	);
}

export function CrewCard({
	person,
	variant = "card",
}: { person: Crew; variant?: "card" | "list" }) {
	const photoPath = !person.profile_path
		? "/images/fallback-profile.jpg"
		: `https://image.tmdb.org/t/p/w185${person.profile_path}`;
	return (
		<Link
			href={`/person/${person.id}-${slugify(person.name)}`}
			prefetch={true}
			className={cn(
				"w-full rounded-lg overflow-hidden bg-[rgba(255,255,255,0.1)]",
				variant === "list" && "flex gap-3",
			)}
		>
			<Image
				loading="lazy"
				src={photoPath}
				width={185}
				height={278}
				quality={70}
				alt={person.name}
				className={cn(variant === "list" && "h-20 w-auto")}
			/>
			<div
				className={cn(
					"px-1 py-2",
					variant === "list" ? "text-base" : "text-xs",
				)}
			>
				<div className="font-bold">{person.name}</div>
				<div className="opacity-60 italic">{person.job}</div>
			</div>
		</Link>
	);
}
