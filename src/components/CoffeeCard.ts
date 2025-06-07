import type { Coffee } from "../types/coffee"

export class CoffeeCard {
  constructor(private coffee: Coffee) {}

  render(): string {
    return `
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
                        ${this.coffee.ingredients
                          .slice(0, 3)
                          .map(
                            (ingredient) =>
                              `<span class="px-2 py-1 bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-200 text-xs rounded-full">${ingredient}</span>`,
                          )
                          .join("")}
                        ${this.coffee.ingredients.length > 3 ? `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">+${this.coffee.ingredients.length - 3}</span>` : ""}
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-coffee-600 dark:text-coffee-400 font-semibold">Discover</span>
                        <svg class="w-5 h-5 text-coffee-600 dark:text-coffee-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        `
  }
}
