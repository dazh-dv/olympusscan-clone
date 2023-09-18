/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useMemo, useRef, useState } from "react";

export default function LazyImage({ src, alt, className, ...props }:{ src: string, alt: string, className: string }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [errorImage, setErrorImage] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const currentImgRef = imgRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (currentImgRef) {
              observer.unobserve(currentImgRef);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
  
    if (currentImgRef) {
      observer.observe(currentImgRef);
    }
  
    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!src || src === '') setErrorImage(true)
  }, []);

  return (
    <>
      <img
        alt={alt}
        src={isIntersecting ? src : "#"}
        className={className}
        ref={imgRef}
        {...props}
      />
      {(!isIntersecting || errorImage) && (
        <div
          className="w-full h-full rounded-[inherit] bg-gray-700 absolute inset-0 flex-center flex-col gap-4"
        >
          <div className={`w-4 aspect-square rounded transform rotate-45 transition-background-color ${!errorImage ? 'bg-teal-600' : 'bg-rose-400'} `}/>
        </div>
      )}
    </>
  )
}

export function Image({ srcset, alt, className, ...props }:{ srcset: string, alt: string, className: string }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [errorImage, setErrorImage] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const currentImgRef = imgRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (currentImgRef) {
              observer.unobserve(currentImgRef);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )
    
    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  const getSrcForResolution = () => {
    if(typeof window === 'undefined') return ''
    // Obtener la medida de resolución actual del dispositivo (por ejemplo, el ancho de la ventana)
    const currentResolution = window.innerWidth;
    const srcsetPairs = srcset.split(',').map(pair => {
    const match = pair.trim().match(/^(.+?)\s(\d+w)$/);
      if (match) {
        return [match[1], match[2]];
      }
      return null; // Manejar casos en los que no haya una URL y tamaño válidos
    }).filter(pair => pair !== null);
    

    let selectedUrl = null;
    let minDifference = Infinity;

    for (const pair of srcsetPairs) {
      if (pair && pair.length === 2) {
        const src = pair[0];
        const size = pair[1];
        const imageSize = parseInt(size);

        if (!isNaN(imageSize)) {
          const difference = Math.abs(imageSize - currentResolution);

          if (difference < minDifference) {
            minDifference = difference;
            selectedUrl = src;
          }
        }
      }
    }

    return selectedUrl;
  }

  useEffect(() => {
    const src = getSrcForResolution();

    if (!src) setErrorImage(true);
  }, []);

  const srcSelected = getSrcForResolution()

  return (
    <>
      <img
        alt={alt}
        src={(isIntersecting && srcSelected)? srcSelected : ''}
        className={className}
        ref={imgRef}
        {...props}
      />
      {(!isIntersecting || errorImage) && (
        <div
          className="w-full h-full rounded-[inherit] bg-gray-700 absolute inset-0 flex-center flex-col gap-4"
        >
          <div className={`w-4 aspect-square rounded transform rotate-45 transition-background-color ${!errorImage ? 'bg-teal-600' : 'bg-rose-400'} `}/>
        </div>
      )}
    </>
  );
}
