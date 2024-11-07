"use client";

import { CastCard } from "@/components/person-cards";
import type { Credits } from "@/types/tmdb/credits";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Credits({
	credits,
	movieUrl,
}: { credits: Credits; movieUrl: string }) {
	return (
		<>
			<div className="grid grid-cols-4 gap-2 lg:grid-cols-8">
				{credits.cast.slice(0, 8).map((person) => (
					<CastCard person={person} key={person.id} />
				))}
			</div>
			<Link
				href={`${movieUrl}/credits`}
				className="flex bg-primary/10 gap-2 items-center justify-center mt-2 py-2 rounded-lg"
				prefetch={true}
			>
				<span>Full Cast & Crew</span>
				<ChevronRight className="w-4 h-4 ml-2" />
			</Link>
		</>
	);
}
