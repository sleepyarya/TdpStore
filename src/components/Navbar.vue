<script setup>
import { ShoppingCart, Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';
import logoImg from '../assets/logo_tdp_new.png';

const isOpen = ref(false);
</script>

<template>
  <nav class="fixed w-full z-50 bg-racing-black/90 backdrop-blur-md border-b border-racing-red/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-1 cursor-pointer group" onclick="window.scrollTo(0, 0)">
           <!-- TDS Graphic from Image -->
           <div class="relative h-16 w-auto overflow-hidden flex items-center">
             <!-- Use object-left to crop/focus on the TDP part if image is wide, or just show it all. 
                  Since the image provided has text below, we might need to mask it or just accept it if the user wants strictly the top part.
                  However, using blend mode on the whole image is easiest. 
                  The user wants #TEAMDRAGPELAN beside it. The image has it below. 
                  If I use the whole image as is, the text will be below.
                  I will try to scale/crop via CSS if needed, but for now let's just use the image mixed.
                  Actually, if the image contains the text, I should hiding the text part of the image if I want to render text beside it.
                  Let's assume the user just wants the TDP symbol from the image. 
                  The TDP symbol is the top part. I'll wrap it in a div with restricted height or use object-position.
             -->
             <img :src="logoImg" alt="TDP Logo" class="h-[180%] w-auto max-w-none object-cover object-top -mt-2 mix-blend-screen" />
           </div>
           
           <!-- Text Side by Side -->
           <span class="hidden sm:block text-xl font-bold tracking-widest text-white font-logo mt-1 group-hover:text-racing-red transition-colors">#TEAMDRAGPELAN</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#home" class="text-gray-300 hover:text-racing-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-racing tracking-wide">HOME</a>
            <a href="#shop" class="text-gray-300 hover:text-racing-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-racing tracking-wide">SHOP</a>
            <a href="#team" class="text-gray-300 hover:text-racing-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-racing tracking-wide">TEAM</a>
            <a href="#about" class="text-gray-300 hover:text-racing-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-racing tracking-wide">ABOUT</a>
          </div>
        </div>

        <!-- Right Icons -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Shopping cart removed -->
        </div>
        
        <!-- Mobile menu button -->
        <div class="-mr-2 flex md:hidden">
          <button @click="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none">
            <Menu v-if="!isOpen" class="block h-6 w-6" />
            <X v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden bg-zinc-900 border-b border-racing-red/20">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#home" class="text-gray-300 hover:text-racing-red block px-3 py-2 rounded-md text-base font-medium font-racing">HOME</a>
        <a href="#shop" class="text-gray-300 hover:text-racing-red block px-3 py-2 rounded-md text-base font-medium font-racing">SHOP</a>
        <a href="#team" class="text-gray-300 hover:text-racing-red block px-3 py-2 rounded-md text-base font-medium font-racing">TEAM</a>
        <a href="#about" class="text-gray-300 hover:text-racing-red block px-3 py-2 rounded-md text-base font-medium font-racing">ABOUT</a>
      </div>
    </div>
  </nav>
</template>
