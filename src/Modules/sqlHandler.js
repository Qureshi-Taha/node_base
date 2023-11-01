const database = require("./config");
con = database();



module.exports ={

  query:async function (sqlQuery) {
    try {
      const getData = await new Promise((resolve, reject) => {
        if (!sqlQuery || typeof sqlQuery === "undefined")
          reject(
            `Validation Error sql Query Not Defines.\n sqlQuery is RequiiredFields`
          );
          con.query(sqlQuery,
          function (err, result, fields) {
            if (err) {
              reject(err);
            } else {
              resolve(result);
              }
          });
        }
      );
      return getData;
    } catch (error) {
      console.log("\n=-=-=-=-=-=-=-\nSQLHandlerError\n\n",error,"\nSQLHandlerError\n=-=-=-=-=-=-=-\n");
      throw new Error(error);
    }
  }
}
