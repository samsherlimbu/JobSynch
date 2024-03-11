/** @type {import('next').NextConfig} */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol:  'https',
        hostname :"**",
      },
    ]
  },
  reactStrictMode: true,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js'),
          to: path.join(__dirname, 'dist'),
        },
      ],
    }),

  ],
  entry: {
    main: './src/index.tsx',
    'pdf.worker': path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
}

module.exports = nextConfig
