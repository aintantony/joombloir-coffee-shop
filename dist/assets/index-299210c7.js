(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();class h{constructor(){this.routes=new Map,this.currentPage=null}addRoute(e,t){this.routes.set(e,t)}init(){window.addEventListener("popstate",()=>this.handleRoute()),this.handleRoute()}navigate(e){history.pushState(null,"",e),this.handleRoute()}handleRoute(){const e=window.location.pathname,t=document.getElementById("app");if(!t)return;this.currentPage&&this.currentPage.destroy&&this.currentPage.destroy();let s=this.routes.get(e),r={};if(!s)for(const[o,a]of this.routes){const d=this.matchRoute(o,e);if(d){s=a,r=d.params;break}}s?(this.currentPage=s(r),t.innerHTML=this.currentPage.render(),this.currentPage.mount&&this.currentPage.mount()):t.innerHTML='<div class="flex items-center justify-center min-h-screen"><h1 class="text-2xl">404 - Page Not Found</h1></div>'}matchRoute(e,t){const s=e.split("/"),r=t.split("/");if(s.length!==r.length)return null;const o={};for(let a=0;a<s.length;a++)if(s[a].startsWith(":"))o[s[a].slice(1)]=r[a];else if(s[a]!==r[a])return null;return{params:o}}}class c{constructor(){this.isDark=!1}init(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;this.isDark=e==="dark"||!e&&t,this.applyTheme()}toggle(){this.isDark=!this.isDark,this.applyTheme(),localStorage.setItem("theme",this.isDark?"dark":"light")}applyTheme(){this.isDark?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}get currentTheme(){return this.isDark?"dark":"light"}}const g=new c;class n{render(){return`
            <nav class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex items-center">
                            <a href="/" class="flex items-center space-x-2 text-coffee-800 dark:text-coffee-200">
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2,21V19H20V21H2M20,8V5L18,5V8C18,10.28 16.19,12 14,12C11.81,12 10,10.28 10,8V5H8V8C8,11.37 10.69,14.1 14,14.1C17.31,14.1 20,11.37 20,8M3,3V5H21V3H3Z"/>
                                </svg>
                                <span class="font-serif text-xl font-semibold">Joombloir</span>
                            </a>
                        </div>
                        
                        <div class="hidden md:block">
                            <div class="ml-10 flex justify-between gap-20 items-baseline space-x-4">
                                <a href="/" class="nav-link">Home</a>
                                <a href="/coffees" class="nav-link">Our Coffees</a>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <button id="theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <svg class="w-5 h-5 dark:hidden" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,18C11.11,18 10.26,17.8 9.5,17.46C11.56,16.06 13,13.72 13,11A6,6 0 0,0 7,5C7,3.89 7.89,3 9,3C13.97,3 18,7.03 18,12C18,15.31 15.31,18 12,18Z"/>
                                </svg>
                                <svg class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"/>
                                </svg>
                            </button>
                            
                            <button class="md:hidden p-2" id="mobile-menu-button">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="md:hidden hidden" id="mobile-menu">
                        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
                            <a href="/" class="block nav-link">Home</a>
                            <a href="/coffees" class="block nav-link">Our Coffees</a>
                        </div>
                    </div>
                </div>
            </nav>
            
            <style>
                .nav-link {
                    @apply text-gray-700 dark:text-gray-300 hover:text-coffee-600 dark:hover:text-coffee-400 px-3 py-2 rounded-md text-sm font-medium transition-colors;
                }
            </style>
        `}mount(){const e=document.getElementById("theme-toggle"),t=document.getElementById("mobile-menu-button"),s=document.getElementById("mobile-menu");e?.addEventListener("click",()=>{g.toggle()}),t?.addEventListener("click",()=>{s?.classList.toggle("hidden")})}}class l{render(){return`
            <footer class="bg-coffee-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div class="col-span-1 md:col-span-2">
                            <div class="flex items-center space-x-2 mb-4">
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2,21V19H20V21H2M20,8V5L18,5V8C18,10.28 16.19,12 14,12C11.81,12 10,10.28 10,8V5H8V8C8,11.37 10.69,14.1 14,14.1C17.31,14.1 20,11.37 20,8M3,3V5H21V3H3Z"/>
                                </svg>
                                <span class="font-serif text-2xl font-semibold">Joombloir</span>
                            </div>
                            <p class="text-coffee-200 mb-4 max-w-md">
                                Discover the art of French coffee with our artisanal selection of premium coffees, 
                                roasted with passion in our Parisian workshop.
                            </p>
                            <div class="flex space-x-4">
                              <!-- Twitter -->
                              <a href="https://x.com/aintantony" target="_blank" rel="noopener noreferrer" class="text-coffee-300 hover:text-white transition-colors" aria-label="Twitter">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                              </a>

                              <!-- Facebook -->
                              <a href="https://web.facebook.com/mony.tmey" target="_blank" rel="noopener noreferrer" class="text-coffee-300 hover:text-white transition-colors" aria-label="Facebook">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/>
                                </svg>
                              </a>

                              <!-- GitHub -->
                              <a href="https://github.com/aintantony" target="_blank" rel="noopener noreferrer" class="text-coffee-300 hover:text-white transition-colors" aria-label="GitHub">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.932 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.004 2.045.138 3.003.403 2.292-1.552 3.298-1.23 3.298-1.23.653 1.65.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.217.694.824.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                              </a>
                            </div>
                            
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Navigation</h3>
                            <ul class="space-y-2">
                                <li><a href="/" class="text-coffee-300 hover:text-white transition-colors">Home</a></li>
                                <li><a href="/coffees" class="text-coffee-300 hover:text-white transition-colors">Our Coffees</a></li>
                                <li><a href="#" class="text-coffee-300 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" class="text-coffee-300 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        
                            <div>
                                <h3 class="text-lg font-semibold mb-4">Contact</h3>
                                <address class="not-italic space-y-2 text-white">
                                  <p>No. 24, Street 562,</p>
                                  <p>Sangkat Boeung Kak I,</p>
                                  <p>Khan Toul Kork,</p>
                                  <p>Phnom Penh, Cambodia</p>
                                  <p>Phone: 
                                    <a href="tel:+85580808080" class="hover:underline text-white">(+855) 80808080</a>
                                  </p>
                                  <p>Email: 
                                    <a href="mailto:antony7cs@gmail.com" class="hover:underline text-white">antony7cs@gmail.com</a>
                                  </p>
                                </address>
                            </div>
                        </div>
                    
                    <div class="border-t border-coffee-800 mt-8 pt-8 text-center text-coffee-400">
                        <p>&copy; 2024 Joombloir. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `}}class u{constructor(){this.navbar=new n,this.footer=new l}render(){return`
            ${this.navbar.render()}
            
            <main>
                <!-- Hero Section -->
                <section class="hero-bg min-h-screen flex items-center justify-center text-white">
                    <div class="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                        <h1 class="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Welcome to
                            <span class="block text-coffee-200">Joombloir</span>
                        </h1>
                        <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            The art of French coffee in every cup. Discover our artisanal selection 
                            of premium coffees, roasted with passion.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/coffees" class="cta-button bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Discover Our Coffees
                            </a>
                            <button class="cta-button-outline border-2 border-white text-white hover:bg-white hover:text-coffee-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                                Our Story
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Features Section -->
                <section class="py-20 bg-gray-50 dark:bg-gray-800">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h2 class="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Why Choose Joombloir?
                            </h2>
                            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                An authentic coffee experience, from bean selection to your cup
                            </p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div class="text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                                <div class="w-16 h-16 bg-coffee-100 dark:bg-coffee-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg class="w-8 h-8 text-coffee-600 dark:text-coffee-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                                    </svg>
                                </div>
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Artisanal Roasting</h3>
                                <p class="text-gray-600 dark:text-gray-300">
                                    Each bean is carefully roasted in our Parisian workshop to reveal all its aromas.
                                </p>
                            </div>
                            
                            <div class="text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                                <div class="w-16 h-16 bg-coffee-100 dark:bg-coffee-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg class="w-8 h-8 text-coffee-600 dark:text-coffee-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12,2L13.09,8.26L22,9L17.22,13.78L18.18,22L12,18.27L5.82,22L6.78,13.78L2,9L10.91,8.26L12,2Z"/>
                                    </svg>
                                </div>
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Premium Quality</h3>
                                <p class="text-gray-600 dark:text-gray-300">
                                    Rigorous selection of the best beans from around the world for exceptional quality.
                                </p>
                            </div>
                            
                            <div class="text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                                <div class="w-16 h-16 bg-coffee-100 dark:bg-coffee-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg class="w-8 h-8 text-coffee-600 dark:text-coffee-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                                    </svg>
                                </div>
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">French Passion</h3>
                                <p class="text-gray-600 dark:text-gray-300">
                                    The French heritage and passion for coffee, passed down from generation to generation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            ${this.footer.render()}
        `}mount(){this.navbar.mount(),document.querySelectorAll(".cta-button, .cta-button-outline").forEach(t=>{t.addEventListener("click",s=>{t.getAttribute("href")==="/coffees"&&(s.preventDefault(),window.history.pushState(null,"","/coffees"),window.dispatchEvent(new PopStateEvent("popstate")))})})}}class x{constructor(e){this.coffee=e}render(){return`
            <div class="coffee-card bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1" data-id="${this.coffee.id}">
                <div class="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                    <img 
                        src="${this.coffee.image}" 
                        alt="${this.coffee.title}"
                        class="w-full h-48 object-cover"
                        loading="lazy"
                        onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'"
                    >
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-serif">${this.coffee.title}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">${this.coffee.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${this.coffee.ingredients.slice(0,3).map(e=>`<span class="px-2 py-1 bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-200 text-xs rounded-full">${e}</span>`).join("")}
                        ${this.coffee.ingredients.length>3?`<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">+${this.coffee.ingredients.length-3}</span>`:""}
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-coffee-600 dark:text-coffee-400 font-semibold">Discover</span>
                        <svg class="w-5 h-5 text-coffee-600 dark:text-coffee-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        `}}const p="https://api.sampleapis.com/coffee";class f{static async getCoffees(){try{const e=await fetch(`${p}/hot`);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return(await e.json()).slice(0,20)}catch(e){throw console.error("Error fetching coffees:",e),new Error("Failed to fetch coffee data")}}static async getCoffeeById(e){try{return(await this.getCoffees()).find(s=>s.id.toString()===e)||null}catch(t){throw console.error("Error fetching coffee by ID:",t),new Error("Failed to fetch coffee details")}}}class v{constructor(){this.navbar=new n,this.footer=new l,this.coffees=[],this.filteredCoffees=[],this.isLoading=!0,this.error=null}render(){return`
            ${this.navbar.render()}
            
            <main class="min-h-screen bg-gray-50 dark:bg-gray-900">
                <!-- Header -->
                <section class="bg-white dark:bg-gray-800 py-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 class="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Artisanal Coffees
                        </h1>
                        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Discover our collection of premium coffees, each with its own personality and unique aromas.
                        </p>
                    </div>
                </section>

                <!-- Search and Filter -->
                <section class="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div class="relative flex-1 max-w-md">
                                <input 
                                    type="text" 
                                    id="search-input"
                                    placeholder="Search for a coffee..." 
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                >
                                <svg class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <div class="flex items-center space-x-4">
                                <span class="text-gray-600 dark:text-gray-400" id="results-count">
                                    ${this.isLoading?"Loading...":`${this.filteredCoffees.length} coffee(s) found`}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Coffee Grid -->
                <section class="py-12">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div id="coffee-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            ${this.renderContent()}
                        </div>
                        
                        ${this.error?`
                            <div class="text-center py-12">
                                <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
                                    <svg class="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <h3 class="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Loading Error</h3>
                                    <p class="text-red-600 dark:text-red-300 mb-4">${this.error}</p>
                                    <button id="retry-button" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                                        Retry
                                    </button>
                                </div>
                            </div>
                        `:""}
                    </div>
                </section>
            </main>
            
            ${this.footer.render()}
        `}renderContent(){return this.isLoading?this.renderSkeletons():this.error?"":this.filteredCoffees.length===0?`
                <div class="col-span-full text-center py-12">
                    <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">No coffees found</h3>
                    <p class="text-gray-600 dark:text-gray-400">Try modifying your search.</p>
                </div>
            `:this.filteredCoffees.map(e=>new x(e).render()).join("")}renderSkeletons(){return Array(8).fill(0).map(()=>`
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-48"></div>
                <div class="p-6">
                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 mb-2 rounded"></div>
                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-4 mb-4 rounded"></div>
                    <div class="flex gap-2 mb-4">
                        <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 w-16 rounded-full"></div>
                        <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 w-20 rounded-full"></div>
                    </div>
                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-4 w-24 rounded"></div>
                </div>
            </div>
        `).join("")}async mount(){this.navbar.mount(),await this.loadCoffees(),this.setupEventListeners()}async loadCoffees(){try{this.isLoading=!0,this.error=null,this.updateGrid(),this.coffees=await f.getCoffees(),this.filteredCoffees=[...this.coffees],this.isLoading=!1,this.updateGrid()}catch(e){this.isLoading=!1,this.error=e instanceof Error?e.message:"Une erreur est survenue",this.updateGrid()}}updateGrid(){const e=document.getElementById("coffee-grid"),t=document.getElementById("results-count");e&&(e.innerHTML=this.renderContent(),this.setupCardClickListeners()),t&&(t.textContent=this.isLoading?"Loading...":`${this.filteredCoffees.length} coffee(s) found`)}setupEventListeners(){const e=document.getElementById("search-input"),t=document.getElementById("retry-button");e&&e.addEventListener("input",s=>{const r=s.target.value.toLowerCase();this.filteredCoffees=this.coffees.filter(o=>o.title.toLowerCase().includes(r)||o.description.toLowerCase().includes(r)||o.ingredients.some(a=>a.toLowerCase().includes(r))),this.updateGrid()}),t&&t.addEventListener("click",()=>{this.loadCoffees()})}setupCardClickListeners(){document.querySelectorAll(".coffee-card").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-id");s&&(window.history.pushState(null,"",`/coffee/${s}`),window.dispatchEvent(new PopStateEvent("popstate")))})})}}class m{constructor(e){this.coffeeId=e,this.navbar=new n,this.footer=new l,this.coffee=null,this.isLoading=!0,this.error=null}render(){return`
            ${this.navbar.render()}
            
            <main class="min-h-screen bg-gray-50 dark:bg-gray-900">
                ${this.renderContent()}
            </main>
            
            ${this.footer.render()}
        `}renderContent(){return this.isLoading?this.renderSkeleton():this.error||!this.coffee?`
                <div class="flex items-center justify-center min-h-screen">
                    <div class="text-center p-8">
                        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            ${this.error||"Coffee not found"}
                        </h2>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">
                            The coffee you're looking for doesn't exist or is no longer available.
                        </p>
                        <div class="space-x-4">
                            <a href="/coffees" class="bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-3 rounded-lg transition-colors">
                                View all coffees
                            </a>
                            <a href="/" class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors">
                                Back to home
                            </a>
                        </div>
                    </div>
                </div>
            `:`
            <!-- Breadcrumb -->
            <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center space-x-2 text-sm">
                        <a href="/" class="text-coffee-600 dark:text-coffee-400 hover:text-coffee-700 dark:hover:text-coffee-300">Home</a>
                        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <a href="/coffees" class="text-coffee-600 dark:text-coffee-400 hover:text-coffee-700 dark:hover:text-coffee-300">Our Coffees</a>
                        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-500 dark:text-gray-400">${this.coffee.title}</span>
                    </div>
                </div>
            </nav>

            <!-- Coffee Detail -->
            <section class="py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <!-- Image -->
                        <div class="space-y-4">
                            <div class="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
                                <img 
                                    src="${this.coffee.image}" 
                                    alt="${this.coffee.title}"
                                    class="w-full h-96 lg:h-full object-cover"
                                    onerror="this.src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'"
                                >
                            </div>
                        </div>

                        <!-- Details -->
                        <div class="space-y-8">
                            <div>
                                <h1 class="font-serif text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                    ${this.coffee.title}
                                </h1>
                                <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    ${this.coffee.description}
                                </p>
                            </div>

                            <!-- Ingredients -->
                            <div>
                                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ingredients</h3>
                                <div class="flex flex-wrap gap-3">
                                    ${this.coffee.ingredients.map(e=>`<span class="px-4 py-2 bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-200 rounded-full text-sm font-medium">${e}</span>`).join("")}
                                </div>
                            </div>

                            <!-- Actions -->
                            <div class="space-y-4">
                                <div class="flex flex-col sm:flex-row gap-4">
                                    <button class="flex-1 bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                                        </svg>
                                        <span>Order</span>
                                    </button>
                                    <button class="border-2 border-coffee-600 text-coffee-600 dark:text-coffee-400 dark:border-coffee-400 hover:bg-coffee-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                        <span>Favorites</span>
                                    </button>
                                </div>
                                
                                <button id="back-button" class="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg transition-colors">
                                    ← Back to list
                                </button>
                            </div>

                            <!-- Additional Info -->
                            <div class="bg-coffee-50 dark:bg-coffee-900/20 rounded-xl p-6">
                                <h4 class="text-lg font-semibold text-coffee-800 dark:text-coffee-200 mb-3">
                                    Preparation Tips
                                </h4>
                                <ul class="space-y-2 text-coffee-700 dark:text-coffee-300">
                                    <li class="flex items-start space-x-2">
                                        <span class="text-coffee-500 mt-1">•</span>
                                        <span>Ideal temperature: 85-90°C</span>
                                    </li>
                                    <li class="flex items-start space-x-2">
                                        <span class="text-coffee-500 mt-1">•</span>
                                        <span>Recommended ratio: 1:15 (coffee:water)</span>
                                    </li>
                                    <li class="flex items-start space-x-2">
                                        <span class="text-coffee-500 mt-1">•</span>
                                        <span>Extraction time: 4-6 minutes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `}renderSkeleton(){return`
            <div class="py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div class="skeleton bg-gray-200 dark:bg-gray-700 h-96 lg:h-[600px] rounded-2xl"></div>
                        <div class="space-y-8">
                            <div>
                                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-12 mb-4 rounded"></div>
                                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 mb-2 rounded"></div>
                                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-6 w-3/4 rounded"></div>
                            </div>
                            <div>
                                <div class="skeleton bg-gray-200 dark:bg-gray-700 h-8 w-32 mb-4 rounded"></div>
                                <div class="flex gap-3">
                                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-8 w-20 rounded-full"></div>
                                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-8 w-24 rounded-full"></div>
                                    <div class="skeleton bg-gray-200 dark:bg-gray-700 h-8 w-16 rounded-full"></div>
                                </div>
                            </div>
                            <div class="skeleton bg-gray-200 dark:bg-gray-700 h-12 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        `}async mount(){this.navbar.mount(),await this.loadCoffee(),this.setupEventListeners()}async loadCoffee(){try{this.isLoading=!0,this.error=null,this.coffee=await f.getCoffeeById(this.coffeeId),this.isLoading=!1;const e=document.querySelector("main");e&&(e.innerHTML=this.renderContent(),this.setupEventListeners())}catch(e){this.isLoading=!1,this.error=e instanceof Error?e.message:"An error occurred";const t=document.querySelector("main");t&&(t.innerHTML=this.renderContent(),this.setupEventListeners())}}setupEventListeners(){const e=document.getElementById("back-button");e&&e.addEventListener("click",()=>{window.history.pushState(null,"","/coffees"),window.dispatchEvent(new PopStateEvent("popstate"))})}}class b{constructor(){this.themeManager=new c,this.router=new h,this.setupRoutes(),this.init()}setupRoutes(){this.router.addRoute("/",()=>new u),this.router.addRoute("/coffees",()=>new v),this.router.addRoute("/coffee/:id",e=>new m(e.id))}init(){this.themeManager.init(),this.router.init()}}document.addEventListener("DOMContentLoaded",()=>{new b});
