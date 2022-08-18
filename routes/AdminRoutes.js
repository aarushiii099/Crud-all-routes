const express=require("express")
const router=express.Router()
const Controllers=require("../controllers/controller")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

router.post("/signUp",Controllers.adminSignup)

router.post("/signIn",Controllers.adminSignin)

router.get("/logout",Controllers.adminLogOut)

router.post("/createUserAccount",authorize,Controllers.adminCreateUser)//Route for creating new user account by Admin!

router.put("/updateUserEmail/:email",authorize,Controllers.adminUpdateUserEmail)//Route for updating email in case email id of user changes!

router.get("/readUserDetails/:email",Controllers.adminUserDetails)//Route for reading User Account Details.

router.delete("/deleteUser/:email",Controllers.adminDeleteUser)//Route for deleting user account by Admin!

router.post("/createProduct",Controllers.adminCreateProduct)

router.get("/getProducts",Controllers.adminGetProducts)

router.delete("/deleteProduct/:name",authorize,Controllers.adminDeleteProduct)

router.put("/updateProduct/:name",authorize,Controllers.adminUpdateProduct)

function authorize (req,res,next){
    try{

    let reqtoken = req.headers['authorization'];
    const token = reqtoken.replace("Bearer ", '');
    const verifiedToken = jwt.verify(token, "jamesbond");
    req.token = verifiedToken;
    next();
    return;
    }
    catch(err){
        res.send({msg:"you are not authorized",status:false});
    }
}


module.exports = router;
