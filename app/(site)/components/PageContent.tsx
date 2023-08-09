"use client";
import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";
import React from "react";
interface pageContentProps {
  songs: Song[];
}
const PageContent: React.FC<pageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);
  return songs?.length === 0 ? (
    <div className="mt-6 text-neutral-400">No songs available</div>
  ) : (
    <div
      className="
   grid
   grid-cols-2
   sm:grid-cols-3
   md:grid-cols-3
   lg:grid-cols-4
   xl:grid-cols-5
   2xl:grid-cols-8
   gap-4
   mt-4
  "
    >
      {songs?.map((item) => (
        <SongItem
          key={item.id}
          onClick={(id: string) => onPlay(id)}
          data={item}
        />
      ))}
    </div>
  );
};

export default PageContent;
