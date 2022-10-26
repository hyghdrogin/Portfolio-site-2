// const http = require("http");
// const fs = require("node:fs/promises");

// const port = 8000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write(`<head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Portfolio Homepage</title>
//         </head>`);
//     res.write(`<body>
//         <header>
//             <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/about">About</a></li>
//                 <li><a href="/contact">Contact</a></li>
//                 <li><a href="https://docs.google.com/document/d/1OS68MLbL7-QdkGdmMM0Ac6qy130mJ3TmB1jsGIyV1u8">Resume</a></li>
//             </ul>
//         </header>
//         <p>Hi there, I'm <span color="red">EMMANUEL</span></p>
//                 <p> A Backend developer based in Lagos Nigeria. </p>
//             <main></main>
//             <section>
//                 <p>With professional and practical experience building modern web applications</p>
//             </section>
//             <section>
//                 <p>I have also worked with various teams (Startups and companies)</p>
//     </body>`);
//     res.end();
//   } else if (req.url === "/about") {
//     res.write(`<head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>About Page</title>
//     </head>`);
//     res.write(`<body>
//         <header>
//             <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/about">About</a></li>
//                 <li><a href="/contact">Contact</a></li>
//                 <li><a href="https://docs.google.com/document/d/1OS68MLbL7-QdkGdmMM0Ac6qy130mJ3TmB1jsGIyV1u8">Resume</a></li>
//             </ul>
//         </header>
//         <section>
//                     <h2> About </h2>
//                     <p>I'm Omopariola Emmanuel, A Software Engineer, I am passionate about helping people and improving the quality of life of society through technology.</p>
//                     <p>My technology interests/Stack includes: Html, Javascript .</p>
//                     <p>When not Working on a project, I'm either playing video games, watching football or spending time with family and friends.</p>
//                 </section><hr>
//         <p>I have experience writing the following:
//             <ul>
//                 <li>Node Js</li>
//                 <li>Express Js</li>
//                 <li>Typescript</li>
//             </ul>
//         and using databases such as:
//             <ul>
//                 <li>MongoDb</li>
//                 <li>Postgres</li>
//             </ul>
//         </p>
//     </body>`);
//     res.end();
//   } else if (req.url === "/contact") {
//     res.write(`<head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>About Page</title>
//     </head>`);
//     res.write(`<body>
//         <header>
//             <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/about">About</a></li>
//                 <li><a href="/contact">Contact</a></li>
//                 <li><a href="https://docs.google.com/document/d/1OS68MLbL7-QdkGdmMM0Ac6qy130mJ3TmB1jsGIyV1u8">Resume</a></li>
//             </ul>
//         </header>
//         <h2>GET IN TOUCH</h2>
//         <p>Would like to say hi. Feel free to contact me! <a href="mailto:omokewt@gmail.com"><strong><u>hello@emmanuel</u></strong></a></p>

//         <a href="https://twitter.com/hyghdrogin"><strong>Twitter</strong></a><hr>

//         <a href="https://instagram.com/hyghdrogin"><strong>Instagram</strong></a><hr>

//         <a href="https://facebook.com/bonykewt"><strong>Facebook</strong></a><hr>

//         <a href="https://github.com/hyghdrogin"><strong>Github</strong></a>
//         <hr>
//     </body>`);
//     res.end();
//   } else {
//     res.write(`
//     <h1>Oops!</h1>

//     <p>We can't seem to find the page you requested for.</p>
//     <a href="/">Kindly navigate back home</a>
//     `);
//     res.end();
//   }
// });

// server.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
