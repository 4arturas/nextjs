# nextjs

# Create project

````
npm init -y
npm i next react react-dom
````

# Update package.json
````
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start"
}
````

````
mkdir pages
cd pages 
touch index.js
const Index = () =>
{
    return (
        <h1>Main</h1>
    )
}
export default Index
````