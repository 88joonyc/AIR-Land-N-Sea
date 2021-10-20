# AIR-Land-N-Sea

*By: Paul Chang. --  [AIR-Land-N-Sea](https://AIR-Land-N-Sea.herokuapp.com/ "Named link title")*

[AIR-Land-N-Sea](https://AIR-Land-N-Sea.herokuapp.com/ "Named link title") is an [AirBNB](https://airbnb.com/ "Named link title") clone. 


### Table of Contents:
 - [Application Features](#application-features)
 - [Installation](#installation)
 - [Technologies Used](#technologies-used)
 - [Wiki Documentation](#wiki-documentation)
 - [Future Plans](#future-plans)
<!--  - [Conclusion](#conclusion) -->
 <!--  - Frontend Overview
 - Backend Overview -->


# Application Features 

## Splash
*Splash landing page where anyone view some details of the site along with FAQs*
![Screen Shot 2021-10-03 at 4 51 38 PM](https://user-images.githubusercontent.com/79543569/135771214-6bfff178-599d-474b-beea-8f99b3f8b821.png)
![Screen Shot 2021-10-03 at 4 55 30 PM](https://user-images.githubusercontent.com/79543569/135771271-08fcc71f-9e49-48e2-9fbf-a59da2564501.png)


## Sign up
<img width="1317" alt="Screen Shot 2021-10-03 at 4 48 39 PM" src="https://user-images.githubusercontent.com/79543569/135771187-90f1e91b-c9ff-49e5-b968-e65da72d1086.png">


## Log in
<img width="1225" alt="Screen Shot 2021-10-03 at 4 48 13 PM" src="https://user-images.githubusercontent.com/79543569/135784735-28bba69b-9100-4098-83a5-f736836e1f3a.png">


## Home page
*Verified users will be able to edit their booking date or select a new toy to book*
![Screen Shot 2021-10-01 at 1 44 02 AM](https://user-images.githubusercontent.com/79543569/135771419-f088a75d-874d-4975-878f-231241c46d9d.png)

## Host a toy
*Verified users may host their toy for others to book/rent.*
![Screen Shot 2021-10-01 at 1 44 21 AM](https://user-images.githubusercontent.com/79543569/135771371-c95f5867-966d-46d7-998d-b0ed124e768b.png)


## Toys detail page
*Users may create a new booking for the current toy after selecting a valid date.*
![Screen Shot 2021-10-01 at 1 45 08 AM](https://user-images.githubusercontent.com/79543569/135771425-4356849b-9ecd-49be-8bc8-2a6eed55e155.png)


## Edit hosted toy
*Users that own the toy can edit their toy details including delete and/or add images from the toy details page.*
![Screen Shot 2021-10-01 at 1 46 37 AM](https://user-images.githubusercontent.com/79543569/135771352-901b41a9-0cab-4a03-9449-f8fd465d7ec4.png)


## Add / View all pictures
*Users can view all images of the selected toy they own.*
![Screen Shot 2021-10-19 at 8 35 10 PM](https://user-images.githubusercontent.com/79543569/138008799-7abfa512-4ed8-4528-bfda-4c58749efe1c.png)


## View / Delete picture
*Users may view a closer look at the selected image and also delete the image.*
![Screen Shot 2021-10-01 at 1 43 13 AM](https://user-images.githubusercontent.com/79543569/135771403-96781e9d-d0e6-45ee-a7c1-e6225f2488a7.png)


## Edit user details
*Users may change their profile details.*
![Screen Shot 2021-10-05 at 11 56 27 PM](https://user-images.githubusercontent.com/79543569/136419587-9ce942b7-d504-499e-8009-55bff6997058.png)


# Installation

## Getting started

1. Clone this repository (only this branch)

   ```zsh
   git clone https://github.com/88joonyc/air-land-n-sea.git
   ```

2. Install dependencies

      ```zsh
      npm install (both frontend & backend directories)
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your backend directory, migrate your database, seed your database, and run your flask app

      ```zsh
      npx sequelize-cli db:create
      ```

      ```zsh
      npx sequelize-cli db:migrate
      ```

      ```zsh
      npx sequelize-cli db:seed:all
      ```

6. Start your flask backend in the ```/backend``` directory
      ```zsh
      npm start
      ```
      start your frontend in the ```/frontend``` directory
      ```zsh
      npm start
      ```
7. Profit

# Technologies used
- Javascript
- React
- Express
- Redux
- PosgreSQL
- Heroku
- Git
- Vanilla CSS
- AWS S3

# Wiki Documentation
- ### [Home](https://github.com/88joonyc/AIR-Land-N-Sea/wiki "Named link title")
- ### [Feature List](https://github.com/88joonyc/AIR-Land-N-Sea/wiki/MVP-Feature-List "Named link title")
- ### [API Docs](https://github.com/88joonyc/AIR-Land-N-Sea/wiki/API-Documentation "Named link title")
- ### [Database Schema](https://github.com/88joonyc/AIR-Land-N-Sea/wiki/Database-Schema "Named link title")
- ### [User stories](https://github.com/88joonyc/AIR-Land-N-Sea/wiki/User-Stories "Named link title")
<!-- # Frontend Overview

# Backend Overview -->

# Future Plans
- implement search feature for added address details
- link Google Maps API with added address details

<!-- # Conclusion -->


# Contact
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)][1]
[![angellist](https://github.com/hull/hullstrap/blob/master/source/images/icons/angellist.svg)][2]
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)][3]

[joonyc88@gmail.com](mailto:joonyc88@gmail.com)

[1]: https://github.com/88joonyc
[2]: https://angel.co/u/_paulchang_
[3]: https://www.linkedin.com/in/pchang1216/


Visit the live app powered by Heroku [here](https://AIR-Land-N-Sea.herokuapp.com/ "Named link title")
