var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(kitten, name) {
  kittens.push(name);
  return kittens;
}