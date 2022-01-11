"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.url.js");

require("core-js/modules/web.url-search-params.js");

require("core-js/modules/es.array.reduce.js");

var _index = require("../index.js");

const DownloadButton = _ref => {
  let {
    headers = [],
    data = [],
    fileName = "",
    fileType = "text/csv"
  } = _ref;

  const downloadFile = _ref2 => {
    let {
      data,
      fileName,
      fileType
    } = _ref2;
    const blob = new Blob([data], {
      type: fileType
    });
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToCsv = e => {
    if (!headers || !data || !fileName) {
      alert("Insufficient information");
      return;
    }

    e.preventDefault();
    headers.join(",");
    headers = [headers];
    let csv = data.reduce((acc, d) => {
      const values = Object.values(d);
      acc.push(values.join(","));
      return acc;
    }, []);
    downloadFile({
      data: [...headers, ...csv].join("\n"),
      fileName,
      fileType
    });
  };

  return /*#__PURE__*/React.createElement(_index.Button, {
    text: "Download",
    onClick: e => exportToCsv(e)
  });
};

var _default = DownloadButton;
exports.default = _default;