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
- MacBook Pro M1, 13-inch with 16GB of RAM (2020)

<!-- <render performance> -->
## RENDER 

### friends (runned 5000 times) 
`pug` => **120ms** <br/> 
`eta` => **601ms** <br/> 
`igodust` => **823ms** <br/> 
`ejs` => **869ms** <br/> 
`handlebars` => **904ms** <br/> 
`liquidjs` => **17145ms** <br/> 

### if-expression (runned 5000 times) 
`pug` => **6ms** <br/> 
`eta` => **102ms** <br/> 
`ejs` => **154ms** <br/> 
`igodust` => **156ms** <br/> 
`liquidjs` => **483ms** <br/> 

### projects-escaped (runned 5000 times) 
`handlebars` => **42ms** <br/> 
`eta` => **126ms** <br/> 
`igodust` => **153ms** <br/> 
`pug` => **161ms** <br/> 
`ejs` => **212ms** <br/> 
`liquidjs` => **455ms** <br/> 

### projects-unescaped (runned 5000 times) 
`handlebars` => **39ms** <br/> 
`igodust` => **119ms** <br/> 
`eta` => **125ms** <br/> 
`pug` => **154ms** <br/> 
`ejs` => **213ms** <br/> 
`liquidjs` => **455ms** <br/> 

### search-results (runned 5000 times) 
`pug` => **41ms** <br/> 
`handlebars` => **157ms** <br/> 
`igodust` => **175ms** <br/> 
`eta` => **186ms** <br/> 
`ejs` => **660ms** <br/> 
`liquidjs` => **1996ms** <br/> 

### simple-0 (runned 5000 times) 
`pug` => **2ms** <br/> 
`handlebars` => **9ms** <br/> 
`igodust` => **56ms** <br/> 
`eta` => **70ms** <br/> 
`ejs` => **72ms** <br/> 
`liquidjs` => **105ms** <br/> 

### simple-1 (runned 5000 times) 
`pug` => **8ms** <br/> 
`handlebars` => **19ms** <br/> 
`eta` => **104ms** <br/> 
`igodust` => **127ms** <br/> 
`ejs` => **197ms** <br/> 
`liquidjs` => **452ms** <br/> 

### simple-2 (runned 5000 times) 
`pug` => **7ms** <br/> 
`handlebars` => **16ms** <br/> 
`eta` => **104ms** <br/> 
`igodust` => **107ms** <br/> 
`ejs` => **179ms** <br/> 
`liquidjs` => **380ms** <br/> 

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
