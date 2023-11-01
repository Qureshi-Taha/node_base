const bcrypt = require("bcrypt")
const { v4: uuidv4 } = require('uuid');
const database = require("../../Modules/config")
const moment = require('moment')

module.exports = (dependencies) => {
    return async (req, res, next) => {
        console.log("Body",req.body)
        const userID = req.body.userID;
        const userFirstName = req.body.userFirstName;
        const userSurname = req.body.userSurname;
        const userAddressLine1 = req.body.userAddressLine1;
        const userAddressLine2 = req.body.userAddressLine2;
        const userAddressPostcode = req.body.userAddressPostcode;
        const userGender = req.body.userGender;
        const userDateOfBirth = req.body.userDateOfBirth;
        const userRole = req.body.userRole;
        
        let dataStore = {};
        try {
            if (!userID) {
                throw new Error("UserId not found");
            } else {
                dataStore.userID = userID;
                dataStore.userFirstName = userFirstName;
                dataStore.userSurname = userSurname;
                dataStore.userAddressLine1 = userAddressLine1;
                dataStore.userAddressLine2 = userAddressLine2;
                dataStore.userAddressPostcode = userAddressPostcode;
                dataStore.userGender = userGender;
                let dateRecord= userDateOfBirth.toString().split("/")
                dataStore.userDateOfBirth =  moment(`${dateRecord[2]}/${dateRecord[1]}/${dateRecord[0]}`).format("YYYY-MM-DD");
                console.log(dataStore);
                dataStore.userRole = userRole.toString();

                async function updateData() {
                    con = database();

                    await new Promise((resolve, reject) => {
                        con.query(
                            `UPDATE db_users SET
                                userFirstName = '${dataStore.userFirstName}',
                                userSurname = '${dataStore.userSurname}',
                                userAddressLine1 = '${dataStore.userAddressLine1}',
                                userAddressLine2 = '${dataStore.userAddressLine2}',
                                userAddressPostcode = '${dataStore.userAddressPostcode}',
                                userGender = '${userGender}',
                                userDateOfBirth = '${dataStore.userDateOfBirth}',
                                userRole = '${dataStore.userRole}',
                                WHERE userID = '${dataStore.userID}';`,
                            function (err, result, fields) {
                                if (err) {
                                    dataStore.update = err
                                    reject(err)
                                } else {
                                    
                                    // dataStore.update = result
                                    resolve(result);
                                }
                            })
                    }
                    )
                }

                await updateData();

                res.send({ "status": true, "msg": 'success', data: dataStore });
            }
        } catch (error) {
            res.status(400).json({ status: false, msg: error.toString() });
        }
    }
}

