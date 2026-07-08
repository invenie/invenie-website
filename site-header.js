(function () {
  const root = document.getElementById('site-header');
  if (!root) return;

  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome = page === 'index.html' || page === '';
  const isSolutions = page === 'solutions.html';
  const isPricing = page === 'pricing.html';
  const isResource = page === 'blog.html' || page === 'faqs.html' || page === 'article.html';
  const contactHref = isHome ? '#sm5exha' : 'index.html#sm5exha';

  const activeClass = ' text-[var(--primary-color)] font-semibold';
  const linkClass = (active) => `transition ease-linear md:hover:text-black${active ? activeClass : ''}`;

  root.innerHTML = `
    <header class="relative z-50 border-b border-[var(--light-border-color)] bg-[#faf8f4] code-section" id="slmdvhf">
      <nav class="2xl:text-base">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
          <a class="block" href="index.html">
            <img src="./public/logos/dark_primary_logo_invenie.png" alt="Invenie Logo" class="h-16 w-auto dont-replace">
          </a>
          <div class="flex md:hidden">
            <button id="mobile-menu-button" type="button" class="toggleMenu" aria-controls="navigation-menu" aria-expanded="false" aria-label="Navigation Menu">
              <i class="fa-regular fa-bars text-2xl" aria-hidden="true"></i>
            </button>
          </div>
          <div id="navigation-menu" class="hidden absolute left-0 top-full w-screen bg-[#ffffff] pb-4 lg:static lg:flex flex-1 lg:items-center lg:justify-between lg:bg-transparent lg:pb-0">
            <ul class="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8">
              <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                <a href="solutions.html" class="${linkClass(isSolutions)}">Solutions</a>
              </li>
              <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                <a href="pricing.html" class="${linkClass(isPricing)}">Pricing</a>
              </li>
              <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                <div class="group relative">
                  <button id="resources-menu-button" type="button" class="${linkClass(isResource)} flex items-center" aria-controls="resources-menu" aria-expanded="false">
                    <span>Resources</span>
                    <i class="fa-regular fa-chevron-down ml-1 transition-transform lg:group-hover:rotate-180" aria-hidden="true"></i>
                  </button>
                  <div id="resources-menu" class="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                    <div class="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                      <a class="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium${(page === 'blog.html' || page === 'article.html') ? activeClass : ''}" href="blog.html">Blog</a>
                      <a class="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium${page === 'faqs.html' ? activeClass : ''}" href="faqs.html">FAQs</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                <a href="${contactHref}" class="${linkClass(false)}">Contact</a>
              </li>
            </ul>
            <div class="flex flex-col md:flex-row items-center space-y-4 md:mt-0 md:space-y-0 md:space-x-4 px-5 md:p-0">
              <a class="rounded-[var(--button-rounded-radius)] rounded-br-none border bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-light text-[var(--primary-button-text-color)] transition ease-linear hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)] md:px-8 md:py-4" href="https://zcal.co/pelumi/30min">
                <span>Schedule a Demo</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;

  const mobileButton = root.querySelector('#mobile-menu-button');
  const navigationMenu = root.querySelector('#navigation-menu');
  const resourcesButton = root.querySelector('#resources-menu-button');
  const resourcesMenu = root.querySelector('#resources-menu');

  if (mobileButton && navigationMenu) {
    mobileButton.addEventListener('click', function () {
      const expanded = mobileButton.getAttribute('aria-expanded') === 'true';
      mobileButton.setAttribute('aria-expanded', String(!expanded));
      navigationMenu.classList.toggle('hidden', expanded);
    });
  }

  if (resourcesButton && resourcesMenu) {
    resourcesButton.addEventListener('click', function () {
      const expanded = resourcesButton.getAttribute('aria-expanded') === 'true';
      resourcesButton.setAttribute('aria-expanded', String(!expanded));
      resourcesMenu.classList.toggle('hidden', expanded);
    });

    resourcesButton.addEventListener('blur', function () {
      window.setTimeout(function () {
        if (!resourcesMenu.matches(':hover') && !resourcesButton.matches(':hover')) {
          resourcesButton.setAttribute('aria-expanded', 'false');
          resourcesMenu.classList.add('hidden');
        }
      }, 150);
    });
  }
})();
