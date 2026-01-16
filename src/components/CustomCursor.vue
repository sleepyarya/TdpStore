<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);
const isHovering = ref(false);
const isClicking = ref(false);

const updateCursor = (e) => {
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
};

const handleMouseDown = () => {
  isClicking.value = true;
};

const handleMouseUp = () => {
  isClicking.value = false;
};

const handleMouseEnter = (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
    isHovering.value = true;
  }
};

const handleMouseLeave = () => {
  isHovering.value = false;
};

onMounted(() => {
  window.addEventListener('mousemove', updateCursor);
  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mouseup', handleMouseUp);
  
  // Add hover listeners to all interactive elements
  document.body.addEventListener('mouseover', handleMouseEnter);
  document.body.addEventListener('mouseout', handleMouseLeave);
  
  // Hide default cursor
  document.body.style.cursor = 'none';
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor);
  window.removeEventListener('mousedown', handleMouseDown);
  window.removeEventListener('mouseup', handleMouseUp);
  document.body.removeEventListener('mouseover', handleMouseEnter);
  document.body.removeEventListener('mouseout', handleMouseLeave);
  document.body.style.cursor = 'auto';
});
</script>

<template>
  <div 
    class="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
    :style="{ transform: `translate(${cursorX}px, ${cursorY}px)` }"
  >
    <!-- Flag Container -->
    <div 
      class="relative -mt-8 -ml-2 transition-transform duration-100 ease-out"
      :class="{ 'scale-125': isHovering, 'scale-90 rotate-12': isClicking }"
    >
        <!-- Animated Flag SVG -->
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
          <!-- Pole -->
          <rect x="2" y="5" width="4" height="40" fill="#888" class="pole" />
          
          <!-- Flag Content (Checkered) -->
          <g class="flag-wave origin-left">
            <!-- Row 1 -->
            <rect x="6" y="5" width="10" height="10" fill="white" />
            <rect x="16" y="5" width="10" height="10" fill="black" />
            <rect x="26" y="5" width="10" height="10" fill="white" />
            
            <!-- Row 2 -->
            <rect x="6" y="15" width="10" height="10" fill="black" />
            <rect x="16" y="15" width="10" height="10" fill="white" />
            <rect x="26" y="15" width="10" height="10" fill="black" />
            
            <!-- Row 3 -->
            <rect x="6" y="25" width="10" height="10" fill="white" />
            <rect x="16" y="25" width="10" height="10" fill="black" />
            <rect x="26" y="25" width="10" height="10" fill="white" />
          </g>
        </svg>
    </div>
  </div>
</template>

<style scoped>
.flag-wave {
  animation: wave 0.6s ease-in-out infinite alternate;
}

@keyframes wave {
  0% {
    transform: skewY(0deg) scaleX(1);
  }
  100% {
    transform: skewY(-5deg) scaleX(0.95);
  }
}
</style>
