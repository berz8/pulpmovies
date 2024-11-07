"use client";

import type { Cast, Credits } from "@/types/tmdb/credits";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export default function Credits({ credits }: { credits: Credits }) {
	return (
		<div className="grid grid-cols-4 gap-2 lg:grid-cols-8">
			{credits.cast.slice(0, 8).map((person) => (
				<CastCard person={person} key={person.id} />
			))}
		</div>
	);
}

function CastCard({ person }: { person: Cast }) {
	const photoPath = !person.profile_path
		? "/images/fallback-profile.jpg"
		: `https://image.tmdb.org/t/p/w185${person.profile_path}`;
	return (
		<Link
			href={`/person/${person.id}-${slugify(person.name)}`}
			prefetch={true}
			className="w-full rounded-lg overflow-hidden bg-[rgba(255,255,255,0.1)]"
		>
			<Image
				loading="eager"
				src={photoPath}
				width={185}
				height={278}
				quality={80}
				alt={person.name}
			/>
			<div className="px-1 py-2 text-xs">
				<div className="font-bold">{person.name}</div>
				<div className="opacity-60 italic">{person.character}</div>
			</div>
		</Link>
	);
}
