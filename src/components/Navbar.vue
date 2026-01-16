<script setup>
import { ShoppingCart, Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <nav class="fixed w-full z-50 bg-racing-black/90 backdrop-blur-md border-b border-racing-red/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0, 0)">
          <div class="w-15 h-8 bg-racing-red skew-x-[-12deg] flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.5)]">
            <span class="text-white font-racing font-bold text-lg skew-x-[12deg]">TDP</span>
          </div>
          <span class="text-white font-racing text-xl font-bold tracking-wider">TEAM <span class="text-racing-red">DRAG PELAN</span></span>
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
