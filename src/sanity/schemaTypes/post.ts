import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the post",
      validation: (Rule) => Rule.required(),
    }),

    //slug field

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

      //  summary

    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (Rule) => Rule.required(),
       
      // Image

    }),
    defineField({
      name: "image",
      type: "image",
      title:'Image',
    }),

      // content  


    defineField({
        name:'content',
        type:'array',
        title:'Content',
        of:[
            defineArrayMember({
                type:'block'
            })
        ]
    }),
      //  file author reference
     
    defineField({
        name:'author',
        type:'reference',
        title:'Author',
        to:[{
            type:'author'
        }]
    })


   
  ],
});