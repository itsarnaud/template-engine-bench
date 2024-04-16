# Templating Engine Benchmark

This project is a benchmark designed to evaluate the performance of various JavaScript template engines. It allows developers to compare rendering performance of several popular template engines in various scenarios.

## How to use ?

**1. Clone this repo on your machine:**
```bash
git clone https://github.com/itsarnaud/templating-engine-bench.git
```

**2. Install dependencies:**
```bash
npm install
```

**3. Launch the benchmark by executing:**
```bash
node main.js
```

**4. Results:<br/>**
Once the benchmark is completed, the results will be automatically updated in the readme file.

## Current results

The tests were carried out on:
- Node v20.12.0
- MacBook Pro M1, 13-inch with 16GB of RAM (2020

<!-- <render performance> -->
## RENDER 

### friends (runned 10000 times) 
`eta` => **1192ms** <br/> 
`igodust` => **1627ms** <br/> 
`ejs` => **1710ms** <br/> 
`handlebars` => **4666ms** <br/> 
`pug` => **10307ms** <br/> 

### if-expression (runned 10000 times) 
`eta` => **192ms** <br/> 
`igodust` => **294ms** <br/> 
`ejs` => **305ms** <br/> 
`pug` => **6861ms** <br/> 

### projects-escaped (runned 10000 times) 
`eta` => **243ms** <br/> 
`igodust` => **301ms** <br/> 
`ejs` => **419ms** <br/> 
`handlebars` => **1496ms** <br/> 
`pug` => **6448ms** <br/> 

### projects-unescaped (runned 10000 times) 
`igodust` => **233ms** <br/> 
`eta` => **244ms** <br/> 
`ejs` => **421ms** <br/> 
`handlebars` => **1478ms** <br/> 
`pug` => **6471ms** <br/> 

### search-results (runned 10000 times) 
`igodust` => **343ms** <br/> 
`eta` => **364ms** <br/> 
`ejs` => **1326ms** <br/> 
`handlebars` => **2632ms** <br/> 
`pug` => **13986ms** <br/> 

### simple-0 (runned 10000 times) 
`igodust` => **110ms** <br/> 
`eta` => **134ms** <br/> 
`ejs` => **142ms** <br/> 
`handlebars` => **370ms** <br/> 
`pug` => **900ms** <br/> 

### simple-1 (runned 10000 times) 
`eta` => **203ms** <br/> 
`igodust` => **253ms** <br/> 
`ejs` => **390ms** <br/> 
`handlebars` => **1590ms** <br/> 
`pug` => **7734ms** <br/> 

### simple-2 (runned 10000 times) 
`eta` => **203ms** <br/> 
`igodust` => **208ms** <br/> 
`ejs` => **355ms** <br/> 
`handlebars` => **1559ms** <br/> 
`pug` => **6983ms** <br/> 

<!-- <end> -->

## Adding a new Template Engine

To add a new template engine to this project, follow these simple steps:

**1. Create a file for the template engine:<br/>**
In the `engines` directory, create a new file named after your template engine, for example `my-engine.js`. Take a look at the files already created for the syntax.

```
engines
 ├── igodust.js
 ├── my-engine.js
 └── ...
```

**2. Add test templates: <br/>**
Place your template files in the templates directory, following the existing structure. Each test group should have a data file (.js or .json) and template files for each template engine you want to include in the benchmark.

```
templates
 ├── group1
 │   ├── data.js (or json)
 │   ├── template.dust
 │   ├── template.my-engine
 │   └── ...
 └── ...
```

 And that's it, all you have to do is launch the benchmark!
