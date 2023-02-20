# The LangLand Project

## Built by ReactJS, Node and Express<br/><br/>

# tailwind installation

- # 1.Install tailwind css
- Install tailwindcss via npm, and create your tailwind.config.js file
  - `npm install -D tailwindcss`
  - `npx tailwindcss init`<br/><br/>
- # 2.Configure your template paths
- Add the paths to all of your template files in your tailwind.config.js file.<br/><br/>
  - ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
