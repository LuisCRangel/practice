import React, { useState } from "react";

const Carrusel2 = () => {
  const [position, setPosition] = useState(0);
  const cards = [
    {
      text: "Comedy,2018",
      movieName: "Midnight Sun",
      picture:"https://m.media-amazon.com/images/M/MV5BMjg0NjU1MjgyNF5BMl5BanBnXkFtZTgwNzc5NjYyNDM@._V1_.jpg",
    },
    {
      text: "Action, Comedy,2018",
      movieName: "Chapter Verse",
      picture:"https://m.media-amazon.com/images/M/MV5BZTI2ZTU0MTEtODU0ZS00ZTBiLTk0ZjUtYjJjYWRkNzAxY2JiL2ltYWdlXkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_.jpg",
    },
    {
      text: "Comedy,2018",
      movieName: "Bad Genius",
      picture:"https://m.media-amazon.com/images/M/MV5BMzMxMTFlMDYtNjIyNS00YzQ4LWJlMDAtNGQwY2RlZGJiMmM1XkEyXkFqcGdeQXVyNzEyMTA5MTU@._V1_.jpg",
    },
    {
      text: "Comedy, thiller,2018",
      movieName: "My Generation",
      picture:"https://m.media-amazon.com/images/M/MV5BMTFkZTQxYjctNTM4Ni00MTU0LWI0NTQtZTliYmQ3NjBjMGJmXkEyXkFqcGdeQXVyMjQyMDc0MzQ@._V1_.jpg",
    },
    {
      text: "Comedy, war,2018",
      movieName: "Have a Nice Day",
      picture:"https://es.web.img2.acsta.net/pictures/18/03/08/15/46/4440208.jpg",
    },
    {
      text: "Comedy, 2018",
      movieName: "Gnome Alone",
      picture:"https://3.bp.blogspot.com/-gG4PQP8eg2Q/XBi_kIPrzhI/AAAAAAAACtY/sMv11xRkOlEO14koK3ob6fWncY9S_Dd9QCLcBGAs/s1600/gnome_alone_ver4_xlg.jpg",
    },
    {
      text: "Action, Comedy, 2021",
      moviename: "Freeguy",
      picture:"https://pics.filmaffinity.com/Free_Guy_Tomando_el_control-297648487-large.jpg",
    },
    {
      text: "Adventure, Comedy, 2022",
      moviename: "Minions Rise of Gru",
      picture:"https://dx35vtwkllhj9.cloudfront.net/universalstudios/minions-the-rise-of-gru/images/regions/us/onesheet.jpg",
    },
    {
      text: "Comedy, Mystery, 2019",
      moviename: "Murder Mystery",
      picture:"https://m.media-amazon.com/images/M/MV5BNTA2YTI5YjUtZWI4Zi00NWQ5LWFiYmEtOTBmNTUyNDAwNjllXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_.jpg",
    },
  ];

  const previousCards = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const nextCards = () => {
    if (position < cards.length - 6) {
      setPosition(position + 1);
    }
  };

  return (
    <div className="bg-[#0F131D] text-white h-full">
      <ul className="flex flex-wrap gap-3 ml-[450px] xl:ml-[380px] text-white h-12 items-center text-[14px] ">
        <a href="" className="text-gray-400 font-bold  hover:text-[#24BAEF]">
          Today /
        </a>
        <a href="" className="text-gray-400 font-bold  hover:text-[#24BAEF]">
          This week /
        </a>
        <a href="" className="text-gray-400 font-bold  hover:text-[#24BAEF]">
          Last 30 days
        </a>
      </ul>
      <div className="flex mx-40 xl:mx-20 lg:mx-16 items-center gap-4 text-left">
        <div className="w-[234px] h-[170px] mr-9">
          <hr className="w-[30px] border border-[#272B33]" />
          <h2 className="my-3 text-2xl font-sans font-semibold">
            Funniest Comedy Movies of 2018
          </h2>
          <div className="flex gap-3 mb-6">
            <button
              onClick={previousCards}
              className="w-7 h-7 border-2 border-[#444A5B] rounded-full text-[#444A5B]"
            >
              <i className="bx bx-chevron-left text-[24px]"></i>
            </button>
            <button
              onClick={nextCards}
              className="w-7 h-7 border-2 border-[#444A5B] rounded-full text-[#444A5B]"
            >
              <i className="bx bx-chevron-right text-[24px]"></i>
            </button>
          </div>
          <hr className="w-[250px] border border-[#272B33]" />
          <span className="text-[12px]  text-[#4B5263]">VIEW ALL &gt; </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-nowrap mx-[-10px] w-max h-[150px]">
            {cards.slice(position, position + 6).map((card, index) => (
              <div className="slider-card" key={index}>
                <img
                  className="h-[180px]"
                  src={card.picture}
                  alt={card.picture}
                />
                <span className="text-[#667076] text-[12px]">
                  {card.text}
                </span>
                <p className="text-[#DDDEE0] text-[13px] font-medium">
                  {card.movieName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel2;
