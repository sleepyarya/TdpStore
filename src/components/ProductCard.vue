<script setup>
defineProps({
  title: String,
  price: Number,
  image: String,
  type: String
});
</script>

<template>
  <div class="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-racing-red/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] hover:-translate-y-1">
    <!-- Image Container with Racing Diagonal -->
    <div class="aspect-square bg-zinc-800/50 relative overflow-hidden group">
      <!-- Background Graphic -->
      <div class="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
      <div class="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_45%,rgba(255,0,0,0.1)_50%,transparent_55%)] bg-[length:200%_200%] group-hover:bg-[position:100%_100%] transition-all duration-500"></div>
      
      <img :src="image" :alt="title" class="relative z-10 w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl" />
      
      <!-- Type Badge -->
      <div class="absolute top-3 left-3 z-20">
        <span class="px-2 py-1 bg-black/60 backdrop-blur border border-white/10 rounded text-[10px] font-bold uppercase tracking-wider text-white">
          {{ type }}
        </span>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-5">
      <h3 class="text-white font-bold text-lg mb-2 truncate font-racing tracking-wide">{{ title }}</h3>
      
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <span class="text-xs text-gray-500 uppercase font-bold">Price</span>
          <span class="text-racing-red font-racing text-xl flex items-center gap-1">
             {{ price }} <span class="text-sm">R$</span>
          </span>
        </div>
        
        <button class="bg-white text-black hover:bg-racing-red hover:text-white px-5 py-2 rounded font-bold text-sm uppercase tracking-wide transition-colors transform active:scale-95 skew-x-[-10deg]">
          <span class="block skew-x-[10deg]">SIKAT</span>
        </button>
      </div>
    </div>
  </div>
</template>
