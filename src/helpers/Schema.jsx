import * as yup from "yup";

export const BookSchema=yup.object({
    Title:yup
    .string()
    .required("Please fill in Book name")
    .min(3, "Minimum three words required")
    .max(10, "First or last name is enough"),
    ISBN:yup.number().required("Please fill the ISBN number "),
    publication:yup.number().required("Please fill the publication "),
    Author:yup.number().required("please fill the author Name"),
    birth_date:yup.number().required("please fill the author Birth Date"),
    short_biography:yup.number().required("please fill the author biography"),
})
