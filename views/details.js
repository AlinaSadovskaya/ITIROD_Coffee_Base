const details = `
<link rel="stylesheet" href="styles/details.css">
<link rel="stylesheet" href="styles/ingredients.css">
<article class="coffee-info">
   
        <div class="coffee-img-details">
            <div class="coffee-image-details">
                <picture>
                    <img src="images/empty-cup.png" alt="empty-cup">
                </picture>
                <div class="coffee-ingredient ingredient1 syrup"></div>
                <div class="coffee-ingredient ingredient2 milk"></div>
                <div class="coffee-ingredient ingredient3 espresso"></div>
            </div>
            <p class="coffee-name-details">LATTE</p>
            <div class="star-rating">
                <input class="star-rating-input" id="star-rating-5" type="radio" name="rating" value="5">
                <label class="star-rating-icon fa fa-star" for="star-rating-5"></label>
                <input class="star-rating-input" id="star-rating-4" type="radio" name="rating" value="4">
                <label class="star-rating-icon fa fa-star" for="star-rating-4"></label>
                <input class="star-rating-input" id="star-rating-3" type="radio" name="rating" value="3">
                <label class="star-rating-icon fa fa-star" for="star-rating-3"></label>
                <input class="star-rating-input" id="star-rating-2" type="radio" name="rating" value="2">
                <label class="star-rating-icon fa fa-star" for="star-rating-2"></label>
                <input class="star-rating-input" id="star-rating-1" type="radio" name="rating" value="1">
                <label class="star-rating-icon fa fa-star" for="star-rating-1"></label>
            </div>
        </div>
        <div class="all_info">
            <div class="main-div">
                
                <div class="coffee-desc">
                    <p>STANDARD VALUE: <span class="coffee-value-details">180</span> ml.</p>
                    <p>AVERAGE MARK: <span class="average-mark">5</span></p>
                    <p>ADDED BY: <span class="coffee-author">ALINA</span></p>
                </div>
                <div class="coffee-ingr">
                    <ul class="ingredients">
                        <li class="ingredient"> <span class="ingedient-value">1/3</span> <span
                                class="ingedient-name">SYRUP</span></li>
                        <li class="ingredient"> <span class="ingedient-value">1/3</span> <span
                                class="ingedient-name">MILK</span></li>
                        <li class="ingredient"> <span class="ingedient-value">1/3</span> <span
                                class="ingedient-name">ESPRESSO</span></li>
                    </ul>
                </div>
                
            </div>
            <p class="coffee-description-details">
            </p>
        </div>
</article>
<section class="comments-section">
    <form class="comment-send" action="#" method="post">
        <textarea name="comment" rows="3" placeholder="LEAVE YOUR COMMENT HERE..."></textarea>
        <input type="submit" name="send" value="SEND">
    </form>
    <ul class="comments">
        <li class="comment-beauty">
            <div class="comment">
                <div class="comment-left">
                    <p class="comment-author">Alina</p>
                    <time>21.03.2021</time>
                </div>
                <p class="comment-text">My favourite coffee drink!</p>
            </div>
        </li>
        <li class="comment-beauty">
            <div class="comment">
                <div class="comment-left">
                    <p class="comment-author">Kostya</p>
                    <time>22.03.2021</time>
                </div>
                <p class="comment-text">Like this coffee so much)</p>
            </div>
        </li>
        <li class="comment-beauty">
            <div class="comment">
                <div class="comment-left">
                    <p class="comment-author">Polina</p>
                    <time>23.03.2021</time>
                </div>
                <p class="comment-text">I love it with a lot of milk added!</p>
            </div>
        </li>

    </ul>
</section>
`