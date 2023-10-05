
# Recipe App Mobile

## Table of Contents

* [About Project](#about-project)
* [Requirement](#requirement)
* [Built With](#built-with)
* [Installation](#installation)
* [How use](#how-use)
* [Related Project](#related-project)
* [Contact](#contact)

## About Project
Mama Recipe: Your Culinary Companion

Introducing Mama Recipe, the ultimate culinary companion for all your cooking adventures. Whether you're a passionate home chef or simply looking to share your cooking expertise, our application is tailor-made for you. With Mama Recipe, you'll discover a world of culinary delights right at your fingertips.

Key Features:
🍳 Recipe Sharing: Share your favorite recipes with the global cooking community. Connect with fellow food enthusiasts and showcase your culinary talents.

📚 Recipe Library: Access an extensive library of diverse recipes, from traditional classics to innovative dishes. Never run out of inspiration for your next meal.

🔍 Recipe Search: Easily find recipes that match your ingredients or dietary preferences. No more guessing what to cook – Mama Recipe has you covered.

📲 Mobile Convenience: Carry your recipes wherever you go. Our user-friendly mobile app ensures you have instant access to your cooking inspirations anytime, anywhere.

👩‍🍳 Expert Insights: Learn from seasoned chefs and cooking enthusiasts. Explore tips, tricks, and techniques to elevate your culinary skills.

Mama Recipe is more than just an app; it's a community of food lovers, a treasure trove of recipes, and your go-to source for all things cooking. Join us today and embark on a culinary journey like no other.

Get ready to turn your kitchen into a gastronomic haven with Mama Recipe! Download now and start sharing your love for food with the world.

## Requirement
Before you install this project on your Mobile Phone. You need:

- **Mobile Phone with OS Android 10 or Later**, I'm using **Android 13** when this docs is uploaded. You can upgrade your android version for better.
- **Stable Internet Connectivity**, This application runs online, so internet connectivity is required.

## Built with
- [**react-native@0.70.6**](https://reactnative.dev/docs/0.70/getting-started)
- [**Javascript**]()
- [**Axios**]()
- [**Redux**]()
- [**OneSignal**]()
- [**FireBase**]()

## Installation

Click this link for the complete built project:

[![download](https://img.shields.io/badge/Download-32CD32)](https://drive.google.com/file/d/1KtysTALWSLv3X-dLP6pvBHFXr88vz9nf/view?usp=drive_link)
```
git clone https://github.com/mahardhikap/recipeApiV2.git
```
After installation is done, on your terminal type:

```
cd recipeApiV2
```

You need install package dependencies, to make this project work properly, in your terminal type:
```
npm install
```
Open folder **recipeApiV2**, if you have Visual Studio Code installed on you computer, you can type on terminal:
```
code .
```
or open it manually, with search in directories libraries windows explorer

Theres two important file for guide the set up database and env, you will found file named **database.sql** and **.example.env**, open your PostgreSQL then set up like query in database.sql. For .example.env set up you can follow this next tutorial below

You need to put file name **.env** in folder **recipeApiV2**, the **.env** should include this:
```
USER= your database username
HOST= your database host 127.0.0.1 for localhost
DATABASE= your database name
PASSWORD= your database password
PORT= your port database / 5432
CLOUDINARY_CLOUD_NAME= your cloudinary name
CLOUDINARY_API_KEY= your cloudinary api key
CLOUDINARY_SECRET_KEY= your cloudinary secret key
SECRET= your secret word in jwt setup
EMAIL_NAME= your ftp email
EMAIL_PASS= your password ftp email
BASE_URL= your access url, default http://localhost:3000
```

After all above is done, you can run this project with type on terminal:
```
node index.js
```

you will see 'App running on http://localhost:3000'
## How Use
Open Postman, go to workspace then import postman collection on folder recipeApiV2, name is **recipeApiV2.postman_collection**
## Related Project
You can visit my github where I'm using this API for the server:
- **[Recipe Web App](https://github.com/mahardhikap/recipeWebApp)**
- **[Recipe Mobile App](https://github.com/mahardhikap/RecipeMobileApp)**

##  Contact
You can reach me on:

[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:putrad578@gmail.com)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/mahardhika300617)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mahardhikapratama)

I know this project is not perfect.

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b your/branch`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/yourbranch`)
5. Open a Pull Request