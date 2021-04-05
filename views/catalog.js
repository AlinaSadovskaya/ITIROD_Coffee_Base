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
        </div>

        <div class="side-button-1-wr">
            <label class="side-button-1" for="side-checkbox">
                <div class="side-b side-open">Filter/Sort</div>
            </label>
        </div>

        <section class="catalog-grid" id="catalog-grid">
        </section>
`