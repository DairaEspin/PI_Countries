const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const createActivity = require("./src/controllers/Activity/createActivity.js")

conn.sync({ force: true }).then(  () => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  // try {
  //   const result = await createActivity(
  //     {
  //       "name": "guerra",
  //       "difficulty": 5,
  //       "duration": 24,
  //       "season": "Autumn",
  //       "pais": [
  //         "República Árabe Siria"
  //       ]
  //     }
  //   )
  //   console.log(result)
    
  // } catch (error) {
  //   console.log(error)
    
  // }
})
}).catch(error => console.error(error))
