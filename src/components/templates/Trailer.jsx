import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  const Navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return ytvideo ? (
    <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.9)] text-white w-screen h-screen flex items-center justify-center">
      <Link
        onClick={() => Navigate(-1)}
        className="hover:text-[#ffffdd]  hover:bg-black  text-3xl font-semibold mr-2 rounded-full mt-1 duration-300 cursor-pointer text-zinc-400 ri-close-fill absolute top-5 right-16"
      ></Link>
      <ReactPlayer
        width={1000}
        height={500}
        controls
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />

      {}
      {}
    </div>
  ) : (
    <Notfound />
  );
};

export default Trailer;
