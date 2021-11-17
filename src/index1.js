// const chalk = require('chalk');
// const yargs = require('yargs')
// const fs = require('fs');

const https = require('https');

const options = {
  method: 'GET',
  path:'https://5c74e0e1e24a2e001477f397.mockapi.io/api/products'
}

const req = https.request('https://5c74e0e1e24a2e001477f397.mockapi.io/api/products', (res) => {
  console.log('status -- ', res.statusCode);
  // console.log('header -- ', res);

  let dax =''

  res.on('data', (data) => {
    dax += data.toString()
  })

  res.on('end', (data) => { 
    console.log('xdata 0 === ', data);
    console.log('xdata === ', JSON.parse(dax)[0]);
  })
});

req.on('error', (e) => {
  console.log('error === ', e);
})

req.end()

// // const error = chalk.bold.red;
// // const warning = chalk.keyword('orange');

// // console.log(process.argv);
// // console.log(warning(`--------------------`));

// //------------
// // yargs.version('1.1.0');

// // yargs.command({
// //   command: 'test1',
// //   describe: 'test command yargs!',
// //   builder: {
// //     title: {
// //       desscribe: 'test builder',
// //       demandOption: true,
// //       type: 'string'
// //     },
// //     body: {
// //       desscribe: 'test builder',
// //       demandOption: true,
// //       type: 'boolean'
// //     }
// //   },
// //   handler: function (e) {
// //     console.log('test command ! --- ', e.title)
// //   }
// // })

// // const testJson = {
// //   tile: 'title1',
// //   value: 'value1'
// // }


// const loadData = (path) => {
//   let result = [];
//   try {
//     result = JSON.parse(fs.readFileSync(path).toString());
//   } catch (error) {
//     console.error('loadData: ',error.message)
//   }

//   return result;
// }

// const addData = (path, data) => {
//   let result = loadData(path);

//   if (!result.find(item => item.id === data.id)) {
//     result.push(data);
//     syncDocs(path, result)
//   } else {
//     console.log('Data is dupicate!');
//   }
// }

// console.log('1!');


// const syncDocs = (path, data) => {
//   try {
//     fs.writeFileSync(path, JSON.stringify(data))
//     return
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// const deleteDocs = (path, id) => {
//   try {
//     const data = loadData(path);
//     const newData = data.filter((item) => item.id !== id);
//     syncDocs(path, newData);
//   } catch (error) {
//     console.error('deleteDocs: ', error.message)
//   }
// }

// const resetFile = (path) => {
//   try {
//     syncDocs(path, []);
//   } catch (error) {
//     console.error('resetFile: ', error.message)
//   }
// }

// yargs.command({
//   command: 'action',
//   describe: 'action command!',
//   builder: {
//     action: {
//       describe: 'action',
//       demandOption: true,
//       type: 'string'
//     },
//     id: {
//       describe: 'id item',
//       demandOption: false,
//       type: 'string'
//     },
//     path: {
//       describe: 'path of file',
//       demandOption: true,
//       type: 'string'
//     }
//   },
//   handler: (e) => {
//     debugger
//     switch (e.action) {
//       case 'add':
//         const item1 = {
//           id: e.id,
//           value: e.value
//         }
//         addData(e.path, item1)
//         break;
//       case 'delete':
//         deleteDocs(e.path, e.id);
//         break;
//       case 'reset':
//         resetFile(e.path);
//         break;
//       default:
//         break;
//     }

//     console.log('e ==== ', e)
//   }
// })

// yargs.parse()

// // console.log(yargs.argv)

// // addData('test-file.json', item1)
