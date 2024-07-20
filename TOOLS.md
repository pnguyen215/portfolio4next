# Tree

You can use the tree command-line utility in Node.js to generate a tree-like structure of your project directory. Here's
how you can use it:

First, make sure you have the `tree-node-cli` package installed globally:

```bash
npm install -g tree-node-cli
```

Then, navigate to your project directory and run the following command:

```bash
tree -I "node_modules|.git|.DS_Store"
```

If you want to save the output to a file instead of printing it to the console, you can use the -o option followed by
the file path:

```bash
tree -I "node_modules|.git|.DS_Store" > project_structure.txt
```

This will save the output to a file named `project_structure.txt`.
