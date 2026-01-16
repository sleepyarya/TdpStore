<template>
  <div id="home" class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-racing-black">
    <!-- Animated Racing Background -->
    <div class="absolute inset-0 preserve-3d">
      <div class="grid-floor absolute inset-0 opacity-30"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-racing-black via-transparent to-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
      <div class="inline-block px-4 py-1 mb-6 border border-racing-red/50 rounded-full bg-black/50 backdrop-blur text-racing-red text-sm font-bold tracking-widest uppercase animate-fade-in-up">
        Solidaritas Tanpa Batas
      </div>
      
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-racing font-black text-white mb-6 uppercase italic leading-relaxed animate-fade-in-up delay-100 flex flex-col items-center">
        <span class="text-3xl sm:text-4xl md:text-5xl mb-2">Tampil Beda Di</span>
        <div class="relative transform -skew-x-12 hover:scale-105 transition-transform duration-300">
          <a href="https://www.roblox.com/id/games/131378148336503/Drag-Drive-Simulator" target="_blank" class="block hover:opacity-90 transition-opacity">
             <span class="block text-4xl sm:text-7xl md:text-8xl font-logo font-black text-white leading-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] paint-order-stroke" style="-webkit-text-stroke: 8px black; paint-order: stroke fill;">DRAG DRIVE</span>
             <span class="block text-3xl sm:text-6xl md:text-7xl font-logo font-black text-[#FFB800] leading-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] -mt-2 sm:-mt-4 paint-order-stroke" style="-webkit-text-stroke: 6px black; paint-order: stroke fill;">SIMULATOR</span>
          </a>
        </div>
      </h1>
      
      <p class="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
        Bukan cuma soal kecepatan, tapi soal kebanggaan. Pakai atribut resmi Team Drag Pelan,
        tunjukkan skillmu, dan jadilah pusat perhatian di setiap meet-up!
      </p>
      
      <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
        <a href="#shop" class="group relative px-8 py-4 bg-racing-red text-white font-bold rounded skew-x-[-12deg] overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
          <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
          <span class="block skew-x-[12deg] text-lg tracking-wider">Checkout Now</span>
        </a>
        <a href="#about" class="px-8 py-4 bg-transparent border-2 border-zinc-700 hover:border-white text-white font-bold rounded skew-x-[-12deg] transition-all hover:bg-white/5">
           <span class="block skew-x-[12deg] text-lg tracking-wider">JOIN TEAM</span>
        </a>
      </div>
    </div>
    
    <!-- Decor Elements -->
    <div class="absolute bottom-0 w-full h-32 bg-gradient-to-t from-racing-black to-transparent z-10"></div>
  </div>
</template>

<style scoped>
.preserve-3d {
  perspective: 1000px;
  overflow: hidden;
}

.grid-floor {
  position: absolute;
  width: 200%;
  height: 200%;
  left: -50%;
  top: -50%;
  background-image: 
    linear-gradient(to right, rgba(255, 0, 0, 0.2) 2px, transparent 2px),
    linear-gradient(to bottom, rgba(255, 0, 0, 0.2) 2px, transparent 2px);
  background-size: 100px 100px;
  transform: rotateX(75deg);
  animation: plane-move 2s linear infinite;
  box-shadow: 0 0 100px rgba(255,0,0,0.1);
}

@keyframes plane-move {
  0% {
    transform: rotateX(75deg) translateY(0);
  }
  100% {
    transform: rotateX(75deg) translateY(100px);
  }
}

@keyframes shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shine {
  animation: shine 0.5s linear;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
