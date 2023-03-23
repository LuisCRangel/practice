import React, { useState } from 'react'

const Carrusel = () => {
  const [position, setPosition] = useState(0);
  const cards = [
    {
      text : 'Action,2016',
      movieName : 'Den of Thieves',
      picture : 'https://amc-theatres-res.cloudinary.com/v1579120178/amc-cdn/production/2/movies/53300/53336/Poster/p_800x1200_AMC_DenofThieves_01072020.jpg'
    },
    {
      text : 'Action, thiller,2018',
      movieName : 'Garra',
      picture : 'https://es.web.img3.acsta.net/pictures/22/05/10/17/09/1146719.jpg'
    },
    {
      text : 'Action, Drama,2017',
      movieName : 'Laby Bird',
      picture : 'https://pics.filmaffinity.com/Lady_Bird-546261513-large.jpg'
    },
    {
      text : 'Action, Mystery,2016',
      movieName : 'Spiderman 3',
      picture : 'https://www.lavanguardia.com/peliculas-series/images/movie/poster/2007/5/w1280/lkuQzlShE2uzJcsZYU4zBI4VQZP.jpg'
    },
    {
      text : 'Action, war,2018',
      movieName : 'American Maiden',
      picture : 'https://static.posters.cz/image/750/posters/iron-maiden-maiden-england-i150642.jpg'
    },
    {
      text : 'Action, 2011',
      movieName : 'Begin Again',
      picture : 'https://es.web.img3.acsta.net/c_310_420/pictures/14/07/01/11/52/045777.jpg'
    },
    {
      text: "Action, Comedy, 2021",
      moviename: "Freeguy",
      picture:
        "https://pics.filmaffinity.com/Free_Guy_Tomando_el_control-297648487-large.jpg",
    },
    {
      text: "Adventure, Comedy, 2022",
      moviename: "Minions Rise of Gru",
      picture:
        "https://dx35vtwkllhj9.cloudfront.net/universalstudios/minions-the-rise-of-gru/images/regions/us/onesheet.jpg",
    },
    {
      text: "Comedy, Mystery, 2019",
      moviename: "Murder Mystery",
      picture:
        "https://m.media-amazon.com/images/M/MV5BNTA2YTI5YjUtZWI4Zi00NWQ5LWFiYmEtOTBmNTUyNDAwNjllXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_.jpg",
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
    <div className=' bg-[#131722] h-full  text-white'  >
    <ul className='flex mx-auto flex-wrap gap-3 ml-40 h-10 text-white items-center text-[14px] '>
    <a href='' className='text-gray-400 font-bold  hover:text-[#24BAEF] active:text-[#24BAEF] focus:text-[#24BAEF]'>Today /</a>
    <a href=''  className='text-gray-400 font-bold  hover:text-[#24BAEF] active:text-[#24BAEF] focus:text-[#24BAEF]'>This week /</a>
    <a href='' className='text-gray-400 font-bold  hover:text-[#24BAEF] active:text-[#24BAEF] focus:text-[#24BAEF]'>Last 30 days</a>
    </ul>
  <div className='flex mx-40 xl:mx-20 lg:mx-16 items-center gap-4 text-left w-max '>     
  <div className="flex flex-nowrap  my-0 mx-[-10px] w-[900px] h-[150px]">
            {cards.slice(position, position + 6).map((card, index) => (
              <div className="slider-card w-72" key={index}>
                <img 
                  className="h-[180px]"                 
                  src={card.picture}
                  alt={card.picture}
                />  
                  <span className="text-[#667076] text-[12px]">
                    {card.text}
                  </span>
                  <p className="text-[#DDDEE0] text-[14px] font-medium">
                    {card.movieName}
                  </p>
                </div>              
            ))}
          </div>
  <div className='w-[134px] h-[170px] ml-6 text-left'>
    <hr className='w-[30px] border border-[#272B33]' />     
    <h2 className='my-3 text-2xl font-sans font-semibold'>Action & Drama Movies</h2>    
    <div className='flex gap-3 mb-6'>
    <button onClick={previousCards} className='w-7 h-7 border-2 border-[#444A5B] hover:bg-[#131722] rounded-full text-[#444A5B]'>
    <i className="bx bx-chevron-left text-[24px] font-extralight"></i>
      </button>    
    <button onClick={nextCards} className='w-7 h-7 border-2 border-[#444A5B] hover:border-[] rounded-full text-[#444A5B]'>
    <i className='bx bx-chevron-right text-[24px] font-extralight' ></i>
      </button>
      </div>      
    <hr className='w-[250px] border border-[#272B33]' />     
      <span className='text-[12px] text-[#4B5263]'>VIEW ALL &gt;</span>       
    </div>  
  </div>
</div>
  )
}

export default Carrusel