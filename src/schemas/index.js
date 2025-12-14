import * as Yup from "yup"

export const createUserSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter user name"),
    email: Yup.string().email().required("Please enter email"),
    age: Yup.string().min(1).max(3).required("Enter age"), 
    gender: Yup.string().required("Please select gender") 


})