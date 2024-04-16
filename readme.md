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
# RENDER 

### friends (runned 5000 times) 
`pug` => **149ms** <br/> 
`eta` => **603ms** <br/> 
`igodust` => **816ms** <br/> 
`handlebars` => **935ms** <br/> 
`ejs` => **1072ms** <br/> 
`liquidjs` => **21000ms** <br/> 

### if-expression (runned 5000 times) 
`pug` => **8ms** <br/> 
`eta` => **109ms** <br/> 
`ejs` => **164ms** <br/> 
`igodust` => **168ms** <br/> 
`liquidjs` => **558ms** <br/> 

### projects-escaped (runned 5000 times) 
`handlebars` => **51ms** <br/> 
`eta` => **138ms** <br/> 
`pug` => **162ms** <br/> 
`igodust` => **173ms** <br/> 
`ejs` => **235ms** <br/> 
`liquidjs` => **537ms** <br/> 

### projects-unescaped (runned 5000 times) 
`handlebars` => **47ms** <br/> 
`igodust` => **127ms** <br/> 
`eta` => **142ms** <br/> 
`pug` => **164ms** <br/> 
`ejs` => **244ms** <br/> 
`liquidjs` => **535ms** <br/> 

### search-results (runned 5000 times) 
`pug` => **51ms** <br/> 
`handlebars` => **188ms** <br/> 
`igodust` => **191ms** <br/> 
`eta` => **208ms** <br/> 
`ejs` => **760ms** <br/> 
`liquidjs` => **3008ms** <br/> 

### simple-0 (runned 5000 times) 
`pug` => **1ms** <br/> 
`handlebars` => **10ms** <br/> 
`igodust` => **60ms** <br/> 
`ejs` => **76ms** <br/> 
`eta` => **83ms** <br/> 
`liquidjs` => **119ms** <br/> 

### simple-1 (runned 5000 times) 
`pug` => **10ms** <br/> 
`handlebars` => **25ms** <br/> 
`eta` => **113ms** <br/> 
`igodust` => **140ms** <br/> 
`ejs` => **220ms** <br/> 
`liquidjs` => **544ms** <br/> 

### simple-2 (runned 5000 times) 
`pug` => **7ms** <br/> 
`handlebars` => **20ms** <br/> 
`eta` => **113ms** <br/> 
`igodust` => **115ms** <br/> 
`ejs` => **210ms** <br/> 
`liquidjs` => **456ms** <br/> 

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
