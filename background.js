browser.contextMenus.create({
  id: "transliterate-cyrilic",
  title: "Transliterate Cyrilic to Latin",
  contexts: ["all"],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== 'transliterate-cyrilic') {
    return;
  }

  const code = "transliterateCyrilicToLatin();";
  browser.tabs.executeScript({
    code: "typeof transliterateCyrilicToLatin === 'function';",
  }).then((results) => {
    if (!results || results[0] !== true) {
      return browser.tabs.executeScript(tab.id, {
        file: "transliterate.js",
      });
    }
  }).then(() => {
    return browser.tabs.executeScript(tab.id, {
      code,
    });
  }).catch((error) => {
    console.error("Failed to transliterate page: " + error);
  });
});
