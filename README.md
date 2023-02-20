# The LangLand Project

## Built by ReactJS, Node and Express<br/><br/>

# tailwind installation

- # 1.Install tailwind css
- Install tailwindcss via npm, and create your tailwind.config.js file<br/><br/>
  - `npm install -D tailwindcss`
  - `npx tailwindcss init`<br/><br/>
- # 2.Configure your template paths
- Add the paths to all of your template files in your tailwind.config.js file.<br/><br/>
  - ````
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: ["./src/**/*.{html,js}"],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        ```
    <br/><br/>
    ````
- # 3.Add the Tailwind directives to your CSS
- Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.<br/><br/>
  - ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

<br/><br/>

- # 4.Start the Tailwind CLI build process
- Run the CLI tool to scan your template files for classes and build your CSS.<br/><br/>
  - ```
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

<br/><br/>

- # 5.Start using Tailwind in your HTML
- Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.<br/><br/>
  - ```
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="/dist/output.css" rel="stylesheet">
    </head>
    <body>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </body>
    </html>
    ```
