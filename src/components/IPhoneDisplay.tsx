"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const IPhoneDisplay = () => {
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<string, boolean>>({});
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const handleImageError = (imageId: string) => {
    setImageLoadErrors((prev) => ({ ...prev, [imageId]: true }));
  };

  const handleImageLoad = (imageId: string) => {
    setImagesLoaded((prev) => ({ ...prev, [imageId]: true }));
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  // First scroll animation - zoom effect
  const { scrollYProgress: scrollProgress1 } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Second scroll animation - split effect
  const { scrollYProgress: scrollProgress2 } = useScroll({
    target: section2Ref,
    offset: ["start start", "end start"]
  });

  // First section animations - zoom from 3x to 1x (reduced for better view)
  const scale = useTransform(scrollProgress1, [0, 0.5, 1], [3, 1.8, 1]);
  const yPosition = useTransform(scrollProgress1, [0, 0.5, 1], ['0%', '-30%', '0%']);

  // Second section animations - split phones apart
  const leftPhoneX = useTransform(scrollProgress2, [0, 0.6], ['0%', '-180px']);
  const rightPhoneX = useTransform(scrollProgress2, [0, 0.6], ['0%', '180px']);
  const leftTextX = useTransform(scrollProgress2, [0, 0.6], ['0%', '-100px']);
  const rightTextX = useTransform(scrollProgress2, [0, 0.6], ['0%', '100px']);
  const textOpacity = useTransform(scrollProgress2, [0, 0.4], [0, 1]);
  const phoneOpacity = useTransform(scrollProgress2, [0.6, 0.85], [1, 0]);
  const behindPhoneX1 = useTransform(scrollProgress2, [0.6, 1], ['0%', '-120px']);
  const behindPhoneX2 = useTransform(scrollProgress2, [0.6, 1], ['0%', '120px']);

  return (
    <>
      {/* Section 1 - Initial zoom animation */}
      <section
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#ffe5db] text-center leading-relaxed"
            style={{ fontFamily: 'Neuzeit, sans-serif' }}
          >
            The custom OLED displays on iPhone&nbsp;X deliver the most accurate color in the industry, HDR, and true blacks. And iPhone&nbsp;Xs Max has our largest display ever on an&nbsp;iPhone.
          </h2>
        </div>
      </section>

      {/* Section 2 - Split animation */}
      <section
        ref={section2Ref}
        className="relative h-[200vh] w-full overflow-hidden bg-black"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              scale,
              y: yPosition,
            }}
          >
            <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto px-4">
              {/* Left text label */}
              <motion.div
                className="absolute left-4 md:left-20 lg:left-32 text-left z-20"
                style={{
                  x: leftTextX,
                  opacity: textOpacity
                }}
              >
                <p className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-1 whitespace-nowrap">
                  iPhone Xs Max
                </p>
                <p className="text-white/80 font-normal text-base md:text-lg lg:text-xl whitespace-nowrap">
                  6.5" display
                </p>
              </motion.div>

              {/* Center phones container */}
              <div className="relative flex items-center justify-center" style={{ width: '400px', height: '700px' }}>
                {/* Left iPhone Group */}
                <motion.div
                  className="absolute"
                  style={{ x: leftPhoneX, left: '50%', marginLeft: '-100px' }}
                >
                  <div className="relative" style={{ width: '240px', height: '480px' }}>
                    {/* Front Phone */}
                    <motion.div
                      className="absolute top-0 left-0 z-20"
                      style={{
                        opacity: phoneOpacity,
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      {!imageLoadErrors['left-front'] ? (
                        <div className="relative w-full h-full">
                          {!imagesLoaded['left-front'] && (
                            <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-[40px]" />
                          )}
                          <Image
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/iphone-1.png"
                            alt="iPhone Xs Max front"
                            fill
                            sizes="240px"
                            className="object-contain"
                            onError={() => handleImageError('left-front')}
                            onLoad={() => handleImageLoad('left-front')}
                            priority
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-800 rounded-[40px] flex items-center justify-center">
                          <p className="text-white/60 text-xs">Image unavailable</p>
                        </div>
                      )}
                    </motion.div>

                    {/* Back Phone */}
                    <motion.div
                      className="absolute top-0 left-0 z-10"
                      style={{
                        x: behindPhoneX1,
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      {!imageLoadErrors['left-back'] ? (
                        <div className="relative w-full h-full">
                          {!imagesLoaded['left-back'] && (
                            <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-[40px]" />
                          )}
                          <Image
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/iphone-left.png"
                            alt="iPhone Xs Max back"
                            fill
                            sizes="240px"
                            className="object-contain"
                            onError={() => handleImageError('left-back')}
                            onLoad={() => handleImageLoad('left-back')}
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-700 rounded-[40px] flex items-center justify-center">
                          <p className="text-white/60 text-xs">Image unavailable</p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right iPhone */}
                <motion.div
                  className="absolute"
                  style={{ x: rightPhoneX, left: '50%', marginLeft: '-80px' }}
                >
                  <div className="relative" style={{ width: '210px', height: '420px' }}>
                    {/* Front Phone */}
                    <motion.div
                      className="absolute top-0 left-0 z-20"
                      style={{
                        opacity: phoneOpacity,
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      {!imageLoadErrors['right-front'] ? (
                        <div className="relative w-full h-full">
                          {!imagesLoaded['right-front'] && (
                            <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-[36px]" />
                          )}
                          <Image
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/iphone-1.png"
                            alt="iPhone Xs front"
                            fill
                            sizes="210px"
                            className="object-contain"
                            onError={() => handleImageError('right-front')}
                            onLoad={() => handleImageLoad('right-front')}
                            priority
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-800 rounded-[36px] flex items-center justify-center">
                          <p className="text-white/60 text-xs">Image unavailable</p>
                        </div>
                      )}
                    </motion.div>

                    {/* Back Phone */}
                    <motion.div
                      className="absolute top-0 left-0 z-10"
                      style={{
                        x: behindPhoneX2,
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      {!imageLoadErrors['right-back'] ? (
                        <div className="relative w-full h-full">
                          {!imagesLoaded['right-back'] && (
                            <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-[36px]" />
                          )}
                          <Image
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/iphone-right.png"
                            alt="iPhone Xs back"
                            fill
                            sizes="210px"
                            className="object-contain"
                            onError={() => handleImageError('right-back')}
                            onLoad={() => handleImageLoad('right-back')}
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-700 rounded-[36px] flex items-center justify-center">
                          <p className="text-white/60 text-xs">Image unavailable</p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Right text label */}
              <motion.div
                className="absolute right-4 md:right-20 lg:right-32 text-right z-20"
                style={{
                  x: rightTextX,
                  opacity: textOpacity
                }}
              >
                <p className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-1 whitespace-nowrap">
                  iPhone Xs
                </p>
                <p className="text-white/80 font-normal text-base md:text-lg lg:text-xl whitespace-nowrap">
                  5.8" display
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Scroll back message */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#ffe5db] text-center leading-relaxed"
            style={{ fontFamily: 'Neuzeit, sans-serif' }}
          >
            Scroll back up to reverse the effect
          </h2>
        </div>
      </section>
    </>
  );
};

export default IPhoneDisplay;
