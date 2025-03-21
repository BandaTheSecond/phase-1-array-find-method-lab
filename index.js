const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  console.log(superbowlWin(record));

function superbowlWin(records) {
    let win = records.find(record => record.result === "W");
    return win ? win.year : undefined;
}
