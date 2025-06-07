import { themeManager } from "../utils/theme"

export class Navbar {
  render(): string {
    return `
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
        `
  }

  mount() {
    const themeToggle = document.getElementById("theme-toggle")
    const mobileMenuButton = document.getElementById("mobile-menu-button")
    const mobileMenu = document.getElementById("mobile-menu")

    themeToggle?.addEventListener("click", () => {
      themeManager.toggle()
    })

    mobileMenuButton?.addEventListener("click", () => {
      mobileMenu?.classList.toggle("hidden")
    })
  }
}
