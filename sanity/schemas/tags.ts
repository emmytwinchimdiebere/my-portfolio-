import { defineType, defineField } from "sanity"

export default defineType(
    {
        name:"tag",
        title: "Tag",
        type : "document", 
    
        fields: [
            defineField({
                name:"tag",
                title:"PostTag",
                type:"string",
                validation: (rule)=>rule.required() 
            }),

            defineField({
                name:"description",
                title:"Description",
                type:"string"
            })
        ]
    
    
    }
)