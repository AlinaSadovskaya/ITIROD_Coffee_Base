const catalog = `
<link rel="stylesheet" href="styles/catalog.css">
<link rel="stylesheet" href="styles/ingredients.css">
<input type="checkbox" id="side-checkbox" />
        <div class="side-panel">
            <label class="side-button-2" for="side-checkbox">+</label>
            
            <div>
                <div class="filter">
                    <h3 class="filter-select">FILTER</h3>
                    <ul class="beads">
                        <li><a href="#">ALL</a></li>
                        <li><a href="#">TOP</a></li>
                    </ul>
                </div>
                <div class="sort">
                    <h3 class="sort-select">SORT</h3>
                    <ul class="beads">
                        <li><a href="#">RATING</a></li>
                        <li><a href="#">DATE</a></li>
                        <li><a href="#">NAME</a></li>
                    </ul>
                </div>
            </div>
            <section class="catalog-grid" id="catalog-grid">
            </section>
        </div>
        <div class="side-button-1-wr">
            <label class="side-button-1" for="side-checkbox">
                <div class="side-b side-open">Filter/Sort</div>
            </label>
        </div>
        <section class="catalog-grid">
        <a class = "rating" onclick="onNavigate('/details')">
            <div class="catalog-item">
                <div class="coffee-image">
                  <img src="images/empty-cup.png" alt="empty-cup">
                  <div class="coffee-ingredient ingredient1 syrup"></div>
                  <div class="coffee-ingredient ingredient2 milk"></div>
                  <div class="coffee-ingredient ingredient3 espresso"></div>
                </div>
                <p class="coffee-title">CAPPUCCINO</p>
                <div class="grid-item-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
            </div>
          </a>
        <a class = "rating" onclick="onNavigate('/details')">
          <div class="catalog-item">
              <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                <div class="coffee-ingredient ingredient1 syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
              </div>
              <p class="coffee-title">LATTE</p>
              <div class="grid-item-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
          </div>
        </a>
        <a class = "rating" onclick="onNavigate('/details')">
          <div class="catalog-item">
              <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                <div class="coffee-ingredient ingredient1 syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
              </div>
              <p class="coffee-title">AMERICANO</p>
              <div class="grid-item-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
          </div>
        </a>
        <a class = "rating" onclick="onNavigate('/details')">
          <div class="catalog-item">
              <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                <div class="coffee-ingredient ingredient1 red-syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
              </div>
              <p class="coffee-title">MACCHIATO</p>
              <div class="grid-item-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
          </div>
        </a>
        <a class = "rating" onclick="onNavigate('/details')">
          <div class="catalog-item">
              <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                <div class="coffee-ingredient ingredient1 red-syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
              </div>
              <p class="coffee-title">CORDATO</p>
              <div class="grid-item-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
          </div>
        </a>
        <a class = "rating" onclick="onNavigate('/details')">
          <div class="catalog-item">
              <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                <div class="coffee-ingredient ingredient1 syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
              </div>
              <p class="coffee-title">CAPPUCCINO</p>
              <div class="grid-item-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
          </div>
        </a>
        <a class = "rating" onclick="onNavigate('/details')">
          <div class="catalog-item">
              <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                <div class="coffee-ingredient ingredient1 syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
              </div>
              <p class="coffee-title">LATTE</p>
              <div class="grid-item-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
          </div>
        </a>
        <a class = "rating" onclick="onNavigate('/details')">
          <div class="catalog-item">
              <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                <div class="coffee-ingredient ingredient1 syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
              </div>
              <p class="coffee-title">AMERICANO</p>
              <div class="grid-item-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
          </div>
        </a>
        <a class = "rating" onclick="onNavigate('/details')">
          <div class="catalog-item">
              <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                <div class="coffee-ingredient ingredient1 red-syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
              </div>
              <p class="coffee-title">MACCHIATO</p>
              <div class="grid-item-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
          </div>
        </a>
        <a class = "rating" onclick="onNavigate('/details')">
          <div class="catalog-item">
              <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                <div class="coffee-ingredient ingredient1 red-syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
              </div>
              <p class="coffee-title">CORDATO</p>
              <div class="grid-item-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
          </div>
        </a>
      </section>
`