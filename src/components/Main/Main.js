import React,{useEffect} from 'react';
import './main.css';
import img from '../../components/contentt/spot1.jpg';
import img2 from '../../components/contentt/spot2.jpg';
import img3 from '../../components/contentt/spot3.jpg';
import img4 from '../../components/contentt/spot4.jpg';
import img5 from '../../components/contentt/spot5.jpg';
import img6 from '../../components/contentt/spot6.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {GoLocation} from 'react-icons/go';
import {HiOutlineClipboardCheck} from 'react-icons/hi';

const Data =[
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees: '$700',
    description: "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.",
},
{
  id: 2,
  imgSrc: img2,
  destTitle: 'Machu Pichu',
  location: 'Peru',
  grade : 'CULTURAL RELAX',
  fees: '$600',
  description: "Huayna Picchu is a mountain in Peru,rising over Machu Picchu, the so called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simple spectacular.",
},
{
  id: 3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  location: 'Australia',
  grade : 'CULTURAL RELAX',
  fees: '$800',
  description: "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The Hallmark of this place is 'Lavish' and 'beauty'. Always interesting to be in this place.",
},
{
  id: 4,
  imgSrc: img4,
  destTitle: 'Cappadocia',
  location: 'Turkey',
  grade : 'CULTURAL RELAX',
  fees: '$600',
  description: "According to the World Tourism Ranking , 45 Million people visit Turkey each year , and from that about 2 Million come to visit Cappadocia . This place is known for its luxurious stays and adventurous activities.",
},
{
  id: 5,
  imgSrc: img5,
  destTitle: 'Guanajuato',
  location: 'Mexico',
  grade : 'CULTURAL RELAX',
  fees: '$800',
  description: "The vibrant hues of the houses are it's benchmark and explain the beauty of this place . Also , if you are a foodie and love seafood , you will be exhilarated with the choice you are about to get here . Happy exploring great food!",
},
{
  id: 6,
  imgSrc: img6,
  destTitle: 'Cinque Terre',
  location: 'Italy',
  grade : 'CULTURAL RELAX',
  fees: '$600',
  description: "Angkot wat represents the entire range of Khmer art from the 9th to the 15th century . This temple is considered the heart and soul of Cambodia . This place is known for its luxurious stays and adventurous activities.",
},
{
  id: 7,
  imgSrc: img2,
  destTitle: 'Machu Pichu',
  location: 'Peru',
  grade : 'CULTURAL RELAX',
  fees: '$600',
  description: "Huayna Picchu is a mountain in Peru,rising over Machu Picchu, the so called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simple spectacular.",
},
{
  id: 8,
  imgSrc: img4,
  destTitle: 'Cappadocia',
  location: 'Turkey',
  grade : 'CULTURAL RELAX',
  fees: '$600',
  description: "According to the World Tourism Ranking , 45 Million people visit Turkey each year , and from that about 2 Million come to visit Cappadocia . This place is known for its luxurious stays and adventurous activities.",
},
{
  id: 9,
  imgSrc: img,
  destTitle: 'Machu Pichu',
  location: 'Peru',
  grade : 'CULTURAL RELAX',
  fees: '$600',
  description: "Huayna Picchu is a mountain in Peru,rising over Machu Picchu, the so called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simple spectacular.",
},
];
const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='main container section'>
     <div className='secTitle'>
      <h3 data-aos="fade-right" className='title'>
        Most Visited Destinations
      </h3>

     </div>

     <div className='secContent grid'>
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) =>{
            return(
            <div key={id} className='singleDestination'>
                
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle}/>
                </div>
                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                  <GoLocation className='icon'/>
                  <span className='name'>{location}</span>
                  </span>
                  <div className='fees flex'>
                    <div className='grade'>
                      <span> {grade} <small>+1</small> </span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>

                    </div>
                  </div>
                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
               
            </div>
          )
        })
      }
     </div>
    </section>
  )
}

export default Main;