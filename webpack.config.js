const path = require('path');

module.exports = {
   entry: './src/index.ts', // entry point of your application
   module: {
      rules: [
         {
            test: /\.tsx?$/, // match both .ts and .tsx files
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'], // resolve these extensions
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   mode: 'development', // change to 'production' for production build
};
