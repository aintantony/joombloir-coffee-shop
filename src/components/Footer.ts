export class Footer {
  render(): string {
    return `
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
        `;
  }
}
