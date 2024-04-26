async function searchMeal() {
    const searchInput = document.getElementById('searchInput').value;
    if (!searchInput) {
        alert('Please enter a meal name.');
        return;
    }

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();

    const mealContainer = document.getElementById('mealContainer');
    mealContainer.innerHTML = '';

    if (data.meals === null) {
        mealContainer.innerHTML = '<p>No meals found.</p>';
        document.getElementById('showAllBtn').style.display = 'none';
        return;
    }

    const mealsToShow = data.meals.slice(0, 5);
    mealsToShow.forEach(meal => {
        const mealHTML = `
            <div class="row gy-3">
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                        <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class = "card-text"> Meal ID:</strong> ${meal.idMeal}</p>
                        <p class = "card-text"> Recipie details will be here.</p>
                        <a href="#" class="btn btn-primary">View details</a>
                    </div>
                </div>
        `;
        
        mealContainer.innerHTML += mealHTML;
    });

    document.getElementById('showAllBtn').style.display = 'block';
}

async function showAllMeals() {
    const searchInput = document.getElementById('searchInput').value;
    if (!searchInput) {
        alert('Please enter a meal name.');
        return;
    }

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();

    const mealContainer = document.getElementById('mealContainer');
    mealContainer.innerHTML = '';

    if (data.meals === null) {
        mealContainer.innerHTML = '<p>No meals found.</p>';
        return;
    }

    data.meals.forEach(meal => {
        // const mealHTML = `
        //     <div class="meal">
        //         <h2>${meal.strMeal}</h2>
        //         <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        //         <p><strong>Meal ID:</strong> ${meal.idMeal}</p>
        //         <p><strong>Cooking Instructions:</strong> ${meal.strInstructions}</p>
        //     </div>
        // `;
        const mealHTML = `
        <div class="row row-cols-3">
            // <div class="row gy-3">
            //     <div class="col-md-4">
                    <div class="card h-100 m-3">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                        <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class = "card-text"> Meal ID:</strong> ${meal.idMeal}</p>
                        <p class = "card-text"> Recipie details will be here.</p>
                        <a href="#" class="btn btn-primary">View details</a>
                //     </div>
                // </div>
        </div>
        `;
        
        mealContainer.innerHTML += mealHTML;
    });
}