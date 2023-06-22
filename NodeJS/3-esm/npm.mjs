import node from './node.mjs';

const npm = {};

const pkgPath = node.path.join(node.process.cwd(), 'package.json');
const pkg = JSON.parse(await node.fsp.readFile(pkgPath));

if (pkg.dependencies) {
  const modules = Object.keys(pkg.dependencies);
  for (const dependency of modules) {
    npm[dependency] = await import(dependency);
  }
}

Object.freeze(npm);
export default npm;
