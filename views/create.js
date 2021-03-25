const create = `

<link rel="stylesheet" href="styles/create.css">
<link rel="stylesheet" href="styles/ingredients.css">
<form class="create-coffee-form">
        <div class="coffee-main-div">

          <div class="coffee-round-image">
            <div class="coffee-left-div">
                <div class="coffee-image">
                <img src="images/empty-cup.png" alt="empty-cup">
                </div>
            </div>
          </div>

          <div class="coffee-right-div">
            <div class="coffee-value-div">
                <input type="text" id="beauty-input" name="coffee-name" value="" placeholder="ENTER A NAME HERE..." required>
                <div class="coffee-value-str">
                  <label for="coffee-value">STANDARD VALUE:</label>
                  <input type="number" id="beauty-input-number" name="coffee-value" value="" placeholder="ml" required>
                </div>
            </div>
            <div class="ingredients-menu">
              <ol class="ingredients-list">
                    <li class="ingredient-desc">
                        <div class="ingredient-value">
                            <select class="ingredients-select" name="ingredients-select">
                            <option value="espresso">ESPRESSO</option>
                            <option value="milk">MILK</option>
                            <option value="syrup">SYRUP</option>
                            </select>
                            <input class="input_value" type="number" name="ingredient-value" value="" placeholder="VALUE" required>
                            <button class="remove-ingredient" type="button" name="remove-ingredient"><i class="fas fa-minus"></i></button>
                        </div>
                    </li>
                    <li class="ingredient-desc">
                        <div class="ingredient-value">
                            <select class="ingredients-select" name="ingredients-select">
                            <option value="espresso">ESPRESSO</option>
                            <option value="milk">MILK</option>
                            <option value="syrup">SYRUP</option>
                            </select>
                            <input class="input_value" type="number" name="ingredient-value" value="" placeholder="VALUE" required>
                            <button class="remove-ingredient" type="button" name="remove-ingredient"><i class="fas fa-minus"></i></button>
                        </div>
                    </li>
                    <li class="ingredient-desc">
                        <div class="ingredient-value">
                            <select class="ingredients-select" name="ingredients-select">
                            <option value="espresso">ESPRESSO</option>
                            <option value="milk">MILK</option>
                            <option value="syrup">SYRUP</option>
                            </select>
                            <input class="input_value" type="number" name="ingredient-value" value="" placeholder="VALUE" required>
                            <button class="remove-ingredient" type="button" name="remove-ingredient"><i class="fas fa-minus"></i></button>
                        </div>
                    </li>
              </ol>
              <button id="add-ingredient" type="button" name="add-ingredient"><i class="fas fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div class="create-final">
          <textarea id="description" name="name" rows="3" placeholder="DESCRIPTION"></textarea>
          <button id="create-button" type="submit" name="create-button">CREATE</button>
        </div>
      </form>
</section>
`