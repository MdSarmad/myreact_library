import React, {useState,useRef,useEffect} from 'react'
import './Carousel.css';
import {CarouselData as images } from './CarouselData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = ({
                data,
                delay,
                arrow,
                slide,
                next,
                previous,
                dots,
                width,
                height,
                captionHeader,
                captionText,
                dark
    }) => {

    const [current,setCurrent] = useState(0);
    const autoPlayRef = useRef();
    // const [dot,setDot] = useState(false);

    useEffect(()=>{
        autoPlayRef.current = right
    })

    useEffect(()=>{
        const play = () =>{
            autoPlayRef.current()
        }

        if(delay!==null && slide){
            const interval = setInterval(play,delay)
            return () => clearInterval(interval)
        }
    },[delay,slide])

    const len = data.length;

    const left = () => setCurrent(current===0?len-1:current-1);
    const right = () => setCurrent(current===len-1?0:current+1);

    const carouselStyle = {
        width:width,
        height:height,
    }
    const darkStyle = {
        backgroundColor: 'black',
    }

    // const dotStyle = {
    //     backgroundColor: 'blue',
    // }

    
    

    if(!Array.isArray(data) || data.length<=0){
        return null;
    }


    return (
        <section className='images' style={dark ? darkStyle : null}>
            {captionHeader && <div className='captionHeader'>{captionHeader}</div>}
            {arrow ? <FaArrowAltCircleLeft onClick={left} className='leftArrow' style={dark?{color:'white'}:null}/> : previous?<FaArrowAltCircleLeft onClick={left} className='leftArrow' style={dark?{color:'white'}:null} />:null}
            {images.map((image,index)=>{
                return(
                    <div className={index===current?'slide active':'slide'} key={index}>
                        {
                            index===current && <img src={image.image} alt='mountain pictures' className='image' style={carouselStyle} />
                        }
                    </div>
                )
            })}
            {arrow ? <FaArrowAltCircleRight onClick={right} className='rightArrow' style={dark?{color:'white'}:null} /> : next ? <FaArrowAltCircleRight onClick={right} className='rightArrow' style={dark?{color:'white'}:null} /> : null}
            {captionText && <div className='captionText'>{captionText}</div>}
            {
                dots 
                &&
                <div className="fiveDots">
                <div className="dot dot1" onClick={()=>setCurrent(0)}></div>
                <div className="dot dot1" onClick={()=>setCurrent(1)}></div>
                <div className="dot dot2" onClick={()=>setCurrent(2)}></div>
                <div className="dot dot3" onClick={()=>setCurrent(3)}></div>
                <div className="dot dot4" onClick={()=>setCurrent(4)}></div>
            </div>
            }
        </section>
    )
}

Carousel.defaultProps = {
    delay: 5000,
}

export default Carousel
