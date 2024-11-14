# Random Number Generator

A simple React application that generates random numbers within a user-defined range. The user can specify the minimum and maximum values, and the app will generate a random number between them each time the "Generate Random Number" button is pressed. The generated numbers are displayed below the input fields.

## Features

- **Dynamic Range Input**: Allows users to specify the minimum and maximum range for generating random numbers.
- **Random Number Generation**: Generates a random number within the specified range when the button is clicked.
- **History of Generated Numbers**: Displays a list of all previously generated numbers.

## Technologies Used

- React.js
- JavaScript
- CSS

## Deployment
Hoisted on GitHub and deployed on vercel. Here is the live website link: https://random-num-generator-react.vercel.app/
## Usage
- Enter Minimum and Maximum Values:

- Enter the minimum and maximum values in the respective input fields.
Generate Random Number:

- Click the "Generate Random Number" button to generate a random number between the specified range.
View Generated Numbers:

- Below the input fields, you'll see the list of previously generated numbers.
Disabled Button:

- The "Generate Random Number" button will be disabled if the difference between the max and min values is less than 1 to prevent invalid ranges.

## Project Structure
```php
Copy code
├── public/
│   └── index.html                # HTML template
├── src/
│   ├── components/
│   │   ├── Generated_numbers.js  # Displays list of generated numbers
│   │   └── Random_number_generator.js  # User inputs and generates random numbers
│   ├── App.js                    # Main App component
│   ├── index.css                 # Global styles
│   └── index.js                  # Entry point for React app
├── package.json                  # Project dependencies
└── README.md                     # Project documentation
```
## License
This project is open-source and available under the MIT License.

## Acknowledgments
Created using React.

## Customization
Styling: You can modify the index.css file to change the appearance of the app.
Functionality: You can add more features, such as setting a limit for the number of numbers generated, or even exporting the list of generated numbers.
