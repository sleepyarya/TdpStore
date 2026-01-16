<script setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits(['finished']);
const isVisible = ref(true);
const isFading = ref(false);

onMounted(() => {
  // Start fade out sequence after 3.5 seconds
  setTimeout(() => {
    isFading.value = true;
    
    // Complete removal after transition
    setTimeout(() => {
      isVisible.value = false;
      emit('finished');
    }, 1000); // 1s fade out duration
  }, 3500);
});
</script>

<template>
  <div 
    v-if="isVisible" 
    class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-1000"
    :class="{ 'opacity-0 pointer-events-none': isFading, 'opacity-100': !isFading }"
  >
    <!-- Wheel Container -->
    <div class="relative w-32 h-32 md:w-48 md:h-48 mb-8">
      <!-- Spinning Wheel -->
      <div class="wheel w-full h-full rounded-full border-4 border-zinc-800 relative animate-spin-fast shadow-[0_0_50px_rgba(255,0,0,0.2)]">
        <!-- Tire Tread (Outer) -->
        <div class="absolute inset-0 rounded-full border-[12px] border-zinc-900 shadow-inner"></div>
        
        <!-- Rim (Inner) -->
        <div class="absolute inset-[12px] rounded-full border-[2px] border-racing-red bg-zinc-900 flex items-center justify-center overflow-hidden">
             <!-- Spokes -->
             <div class="absolute w-full h-2 bg-zinc-700 rotate-0"></div>
             <div class="absolute w-full h-2 bg-zinc-700 rotate-45"></div>
             <div class="absolute w-full h-2 bg-zinc-700 rotate-90"></div>
             <div class="absolute w-full h-2 bg-zinc-700 rotate-135"></div>
             
             <!-- Center Hub -->
             <div class="absolute w-8 h-8 rounded-full bg-racing-red z-10 shadow-[0_0_10px_rgba(255,0,0,0.5)] flex items-center justify-center">
                 <div class="w-2 h-2 rounded-full bg-white/50"></div>
             </div>
        </div>
        
        <!-- Motion Blur Effect (Pseudo trails) -->
        <div class="absolute inset-0 rounded-full border-t-2 border-racing-red/50 blur-sm animate-pulse"></div>
      </div>
      
      <!-- Smoke/Burnout Effect -->
      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-10 bg-gray-500/20 rounded-full blur-xl animate-pulse"></div>
    </div>

    <!-- Text Animation -->
    <div class="text-center overflow-hidden">
      <h1 class="text-4xl md:text-6xl font-racing font-bold text-white italic tracking-tighter animate-slide-up">
        TEAM <span class="text-racing-red inline-block animate-pulse-fast">DRAG PELAN</span>
      </h1>
      <div class="w-full h-1 bg-gradient-to-r from-transparent via-racing-red to-transparent mt-2 animate-scale-x"></div>
    </div>
  </div>
</template>

<style scoped>
.animate-spin-fast {
  animation: spin 0.8s linear infinite;
}

.animate-pulse-fast {
  animation: pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
}

.animate-scale-x {
  animation: scaleX 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform: scaleX(0);
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleX {
  to {
    transform: scaleX(1);
  }
}
</style>
