const details = `
<link rel="stylesheet" href="styles/details.css">
<link rel="stylesheet" href="styles/ingredients.css">
<article class="coffee-info">
   
        <div class="coffee-img-details">
            <p class="coffee-name-details"></p>
            <div class="star-rating">
                <input class="star-rating-input" id="star-rating-5" type="radio" name="rating" value="5" onclick="setStar(this);">
                <label class="star-rating-icon fa fa-star" for="star-rating-5"></label>
                <input class="star-rating-input" id="star-rating-4" type="radio" name="rating" value="4" onclick="setStar(this);">
                <label class="star-rating-icon fa fa-star" for="star-rating-4"></label>
                <input class="star-rating-input" id="star-rating-3" type="radio" name="rating" value="3" onclick="setStar(this);">
                <label class="star-rating-icon fa fa-star" for="star-rating-3"></label>
                <input class="star-rating-input" id="star-rating-2" type="radio" name="rating" value="2" onclick="setStar(this);">
                <label class="star-rating-icon fa fa-star" for="star-rating-2"></label>
                <input class="star-rating-input" id="star-rating-1" type="radio" name="rating" value="1" onclick="setStar(this);">
                <label class="star-rating-icon fa fa-star" for="star-rating-1"></label>
            </div>
        </div>
        <div class="all_info">
            <div class="main-div">
                
                <div class="coffee-desc">
                    <p>STANDARD VALUE: <span class="coffee-value-details"></span> ml.</p>
                    <p>AVERAGE MARK: <span class="average-mark"></span></p>
                    <p>ADDED BY: <span class="coffee-author"></span></p>
                </div>
                <div class="coffee-ingr">
                    <ul class="ingredients">
                    </ul>
                </div>
                
            </div>
            <p class="coffee-description-details">
            </p>
        </div>
</article>
<section class="comments-section">
    <form class="comment-send" onsubmit="addComment(); return false;" method="post">
        <textarea name="comment" id="comment-area" rows="3" placeholder="LEAVE YOUR COMMENT HERE..."></textarea>
        <input type="submit" name="send" value="SEND">
    </form>
    <ul class="comments">
        
    </ul>
</section>
`