  import React from 'react';
  // Importing the original mapper + our components according to the Docusaurus doc
  import MDXComponents from '@theme-original/MDXComponents';
  import Card from '../components/Card';
  import CardFooter from '../components/Card/CardFooter';
  import CardImage from '../components/Card/CardImage';
  import Columns from '../components/Columns';
  import Column from '../components/Columns/Column';
  export default {
    // Reusing the default mapping
    ...MDXComponents,
    Card, 
    CardFooter,
    CardImage,
    Columns,
    Column,
  };