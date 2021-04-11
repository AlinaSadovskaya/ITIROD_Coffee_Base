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
                        <li id="filter-all-li"><a id="filter-all" onclick="getFilterParam('all'); return false;" >ALL</a></li>
                        <li id="filter-top-li"><a id="filter-top" onclick="getFilterParam('top'); return false;" >TOP</a></li>
                    </ul>
                </div>
                <div class="sort">
                    <h3 class="sort-select">SORT</h3>
                    <ul class="beads">
                        <li id="sort-rating-li"><a id="sort-rating" onclick="getSortParam('rating'); return false;" >RATING</a></li>
                        <li id="sort-date-li"><a id="sort-date" onclick="getSortParam('date'); return false;">DATE</a></li>
                        <li id="sort-name-li"><a id="sort-name" onclick="getSortParam('name'); return false;">NAME</a></li>
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