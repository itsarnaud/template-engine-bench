# Template Engine Benchmark

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

### friends (runned 2000 times) 
`igodust` => **27ms** <br/> 
`pug` => **110ms** <br/> 
`ejs` => **576ms** <br/> 
`handlebars` => **711ms** <br/> 
`eta` => **722ms** <br/> 
`dustjs` => **1051ms** <br/> 
`liquidjs` => **14361ms** <br/> 

### if-expression (runned 2000 times) 
`pug` => **12ms** <br/> 
`dustjs` => **13ms** <br/> 
`igodust` => **23ms** <br/> 
`ejs` => **78ms** <br/> 
`liquidjs` => **115ms** <br/> 
`eta` => **339ms** <br/> 

### projects-escaped (runned 2000 times) 
`igodust` => **27ms** <br/> 
`handlebars` => **41ms** <br/> 
`dustjs` => **43ms** <br/> 
`pug` => **86ms** <br/> 
`ejs` => **140ms** <br/> 
`liquidjs` => **162ms** <br/> 
`eta` => **378ms** <br/> 

### projects-unescaped (runned 2000 times) 
`dustjs` => **16ms** <br/> 
`igodust` => **25ms** <br/> 
`handlebars` => **35ms** <br/> 
`pug` => **81ms** <br/> 
`ejs` => **126ms** <br/> 
`liquidjs` => **151ms** <br/> 
`eta` => **359ms** <br/> 

### search-results (runned 2000 times) 
`igodust` => **27ms** <br/> 
`pug` => **41ms** <br/> 
`dustjs` => **101ms** <br/> 
`handlebars` => **131ms** <br/> 
`eta` => **377ms** <br/> 
`ejs` => **413ms** <br/> 
`liquidjs` => **1331ms** <br/> 

### simple-0 (runned 2000 times) 
`dustjs` => **1ms** <br/> 
`pug` => **2ms** <br/> 
`handlebars` => **8ms** <br/> 
`liquidjs` => **18ms** <br/> 
`ejs` => **23ms** <br/> 
`igodust` => **25ms** <br/> 
`eta` => **276ms** <br/> 

### simple-1 (runned 2000 times) 
`pug` => **9ms** <br/> 
`dustjs` => **13ms** <br/> 
`handlebars` => **22ms** <br/> 
`igodust` => **24ms** <br/> 
`ejs` => **98ms** <br/> 
`liquidjs` => **119ms** <br/> 
`eta` => **339ms** <br/> 

### simple-2 (runned 2000 times) 
`dustjs` => **9ms** <br/> 
`pug` => **9ms** <br/> 
`handlebars` => **15ms** <br/> 
`igodust` => **26ms** <br/> 
`ejs` => **93ms** <br/> 
`liquidjs` => **114ms** <br/> 
`eta` => **332ms** <br/> 

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
