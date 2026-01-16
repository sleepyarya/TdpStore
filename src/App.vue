<script setup>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ProductCard from './components/ProductCard.vue';
import OpeningAnimation from './components/OpeningAnimation.vue';
import CustomCursor from './components/CustomCursor.vue';
import { ref, computed, onMounted } from 'vue';

const showSplash = ref(true);

// Import images
import teamDragPelanOfficialShirt from './assets/team_drag_pelan_official_shirt.png';
import tdpSweater from './assets/tdp_sweater.png';
import tdpSportPants from './assets/tdp_sport_pants.png';
import tdpOnFireShirt from './assets/tdp_on_fire_shirt.png';
import tdpV4PinkyBoy from './assets/tdp_v4_pinky_boy.png';
import tdpV4PinkyPants from './assets/tdp_pinky_pants.png';
import tdpMechanicV1 from './assets/tdp_mechanic_v1.png';
import tdpMechanicPants from './assets/tdp_mechanic_pants.png';
import jaketTdp from './assets/jaket_tdp.png';
import celanaJumperTdpGrey from './assets/celana_jumper_tdp_grey.png';

import ownerImg from './assets/owner.png';
import admin1Img from './assets/admin1.png';
import admin2Img from './assets/admin2.png';
import admin3Img from './assets/admin3.png';
import admin4Img from './assets/admin4.png';

// Team Data
const team = ref({
  owner: { id: 152552737, name: 'Loading...', displayName: 'Loading...', role: 'OWNER' },
  admin1: { id: 1109681521, name: 'Loading...', displayName: 'Loading...', role: 'ADMIN' },
  admin2: { id: 8905246034, name: 'Loading...', displayName: 'Loading...', role: 'ADMIN' },
  admin3: { id: 10188168383, name: 'Loading...', displayName: 'Loading...', role: 'ADMIN' },
  admin4: { id: 5350394157, name: 'Loading...', displayName: 'Loading...', role: 'ADMIN' },
});

const fetchRobloxUser = async (key, userId) => {
  try {
    // Check if we are in dev mode to use proxy, otherwise try direct (which might fail due to CORS in prod without proxy)
    // For this environment, we use the proxy defined in vite.config.js
    const response = await fetch(`/roblox-api/v1/users/${userId}`);
    const data = await response.json();
    if (data && data.name) {
      team.value[key].name = data.name;
      team.value[key].displayName = data.displayName;
    }
  } catch (error) {
    console.error(`Failed to fetch user ${userId}`, error);
    team.value[key].name = 'Unknown';
    team.value[key].displayName = 'Error';
  }
};

onMounted(() => {
  fetchRobloxUser('owner', team.value.owner.id);
  fetchRobloxUser('admin1', team.value.admin1.id);
  fetchRobloxUser('admin2', team.value.admin2.id);
  fetchRobloxUser('admin3', team.value.admin3.id);
  fetchRobloxUser('admin4', team.value.admin4.id);
});

const products = [
  { id: 10, title: 'Celana Jumper TDP Grey', price: 5, image: celanaJumperTdpGrey, type: 'Pants', link: 'https://www.roblox.com/catalog/117737994942390/TDP-Grey-Pants', isNew: true },
  { id: 9, title: 'Jaket TDP', price: 5, image: jaketTdp, type: 'Shirt', link: 'https://www.roblox.com/catalog/71703674823383/TDP-Jacket', isNew: true },
  { id: 8, title: 'TDP MECHANIC PANTS', price: 5, image: tdpMechanicPants, type: 'Pants', link: 'https://www.roblox.com/catalog/128195002810300/TDP-MECHANIC-PANTS' },
  { id: 7, title: 'TDP MECHANIC V1', price: 5, image: tdpMechanicV1, type: 'Shirt', link: 'https://www.roblox.com/catalog/84250597815895/TDP-MECHANIC-V1' },
  { id: 6, title: 'TDP V4 Pinky Pants', price: 5, image: tdpV4PinkyPants, type: 'Pants', link: 'https://www.roblox.com/catalog/124618391968431/TDP-Pinky-Pants' },
  { id: 5, title: 'TDP V4 Pinky Boy', price: 5, image: tdpV4PinkyBoy, type: 'Shirt', link: 'https://www.roblox.com/catalog/81499276980301/TDP-Pinky-boy' },
  { id: 4, title: 'TDP On Fire Shirt', price: 5, image: tdpOnFireShirt, type: 'Shirt', link: 'https://www.roblox.com/catalog/133884655223379/TDP-On-Fire-Shirt' },
  { id: 3, title: 'TDP Sport Pants', price: 5, image: tdpSportPants, type: 'Pants', link: 'https://www.roblox.com/catalog/76938877127778/Jumper-TDP-Distro' },
  { id: 2, title: 'TDP Sweater', price: 5, image: tdpSweater, type: 'Shirt', link: 'https://www.roblox.com/catalog/83496818350776/Team-Drag-Pelan-Distro' },
  { id: 1, title: 'Team Drag Pelan Official Shirt', price: 5, image: teamDragPelanOfficialShirt, type: 'Shirt', link: 'https://www.roblox.com/catalog/131981903348061/Team-Drag-Pelan-Official-Shirt' },
];

const selectedFilter = ref('All');
const searchQuery = ref('');

const filteredProducts = computed(() => {
  let result = products;
  
  // Create regex for search query - treat spaces as wildcards for flexibility
  // e.g. "tdp shirt" matches "Team Drag Pelan Official Shirt"
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(p => p.title.toLowerCase().includes(query));
  }

  if (selectedFilter.value !== 'All') {
    result = result.filter(p => p.type === selectedFilter.value);
  }
  
  return result;
});

const filterOptions = ['All', 'Shirt', 'Pants'];
</script>

<template>
  <div class="bg-racing-black min-h-screen text-white selection:bg-racing-red selection:text-white cursor-none">
    <CustomCursor />
    <OpeningAnimation v-if="showSplash" @finished="showSplash = false" />
    <Navbar />
    <HeroSection />
    
    <main id="shop" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <!-- Section Header -->
      <div class="text-center mb-12 relative z-10">
        <h2 class="text-4xl md:text-5xl font-racing font-bold mb-4 text-white uppercase italic tracking-tighter">
          Team <span class="text-racing-red">Drag Pelan</span>
        </h2>
        <div class="w-32 h-1.5 bg-racing-red mx-auto skew-x-[-12deg] mb-8"></div>
        <p class="mt-4 text-gray-400 font-medium tracking-wide">SATU SERAGAM, SATU TUJUAN. TAMPIL SOLID DI JALANAN.</p>
        
        <!-- Search & Filter -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
          <!-- Filter Buttons -->
          <div class="flex justify-center gap-4 flex-wrap">
            <button 
              v-for="option in filterOptions" 
              :key="option"
              @click="selectedFilter = option"
              class="px-6 py-2 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 skew-x-[-12deg]"
              :class="selectedFilter === option ? 'bg-racing-red text-white shadow-[0_0_15px_rgba(255,0,0,0.4)] scale-110' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'"
            >
              <span class="block skew-x-[12deg]">{{ option }}</span>
            </button>
          </div>

          <!-- Search Input -->
          <div class="relative w-full max-w-xs md:w-64">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Cari Baju / Celana..." 
              class="w-full bg-zinc-800 border-2 border-zinc-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-racing-red focus:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all font-racing text-sm"
            >
            <div class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Grid -->
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :image="product.image"
          :type="product.type"
          :link="product.link"
          :isNew="product.isNew"
        />
      </div>
      <div v-else class="text-center py-12 text-gray-500 font-racing text-xl">
        Barang tidak ditemukan, bosku.
      </div>
      
      <!-- Background Abstract Elements -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-racing-red/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
    </main>

    <!-- Team Section -->
    <section id="team" class="py-20 bg-zinc-900/50 border-t border-zinc-800 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 relative z-10">
          <h2 class="text-4xl md:text-5xl font-racing font-bold mb-4 text-white uppercase italic tracking-tighter">
            Meet The <span class="text-racing-red">Team</span>
          </h2>
          <div class="w-32 h-1.5 bg-racing-red mx-auto skew-x-[-12deg]"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <!-- Owner Card -->
          <a href="https://www.roblox.com/id/users/152552737/profile" target="_blank" class="group relative w-full max-w-sm lg:col-span-3 lg:w-1/2 lg:mx-auto">
             <div class="absolute inset-0 bg-racing-red blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
             <div class="relative bg-black border border-zinc-800 p-6 rounded-xl hover:border-racing-red transition-all duration-300 transform group-hover:-translate-y-2">
                <div class="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-racing-red shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                  <img :src="ownerImg" alt="Owner" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 class="text-2xl font-racing font-bold text-center text-white mb-2">OWNER</h3>
                <p class="text-center text-gray-400 font-medium tracking-wider text-xl">{{ team.owner.name }}</p>
                <div class="mt-6 flex justify-center">
                  <span class="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded text-sm text-racing-red font-bold hover:bg-racing-red hover:text-white transition-colors">
                    View Roblox Profile
                  </span>
                </div>
             </div>
          </a>

          <!-- Admin 1 -->
          <a href="https://www.roblox.com/id/users/1109681521/profile" target="_blank" class="group relative w-full max-w-sm">
             <div class="absolute inset-0 bg-neon-blue blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
             <div class="relative bg-black border border-zinc-800 p-6 rounded-xl hover:border-neon-blue transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col justify-between">
                <div>
                  <div class="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                    <img :src="admin1Img" alt="Admin 1" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 class="text-xl font-racing font-bold text-center text-white mb-2">ADMIN</h3>
                  <p class="text-center text-gray-400 font-medium tracking-wider text-xl">{{ team.admin1.name }}</p>
                </div>
                <div class="mt-6 flex justify-center">
                  <span class="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded text-sm text-neon-blue font-bold hover:bg-neon-blue hover:text-black transition-colors">
                    View Profile
                  </span>
                </div>
             </div>
          </a>

          <!-- Admin 2 -->
          <a href="https://www.roblox.com/id/users/8905246034/profile" target="_blank" class="group relative w-full max-w-sm">
             <div class="absolute inset-0 bg-neon-blue blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
             <div class="relative bg-black border border-zinc-800 p-6 rounded-xl hover:border-neon-blue transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col justify-between">
                <div>
                  <div class="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                    <img :src="admin2Img" alt="Admin 2" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 class="text-xl font-racing font-bold text-center text-white mb-2">ADMIN</h3>
                  <p class="text-center text-gray-400 font-medium tracking-wider text-xl">{{ team.admin2.name }}</p>
                </div>
                <div class="mt-6 flex justify-center">
                  <span class="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded text-sm text-neon-blue font-bold hover:bg-neon-blue hover:text-black transition-colors">
                     View Profile
                  </span>
                </div>
             </div>
          </a>

          <!-- Admin 3 -->
          <a href="https://www.roblox.com/id/users/10188168383/profile" target="_blank" class="group relative w-full max-w-sm">
             <div class="absolute inset-0 bg-neon-blue blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
             <div class="relative bg-black border border-zinc-800 p-6 rounded-xl hover:border-neon-blue transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col justify-between">
                <div>
                   <div class="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                     <img :src="admin3Img" alt="Admin 3" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <h3 class="text-xl font-racing font-bold text-center text-white">ADMIN</h3>
                   <p class="text-sm font-racing font-bold text-center text-racing-red mb-3 mt-1 tracking-widest uppercase">WEB DEVELOPER</p>
                   <p class="text-center text-gray-400 font-medium tracking-wider text-xl">{{ team.admin3.name }}</p>
                </div>
                <div class="mt-6 flex justify-center">
                  <span class="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded text-sm text-neon-blue font-bold hover:bg-neon-blue hover:text-black transition-colors">
                     View Profile
                  </span>
                </div>
             </div>
          </a>
          
          <!-- Admin 4 -->
          <a href="https://www.roblox.com/id/users/5350394157/profile" target="_blank" class="group relative w-full max-w-sm lg:col-start-2">
             <div class="absolute inset-0 bg-neon-blue blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
             <div class="relative bg-black border border-zinc-800 p-6 rounded-xl hover:border-neon-blue transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col justify-between">
                <div class="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                  <img :src="admin4Img" alt="Admin 4" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 class="text-xl font-racing font-bold text-center text-white mb-2">ADMIN</h3>
                <p class="text-center text-gray-400 font-medium tracking-wider text-xl">{{ team.admin4.name }}</p>
                <div class="mt-6 flex justify-center">
                  <span class="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded text-sm text-neon-blue font-bold hover:bg-neon-blue hover:text-black transition-colors">
                     View Profile
                  </span>
                </div>
             </div>
          </a>
        </div>
      </div>
    </section>
    
    <footer id="about" class="bg-black py-16 border-t border-zinc-800 relative overflow-hidden">
      <!-- Footer Grid -->
      <div class="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h3 class="text-3xl font-racing font-bold text-white mb-6 tracking-widest">TEAM<span class="text-racing-red">DRAGPELAN</span></h3>
        <p class="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          Tempatnya para sultan dan pembalap santuy berkumpul. <br/>Gak perlu kencang, yang penting gaya dan solidaritas!
        </p>
        <div class="flex justify-center gap-8 mb-12 flex-wrap">
          <a href="https://www.tiktok.com/@team.drag.pelan" target="_blank" class="text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider hover:text-racing-red flex items-center gap-2">
            <!-- Simple TikTok Icon/Text -->
            <span>TikTok: @team.drag.pelan</span>
          </a>
          <div class="flex flex-col items-center gap-1">
            <a href="https://discord.gg/vJ4RtDJeK9" target="_blank" class="text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-wider hover:text-neon-blue flex items-center gap-2">
              <!-- Simple Discord Icon/Text -->
               <span>Discord Community</span>
            </a>
            <span class="text-[10px] text-white font-bold font-racing tracking-wide text-center max-w-[200px]">*Wajib punya atribut TDP sebelum join!</span>
          </div>
        </div>
        <div class="pt-8 border-t border-zinc-900 text-sm text-gray-600">
          &copy; {{ new Date().getFullYear() }} Team Drag Pelan Store. <br class="sm:hidden" />Not affiliated with Roblox Corporation.
        </div>
      </div>
    </footer>
  </div>
</template>
