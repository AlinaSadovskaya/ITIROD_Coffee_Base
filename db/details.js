async function createDetailsPage() {
    let CoffeeDrinkId = getURLParam('id');
    let CoffeeDrink = await db.getCoffeeDrink(CoffeeDrinkId);
    if (CoffeeDrink == null) {
        onNavigate('/404');
        return;
    }
    else {

        document.querySelector('.coffee-name-details').textContent = CoffeeDrink.coffeeName;
        document.querySelector('.coffee-value-details').textContent = CoffeeDrink.value;
        document.querySelector('.coffee-author').textContent = CoffeeDrink.login;
        document.querySelector('.coffee-description-details').textContent = CoffeeDrink.desc;
        setImageDiv(CoffeeDrink);
        setIngredients(CoffeeDrink);
        showComments(CoffeeDrink);

        let mark = 0;
        if (CoffeeDrink.stars) {

            let stars = Object.values(CoffeeDrink.stars);
            if (stars.length != 0) {
                mark = stars.reduce((a, b) => (a + b)) / stars.length;
            }

            document.querySelector('.average-mark').textContent = mark.toFixed(2);

            if (await my_auth.isAuthenticated()) {
                let mark_by_user = await db.getStarByUser(getURLParam('id'), my_auth.user.uid);

                //    console.log(mark_by_user);

                if (mark_by_user) {
                    let input = document.getElementsByClassName('star-rating-input');
                    input[5 - mark_by_user].checked = true;
                }
            }
        }
    }
}

function setImageDiv(CoffeeDrink) {
    let pictureInfoDiv = document.querySelector('.coffee-img-details');
    pictureInfoDiv.prepend(createIngredientImageDiv(CoffeeDrink));
}

function setIngredients(CoffeeDrink) {
    let ingredientsList = document.querySelector('.ingredients');
    for (let ingredient of CoffeeDrink.ingredients) {
        let ingredientItem = document.createElement("li");
        ingredientItem.classList.add('ingredient');

        let ingredientValue = document.createElement("span");
        ingredientValue.classList.add('ingedient-value');
        ingredientValue.textContent = `${ingredient.value}% `;

        let ingredientName = document.createElement("span");
        ingredientName.classList.add('ingedient-name');
        ingredientName.textContent = ingredient.name.toUpperCase();

        ingredientItem.appendChild(ingredientValue);
        ingredientItem.appendChild(ingredientName);
        ingredientsList.prepend(ingredientItem);
    }
}

async function setStar(button) {
    let flag = await my_auth.isAuthenticated();
    if (!flag) {
        alert('Sign up to rate your drinks!');
        return;
    }

    let star_mark = button.value;
    let CoffeeDrinkId = getURLParam('id');
    db.setStar(CoffeeDrinkId, my_auth.user.uid, star_mark);

    let CoffeeDrink = await db.getCoffeeDrink(CoffeeDrinkId);

    let mark = 0;
    let stars = Object.values(CoffeeDrink.stars);
    if (stars.length != 0) {
        mark = stars.reduce((a, b) => (a + b)) / stars.length;
    }

    document.querySelector('.average-mark').textContent = mark.toFixed(2);
}

async function addComment() {
    let flag = await my_auth.isAuthenticated();
    if (!flag) {
        alert('Sign up to rate your drinks!');
        return;
    }
    let comment_area = document.getElementById('comment-area');
    let text = comment_area.value;

    if (text.trim() != "") {
        comment_area.value = "";
        let comment = new Comment(my_auth.user.email, text);
        let coffeeDrinkId = getURLParam('id');
        db.addComment(coffeeDrinkId, comment);
        let coffeeDrink = db.getCoffeeDrink(coffeeDrinkId);
        showComments(coffeeDrink);
    }

}


function showComments(CoffeeDrink) {
    if (CoffeeDrink.comments) {
        let comments = Object.values(CoffeeDrink.comments);
        if (comments.length != 0) {
            let commentsList = document.querySelector('.comments');
            commentsList.innerHTML = "";
            for (let comment of comments) {
                let commentItem = document.createElement("li");
                commentItem.classList.add('comment-beauty');

                let commentDiv = document.createElement("div");
                commentDiv.classList.add('comment');

                let AuthDateInfo = document.createElement("div");
                AuthDateInfo.classList.add('comment-left');

                let commentAuthor = document.createElement("p");
                commentAuthor.classList.add('comment-author');
                commentAuthor.textContent = comment.login;
                AuthDateInfo.appendChild(commentAuthor);

                let time = document.createElement("time");
                time.setAttribute('datetime', comment.date);
                time.textContent = comment.date;
                AuthDateInfo.appendChild(time);

                let commentText = document.createElement("p");
                commentText.classList.add('comment-text');
                commentText.textContent = comment.comment;

                commentDiv.appendChild(AuthDateInfo);
                commentDiv.appendChild(commentText);

                commentItem.appendChild(commentDiv);
                commentsList.prepend(commentItem);
            }
        }
    }
}

createDetailsPage()