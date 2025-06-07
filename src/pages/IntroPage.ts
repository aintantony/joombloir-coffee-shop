import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export class IntroPage {
  private navbar = new Navbar()
  private footer = new Footer()

  render(): string {
    return `
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
        `
  }

  mount() {
    this.navbar.mount()

    const ctaButtons = document.querySelectorAll(".cta-button, .cta-button-outline")
    ctaButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        if (button.getAttribute("href") === "/coffees") {
          e.preventDefault()
          window.history.pushState(null, "", "/coffees")
          window.dispatchEvent(new PopStateEvent("popstate"))
        }
      })
    })
  }
}
