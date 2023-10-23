import { defineField, defineType  } from "sanity";

export default defineType({
    name :"comment",
    title: "Comment",
    type: "document", 
    

    fields: [
        defineField({
            name:"name",
            type:"string",
            title:"Name",
            readOnly:true,
            validation: (rule)=>rule.required()
        }),

        defineField({
            name:"email",
            type:"string",
            title:"Email",
            readOnly:true,
            validation: (rule)=>rule.required(),
        }),

        defineField({
            name:"text",
            title:"text",
            type:"string",
            readOnly:true,
            validation: (rule)=>rule.required(),
        }),

        defineField({
            name : "post",
            type : "reference",
            title:"Post",
            to : {type:"post"} 
        })


    ]


})