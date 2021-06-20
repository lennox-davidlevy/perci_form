const express = require('express');
const axios = require('axios');
const router = express.Router();
const apiKey = process.env.REACT_APP_THESAURUS_API;

router.get('/', (req, res, next) => {
  res.send('synonym route working');
});

router.post('/', async (req, res, next) => {
  const { gender, title, brand, characteristic, seo } = req.body;
  const synonymCalls = characteristic.map((word) => {
    return `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apiKey}`;
  });
  const fetchURL = (url) => axios.get(url);
  const promiseArray = synonymCalls.map(fetchURL);
  try {
    const res = await Promise.all(promiseArray);
    const syn = res.map((item) => {
      return item.data[0];
    });
    let synArray = syn.map((item) => {
      if (item['meta'] && item['meta']['syns'])
        return item['meta']['syns'][0].slice(0, 3);
    });
    synArray.forEach((item, index) => {
      synArray[index] = item || new Array(3).fill(characteristic[index]);
    });
    const result = [{ gender, title, brand, characteristic, seo }];
    for (let i = 0; i < 3; i++) {
      let tempChar = [];
      for (let j = 0; j < synArray.length; j++) {
        let item = synArray[j];
        tempChar.push(synArray[j][i]);
      }
      let tempItem = { ...result[0], characteristic: tempChar };
      result.push(tempItem);
    }
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
