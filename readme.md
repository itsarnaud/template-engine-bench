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
# RENDER 

### friends (runned 10000 times) 
`pug` => **224ms** <br/> 
`eta` => **1202ms** <br/> 
`igodust` => **1651ms** <br/> 
`ejs` => **1734ms** <br/> 
`handlebars` => **1864ms** <br/> 

### if-expression (runned 10000 times) 
`pug` => **7ms** <br/> 
`eta` => **200ms** <br/> 
`igodust` => **304ms** <br/> 
`ejs` => **311ms** <br/> 

### projects-escaped (runned 10000 times) 
`handlebars` => **77ms** <br/> 
`eta` => **252ms** <br/> 
`igodust` => **307ms** <br/> 
`pug` => **330ms** <br/> 
`ejs` => **427ms** <br/> 

### projects-unescaped (runned 10000 times) 
`handlebars` => **73ms** <br/> 
`igodust` => **235ms** <br/> 
`eta` => **253ms** <br/> 
`pug` => **328ms** <br/> 
`ejs` => **439ms** <br/> 

### search-results (runned 10000 times) 
`pug` => **74ms** <br/> 
`handlebars` => **300ms** <br/> 
`igodust` => **350ms** <br/> 
`eta` => **375ms** <br/> 
`ejs` => **1450ms** <br/> 

### simple-0 (runned 10000 times) 
`pug` => **2ms** <br/> 
`handlebars` => **15ms** <br/> 
`igodust` => **112ms** <br/> 
`eta` => **140ms** <br/> 
`ejs` => **146ms** <br/> 

### simple-1 (runned 10000 times) 
`pug` => **12ms** <br/> 
`handlebars` => **34ms** <br/> 
`eta` => **209ms** <br/> 
`igodust` => **258ms** <br/> 
`ejs` => **401ms** <br/> 

### simple-2 (runned 10000 times) 
`pug` => **10ms** <br/> 
`handlebars` => **26ms** <br/> 
`eta` => **210ms** <br/> 
`igodust` => **213ms** <br/> 
`ejs` => **360ms** <br/> 

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
