
# Bangladeshi Handicrafts - Facebook businesses

Bangladeshi Handicrafts is a website dedicated to showcasing businesses on Facebook that sell and promote handicrafts in Bangladesh. In this website offers a curated selection of jute-related items, highlighting the artistry and craftsmanship of Bangladeshi artisans.

**Live Link: [Click Here](https://bangladeshi-handicrafts.web.app/)**
## Website Features

- **Business Section**: Explore various local businesses that sell handmade jute products. Discover a wide range of jute items including rugs, handbags, pencil bags, phone cases, jewelry boxes, cushion covers, pot covers, and kitchen aprons.
- **Favorites**: Save your favorite jute products to a personalized list (stored in local storage).
- **Cart Management**: Users can add products to their cart,
- **User Profiles**: Users can create profiles and track their favorite jute products.
- **Dark/Night Theme**: A future feature allowing users to switch between day and night themes.
- **Responsive Design**: Optimized for all devices, from desktops to mobile phones.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Icons**: React Icons
- **Notifications**: React Toastify and Sweetalert2 for alerts and notifications


## API Reference

| Field | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | The unique identifier for the product. |
| `productName`      | `string` | The name of the product (e.g., "Jute Candle Holder"). |
| `image`      | `string` | The URL of the product image (e.g., "https://i.ibb.co/hYbFj8v/candle-holder.jpg"). |
| `description`      | `string` | 	A detailed description of the product (e.g., "This eco-friendly jute candle holder adds a warm, rustic touch..."). |
| `materialsUsed`      | `array` | An array listing the materials used in crafting the product (e.g., ["Jute", "Wood Base"]). |
| `craftingMethods`      | `string` | A description of the crafting methods used to create the product (e.g., "Handwoven by skilled artisans..."). |
| `numberOfProducts`      | `number` | The number of products available (e.g., 120). |
| `rating`      | `number` | The rating of the product (e.g., 4). |
| `price`      | `number` | price	number	The price of the product (e.g., 25). |


# Environment Variables

To run this project, you will need to add the following environment variables to your respective `.env` files for both the frontend and backend.

**For Frontend**

Create a `.env.local` file in the frontend repository and add the following Firebase configuration and API URL:

``` 
VITE_APIKEY=Firebase_API_key
VITE_AUTHDOMAIN=Firebase_auth_domain
VITE_PROJECTID=Firebase_project_id
VITE_STORAGEBUCKET=Firebase_storage_bucket
VITE_MESSAGINGSENDERID=Firebase_messaging_sender_id
VITE_APPID=Firebase_app_id

# Uncomment this for local development
# VITE_API_URL=http://localhost:5000

# Use this for production:
VITE_API_URL=https://handicraft-businesses-server.vercel.app

```

**For Backend**

Create a `.env` file in the backend repository and add your MongoDB connection details and other secrets:

```
DB_USER=your_database_username
DB_PASS=your_database_password
ACCESS_TOKEN_SECRET=your_access_token_secret
```

Replace the placeholders with your actual Firebase and MongoDB credentials.

## Documentation

- React-Router: [Tutorial](https://reactrouter.com/en/main/start/tutorial)

- TailwindCSS: [TailwindCSS](https://tailwindcss.com/docs/guides/vite )

- DaisyUI: [DaisyUI](https://daisyui.com/docs/install/)

- Vercel: [vercel](https://vercel.com/docs)

- Firebase: [Firebase](https://firebase.google.com/docs/auth/web/start)
- MongoDB: [MongoDB](https://www.mongodb.com/docs/drivers/node/v3.6/fundamentals/crud/)



## Repositories

- Frontend Part: [Frontend Part](https://github.com/mariyasf/handicraft-businesses-client)

- Backend Part: [Backend Part](https://github.com/mariyasf/handicraft-businesses-server)

- Products JSON File: [Products JSON File](https://github.com/mariyasf/handicraft-businesses-client/blob/main/public/products.json)