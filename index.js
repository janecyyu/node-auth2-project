const server = require("./server");

const port = process.env.PORT || 5006;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
