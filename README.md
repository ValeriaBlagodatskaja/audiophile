# AUDIOPHILE

This was the final React project from The Odin Project's JavaScript curriculum. The main goal of this project was to build an e-commerce store using React. This project is an implementation of the Audiophile e-commerce website guru level challenge provided by Frontend Mentor. The design and requirements for this project were obtained from [here](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). The design file can be found in root folder.

This project does not include a back-end code or database connection. Instead, data is imported from a static data.json file, and user cart information is saved in local storage.

## Technologies Used

- **React** - A JavaScript library for building user interfaces.
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **Framer Motion** - A library for creating animations in React.
- **React Hook Form** - A library for managing forms in React.
- **React Router** - A library for routing in React applications.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite** - A fast build tool for modern web projects.
- **Prettier** - A tool to handle formatting and keep code consistent.
- **ESLint** - A tool to enforce good coding practices.

## Pages Overview

### Home

**Description**: The Home component serves as the landing page of the application, providing an overview and navigation to other parts of the site.

**Features**:

- **Hero Section**: A prominent section with a featured product or promotion.
- **Categories Overview**: Quick links or highlights of different product categories.
- **Featured Products**: Display a selection of featured or popular products.
- **Responsive Design**: Ensure the home page is visually appealing and functional on all devices.

### Category

**Description**: The Category component displays a list of products belonging to a specific category.

**Features**:

- **Product Listing**: Show products with basic information such as name, price, and thumbnail.

### ProductInfo

**Description**: The ProductInfo component provides detailed information about a specific product.

**Features**:

- **Product Details**: Display comprehensive details such as description, specifications, and images.
- **Add to Cart**: Enable users to add the product to their cart directly from the product page.
- **Related Products**: Suggest similar or related products to the user.

### Checkout

**Description**: The checkout page component.  
**Features**:

- Form validation
- Submission handling
- Summary display