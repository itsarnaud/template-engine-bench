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
- Node v21.7.2
- MacBook Air M2, 15-inch with 16GB of RAM (2023)

<!-- <render performance> -->
## RENDER 

### friends (runned 5000 times) 
`pug` => **492ms** <br/> 
`eta` => **558ms** <br/> 
`igodust` => **572ms** <br/> 
`handlebars` => **853ms** <br/> 
`ejs` => **999ms** <br/> 
`liquidjs` => **14877ms** <br/> 

### if-expression (runned 5000 times) 
`pug` => **5ms** <br/> 
`igodust` => **7ms** <br/> 
`liquidjs` => **81ms** <br/> 
`eta` => **85ms** <br/> 
`ejs` => **132ms** <br/> 

### projects-escaped (runned 5000 times) 
`handlebars` => **38ms** <br/> 
`igodust` => **43ms** <br/> 
`eta` => **108ms** <br/> 
`liquidjs` => **145ms** <br/> 
`pug` => **156ms** <br/> 
`ejs` => **190ms** <br/> 

### projects-unescaped (runned 5000 times) 
`igodust` => **8ms** <br/> 
`handlebars` => **36ms** <br/> 
`eta` => **106ms** <br/> 
`liquidjs` => **143ms** <br/> 
`pug` => **155ms** <br/> 
`ejs` => **190ms** <br/> 

### search-results (runned 5000 times) 
`igodust` => **16ms** <br/> 
`pug` => **40ms** <br/> 
`handlebars` => **142ms** <br/> 
`eta` => **163ms** <br/> 
`ejs` => **720ms** <br/> 
`liquidjs` => **1349ms** <br/> 

### simple-0 (runned 5000 times) 
`pug` => **2ms** <br/> 
`igodust` => **5ms** <br/> 
`handlebars` => **7ms** <br/> 
`liquidjs` => **7ms** <br/> 
`eta` => **58ms** <br/> 
`ejs` => **61ms** <br/> 

### simple-1 (runned 5000 times) 
`pug` => **6ms** <br/> 
`igodust` => **11ms** <br/> 
`handlebars` => **17ms** <br/> 
`eta` => **88ms** <br/> 
`liquidjs` => **95ms** <br/> 
`ejs` => **178ms** <br/> 

### simple-2 (runned 5000 times) 
`pug` => **7ms** <br/> 
`igodust` => **9ms** <br/> 
`handlebars` => **13ms** <br/> 
`eta` => **89ms** <br/> 
`liquidjs` => **91ms** <br/> 
`ejs` => **159ms** <br/> 

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
**⚠️ WARNING: Asynchronous rendering methods, such as those returning Promises, are not supported by the benchmarking tool at the moment. Ensure that your rendering method is synchronous to work with the benchmarking tool effectively. ⚠️**

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
