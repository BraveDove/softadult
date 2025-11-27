import React from 'react';
import { HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] mt-14 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover z-0"
        style={{ 
          backgroundImage: `url('${HERO_IMAGE_URL}')`,
          // НАСТРОЙКИ ПОЗИЦИИ ЗДЕСЬ:
          // 50% - центр по горизонтали
          // 20% - отступ сверху (0% = самый верх, 100% = самый низ, 50% = центр)
          // Поиграйте со вторым числом (20%), чтобы подвинуть картинку вверх/вниз
          backgroundPosition: '50% 20%' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-lg mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">
          ТЕКСТ В РАЗРАБОТКЕ
        </h1>
        <p className="text-gray-200 text-sm md:text-base mb-6 drop-shadow-md">
          МИКРО ТЕКСТ ТОЖЕ В РАЗРАБОТКЕ
        </p>
      </div>
    </section>
  );
};

export default Hero;