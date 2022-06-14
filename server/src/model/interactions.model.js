const path = require("path");

const fs = require("fs");

const { parse } = require("csv-parse");

const interactions = { data: {}, total: 0 };

function loadData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "interactions.csv")
    )
      .pipe(
        parse({ comment: "#", columns: true }).on("data", (data) => {
          interactions.total++;
          //   interactions.push((data["name"] = data["name"] + 1));
          if (interactions.data[data["name"]]) {
            const temp_date = interactions.data[data["name"]].date;
            temp_date.push(data["date"]);
            const temp = {
              total: interactions.data[data["name"]].total + 1,
              date: temp_date,
            };
            interactions.data[data["name"]] = temp;
          } else {
            const temp_date = [data["date"]];
            const temp = {
              total: 1,
              date: temp_date,
            };
            interactions.data[data["name"]] = temp;
          }
        })
      )
      .on("error", (error) => {
        console.log(error);
        reject(error);
      })
      .on("end", () => {
        console.log(interactions);

        resolve();
      });
  });
}

function getInteraction() {
  return interactions;
}

module.exports = {
  loadData,
  getInteraction,
};
