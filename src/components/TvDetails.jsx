import React, { startTransition, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "./store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path ||
          info.detail.poster_path ||
          info.detail.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full relative overflow-x-hidden p-5"
    >
      {}
      <nav className="w-full h-[10vh] sm:mb-3 sm:h-[5vw]  text-zinc-100 flex  gap-7 items-center font-semibold text-1xl  ">
        <Link
         
          to={`/movie`}
          className="hover:text-[#ffffdd]  hover:bg-black  text-3xl font-semibold mr-2 rounded-full mt-1 duration-300 cursor-pointer text-zinc-400 ri-arrow-left-line"
        ></Link>
        <Link target="_blank" to={info.detail.homepage}>
          <i className="hover:text-yellow-300 duration-200 ri-external-link-fill"></i>
        </Link>
        <Link
          target="_blank"
          to={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="hover:text-yellow-300 duration-200 ri-earth-fill"></i>
        </Link>
        <Link
          className="hover:text-yellow-300 duration-200"
          target="_blank"
          to={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          IMDB
        </Link>
        <Link to={`/`}>
          <i className="hover:text-yellow-300 duration-200 ri-home-4-line"></i>
        </Link>
      </nav>
      {}
      <div className="w-full h-[70vh] sm:h-[50vh]  flex sm:block">
        <div className="w-[30%] sm:w-full h-full flex items-center justify-center">
          <img
            className=" w-[55%] sm:w-[60%] shadow-md rounded "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt=""
          />
        </div>
        <div className="w-[70%]  sm:hidden h-full text-white">
          <h1 className="text-4xl mb-2 font-black">
            {}
               {info.detail.title ||
              info.detail.original_title ||
              info.detail.name ||
              info.detail.original_name}
             
            <small className="text-xl font-semibold text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>
          <div className="w-full h-[10%] flex gap-3 text-zinc-100 items-center">
            {info.detail.vote_average && (
              <div className=" text-white text-[1.3vw] bg-yellow-500 w-[3vw] h-[3vw] flex items-center justify-center rounded-full">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </div>
            )}
            <h1 className="font-bold leading-none ">
              User <br /> Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g, i) => g.name).join(" , ")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>
          <h3 className="text-xl mt-2 italic font-semibold">
            {info.detail.tagline}
          </h3>
          <h2 className="text-2xl  font-bold">overview</h2>
          <p className="text-sm leading-none mb-3">{info.detail.overview}</p>

          <h2 className="text-2xl font-bold">Movie Translated</h2>
          <p className="text-sm leading-none mb-5">
            {info.translations.join(" , ")}
          </p>
          <Link
            className="px-5 py-4 inline-block bg-[#ffffdd] rounded-md text-black font-semibold"
            to={`${pathname}/trailer`}
          >
            <i className=" mr-2 ri-play-fill"></i>
            Play Trailer
          </Link>
          <Link
            className=" ml-3 px-5 py-4 inline-block bg-[#ffffdd] rounded-md text-black font-semibold"
            to={`${pathname}/player`}
          >
            <i className=" mr-2 ri-play-fill"></i>
            Play <sub>Link 1</sub>
          </Link>
          <Link
            className=" ml-3 px-5 py-4 inline-block bg-[#ffffdd] rounded-md text-black font-semibold"
            to={`${pathname}/playertwo`}
          >
            <i className=" mr-2 ri-play-fill"></i>
            Play <sub>Link 2</sub>
          </Link>
          <h1 className="text-red-400 font-semibold mt-2">Note : Connect <a className="text-blue-600" target="_blank" href="https://1.1.1.1/">DNS</a> , If Link Not Working. </h1>
        </div>
      </div>
      <div className=" hidden sm:block w-full mb-5  text-white">
        <h1 className="text-4xl sm:text-2xl mb-2 font-black">
          {}
             {info.detail.title ||
              info.detail.original_title ||
              info.detail.name ||
              info.detail.original_name}
          <small className="text-xl font-semibold text-zinc-300">
            ({info.detail.release_date.split("-")[0]})
          </small>
        </h1>
        <div className="w-full h-[10%] sm:h-[25%] mt-3 sm:block gap-3 text-zinc-100 items-center">
          {info.detail.vote_average && (
            <div className="w-full flex gap-3 items-center">
              <div className=" text-white  text-[1.3vw] sm:text-[4vw] bg-yellow-500 w-[3vw] h-[3vw] sm:w-[10vw] sm:h-[10vw] flex items-center justify-center rounded-full">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </div>
              <h1 className="font-bold sm:text-2xl  leading-none ">
            User <br /> Score
          </h1>
            </div>
          )}
        
          <h1 className="text-2xl">{info.detail.release_date}</h1>
          <h1 className="text-2xl">{info.detail.genres.map((g, i) => g.name).join(" , ")}</h1>
          {info.detail.runtime && <h1 className="text-2xl">{info.detail.runtime}min</h1> }
          
        </div>
        <h3 className="text-xl sm:text-2xl mt-2 italic font-semibold">
          {info.detail.tagline}
        </h3>
        <h2 className="text-2xl  sm:text-3xl font-bold">overview</h2>
        <p className="text-sm sm:text-xl sm:leading-none leading-none mb-3">{info.detail.overview}</p>

        <h2 className="text-2xl sm:text-3xl font-bold">Movie Translated</h2>
        <p className="text-sm sm:text-xl sm:leading-none leading-none mb-5">
          {info.translations.join(" , ")}
        </p>
        <Link
          className="px-3 mb-2 py-2 inline-block bg-[#ffffdd] rounded-md text-black font-semibold"
          to={`${pathname}/trailer`}
        >
          <i className=" mr-2 ri-play-fill"></i>
          Play Trailer
        </Link>
        <Link
            className=" ml-3 px-3 py-2 inline-block bg-[#ffffdd] rounded-md text-black font-semibold"
            to={`${pathname}/player`}
          >
            <i className=" mr-2 ri-play-fill"></i>
            Play <sub>Link 1</sub>
          </Link>
          <Link
            className=" ml-3 px-3 py-2 inline-block bg-[#ffffdd] rounded-md text-black font-semibold"
            to={`${pathname}/playertwo`}
          >
            <i className=" mr-2 ri-play-fill"></i>
            Play <sub>Link 2</sub>
          </Link>
          <h1 className="text-red-400 font-semibold mt-2">Note : Connect <a className="text-blue-600" target="_blank" href="https://1.1.1.1/">DNS</a>  , If Link Not Working. </h1>
      </div>
      {}
      {}
      {info.watchproviders &&
      info.watchproviders.flatrate &&
      info.watchproviders.flatrate ? (
        <div className="w-full h-[10%]  flex gap-3 items-center">
          <h1 className="font-semibold sm:ml-3 flex justify-end text-white">
            Available On Platforms
          </h1>
          {info.watchproviders &&
            info.watchproviders.flatrate &&
            info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className=" h-[80%] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
        </div>
      ) : (
        ""
      )}

      {info.watchproviders &&
      info.watchproviders.rent &&
      info.watchproviders.rent ? (
        <div className="w-full h-[10%] flex gap-3 items-center">
          <h1 className="font-semibold w-[15%] sm:ml-3 flex justify-end text-white">
            Available On Rent
          </h1>
          {info.watchproviders &&
            info.watchproviders.rent &&
            info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className=" h-[80%] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
        </div>
      ) : (
        ""
      )}

      {info.watchproviders &&
      info.watchproviders.buy &&
      info.watchproviders.buy ? (
        <div className="w-full h-[10%] flex gap-3 items-center">
          <h1 className="font-semibold w-[15%] sm:ml-3 flex justify-end text-white">
            Available To Buy
          </h1>
          {info.watchproviders &&
            info.watchproviders.buy &&
            info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className=" h-[80%] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
        </div>
      ) : (
        ""
      )}
      {}
      {}

      <div className="mt-5">
        <hr />
        <h1 className="text-2xl font-semibold text-white mt-3 ">
          Recommendations & Similar Stuff
        </h1>
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
        <Outlet/>
      </div>
      
    </div>
  ) : (
    <Loading />
  );
};
export default MovieDetails;