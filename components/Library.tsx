"use client";
import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModel from "@/hooks/useAuthModel";
import { useUser } from "@/hooks/useUser";
import useUploadModel from "@/hooks/useUploadModel";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
interface LibraryProps {
  songs: Song[];
}
const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authmodal = useAuthModel();
  const uploadModal = useUploadModel();
  const { user } = useUser();
  const onPlay = useOnPlay(songs)
  function onClick() {
    if (!user) return authmodal.onOpen();
    //  check for subscription
    return uploadModal.onOpen();
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-2 px-3">
        {songs.map((item) => (
          <MediaItem key={item.id} onClick={(id: string) => onPlay(id)} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Library;
