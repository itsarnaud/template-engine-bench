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
`pug` => **124ms** <br/> 
`eta` => **551ms** <br/> 
`igodust` => **575ms** <br/> 
`ejs` => **779ms** <br/> 
`handlebars` => **847ms** <br/> 
`liquidjs` => **15688ms** <br/> 

### if-expression (runned 5000 times) 
`pug` => **7ms** <br/> 
`igodust` => **8ms** <br/> 
`eta` => **86ms** <br/> 
`ejs` => **132ms** <br/> 
`liquidjs` => **441ms** <br/> 

### projects-escaped (runned 5000 times) 
`handlebars` => **40ms** <br/> 
`igodust` => **46ms** <br/> 
`eta` => **108ms** <br/> 
`pug` => **157ms** <br/> 
`ejs` => **182ms** <br/> 
`liquidjs` => **409ms** <br/> 

### projects-unescaped (runned 5000 times) 
`igodust` => **8ms** <br/> 
`handlebars` => **37ms** <br/> 
`eta` => **105ms** <br/> 
`pug` => **162ms** <br/> 
`ejs` => **183ms** <br/> 
`liquidjs` => **407ms** <br/> 

### search-results (runned 5000 times) 
`igodust` => **16ms** <br/> 
`pug` => **40ms** <br/> 
`handlebars` => **146ms** <br/> 
`eta` => **164ms** <br/> 
`ejs` => **707ms** <br/> 
`liquidjs` => **1827ms** <br/> 

### simple-0 (runned 5000 times) 
`pug` => **2ms** <br/> 
`igodust` => **5ms** <br/> 
`handlebars` => **8ms** <br/> 
`eta` => **58ms** <br/> 
`ejs` => **60ms** <br/> 
`liquidjs` => **86ms** <br/> 

### simple-1 (runned 5000 times) 
`pug` => **7ms** <br/> 
`igodust` => **11ms** <br/> 
`handlebars` => **18ms** <br/> 
`eta` => **91ms** <br/> 
`ejs` => **167ms** <br/> 
`liquidjs` => **399ms** <br/> 

### simple-2 (runned 5000 times) 
`pug` => **7ms** <br/> 
`igodust` => **9ms** <br/> 
`handlebars` => **15ms** <br/> 
`eta` => **90ms** <br/> 
`ejs` => **150ms** <br/> 
`liquidjs` => **336ms** <br/> 

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
