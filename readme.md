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
`pug` => **504ms** <br/> 
`igodust` => **603ms** <br/> 
`eta` => **610ms** <br/> 
`handlebars` => **1181ms** <br/> 
`ejs` => **3618ms** <br/> 
`liquidjs` => **14825ms** <br/> 

### if-expression (runned 5000 times) 
`pug` => **6ms** <br/> 
`igodust` => **7ms** <br/> 
`liquidjs` => **82ms** <br/> 
`eta` => **88ms** <br/> 
`ejs` => **130ms** <br/> 

### projects-escaped (runned 5000 times) 
`handlebars` => **38ms** <br/> 
`igodust` => **42ms** <br/> 
`eta` => **109ms** <br/> 
`liquidjs` => **145ms** <br/> 
`pug` => **157ms** <br/> 
`ejs` => **185ms** <br/> 

### projects-unescaped (runned 5000 times) 
`igodust` => **8ms** <br/> 
`handlebars` => **36ms** <br/> 
`eta` => **106ms** <br/> 
`liquidjs` => **141ms** <br/> 
`pug` => **156ms** <br/> 
`ejs` => **179ms** <br/> 

### search-results (runned 5000 times) 
`igodust` => **16ms** <br/> 
`pug` => **57ms** <br/> 
`handlebars` => **146ms** <br/> 
`eta` => **164ms** <br/> 
`ejs` => **585ms** <br/> 
`liquidjs` => **1328ms** <br/> 

### simple-0 (runned 5000 times) 
`pug` => **1ms** <br/> 
`igodust` => **5ms** <br/> 
`liquidjs` => **7ms** <br/> 
`handlebars` => **11ms** <br/> 
`ejs` => **59ms** <br/> 
`eta` => **64ms** <br/> 

### simple-1 (runned 5000 times) 
`pug` => **7ms** <br/> 
`igodust` => **10ms** <br/> 
`handlebars` => **19ms** <br/> 
`eta` => **88ms** <br/> 
`liquidjs` => **94ms** <br/> 
`ejs` => **166ms** <br/> 

### simple-2 (runned 5000 times) 
`pug` => **6ms** <br/> 
`igodust` => **9ms** <br/> 
`handlebars` => **14ms** <br/> 
`eta` => **89ms** <br/> 
`liquidjs` => **91ms** <br/> 
`ejs` => **149ms** <br/> 

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

 PRs are welcome 😃❤️
