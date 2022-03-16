const MAPPING = [
  [['А', 'а'], ['A', 'a'],],
  [['Б', 'б'], ['B', 'b'],],
  [['В', 'в'], ['V', 'v'],],
  [['Г', 'г'], ['G', 'g'],],
  [['Д', 'д'], ['D', 'd'],],
  [['Ђ', 'ђ'], ['Đ', 'đ'],],
  [['Е', 'е'], ['E', 'e'],],
  [['Ж', 'ж'], ['Ž', 'ž'],],
  [['З', 'з'], ['Z', 'z'],],
  [['И', 'и'], ['I', 'i'],],
  [['Ј', 'ј'], ['J', 'j'],],
  [['К', 'к'], ['K', 'k'],],
  [['Л', 'л'], ['L', 'l'],],
  [['Љ', 'љ'], ['Lj', 'lj'],],
  [['М', 'м'], ['M', 'm'],],
  [['Н', 'н'], ['N', 'n'],],
  [['Њ', 'њ'], ['Nj', 'nj'],],
  [['О', 'о'], ['O', 'o'],],
  [['П', 'п'], ['P', 'p'],],
  [['Р', 'р'], ['R', 'r'],],
  [['С', 'с'], ['S', 's'],],
  [['Т', 'т'], ['T', 't'],],
  [['Ћ', 'ћ'], ['Ć', 'ć'],],
  [['У', 'у'], ['U', 'u'],],
  [['Ф', 'ф'], ['F', 'f'],],
  [['Х', 'х'], ['H', 'h'],],
  [['Ц', 'ц'], ['C', 'c'],],
  [['Ч', 'ч'], ['Č', 'č'],],
  [['Џ', 'џ'], ['Dž', 'dž'],],
  [['Ш', 'ш'], ['Š', 'š'],],
];

function create_mapping(input) {
  let mapping = {};
  for (var idx in input) {
    let cyr = input[idx][0];
    let lat = input[idx][1];
    mapping[cyr[0]] = lat[0];
    mapping[cyr[1]] = lat[1];
  }

  return mapping;
}

const LETTER_MAPPING = create_mapping(MAPPING);

function transliterate(e) {
  let contents = Array.from(e.innerHTML);
  let data = [false];
  contents.forEach(function(ch, idx, arr) {
    if (LETTER_MAPPING[ch]) {
      data[0] = true;
      arr[idx] = LETTER_MAPPING[ch];
    }
  });
  if (data[0]) {
    e.innerHTML = contents.join('');
  }
}

function transliterateCyrilicToLatin() {
  for (let element of document.body.getElementsByTagName('p')) {
    transliterate(element);
  }
}
