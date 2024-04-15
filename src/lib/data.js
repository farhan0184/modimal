import { Img10, Img11, Img12, Img19, Img20, Img21, Img22, Img23, Img24, Img25, Img26 } from "@/assets/imgIndex"
export const links = [
  {
    id: 1,
    name: "Collection",
    link: "/",
    isSublink: true,
    subLinks: {
      category: [
        {
          id: 1,
          name: "Shop All",
          link: "/",
        },
        {
          id: 2,
          name: "Boluses & Top",
          link: "/",
        },
        {
          id: 3,
          name: "Pants",
          link: "/",
        },
        {
          id: 4,
          name: "Dresses & Jumpsuits",
          link: "/",
        },
        {
          id: 5,
          name: "Outwear & Jackets ",
          link: "/",
        },
        {
          id: 6,
          name: "Pullovers",
          link: "/",
        },
        {
          id: 7,
          name: "Tees",
          link: "/",
        },
        {
          id: 8,
          name: "Shorts & Skirts",
          link: "/",
        }
      ],
      featured: [
        {
          id: 1,
          name: "New In",
          link: "/",
        },
        {
          id: 2,
          name: "Modiweek",
          link: "/",
        },
        {
          id: 3,
          name: "Plus Size",
          link: "/",
        },
        {
          id: 4,
          name: "Sustainability",
          link: "/",
        }
      ],
      more: [
        {
          id: 1,
          name: "Bundles",
          link: "/",
        },
        {
          id: 2,
          name: "Occasion Wear",
          link: "/",
        },
        {
          id: 3,
          name: "Matching Set",
          link: "/",
        },
        {
          id: 4,
          name: "Suiting",
          link: "/",
        }
      ],
      images: [
        {
          id: 1,
          name: "Bundles",
          src: Img19,
        },
        {
          id: 2,
          name: "Plus Size",
          src: Img20,
        }
      ]
    }
  },
  {
    id: 2,
    name: "New In",
    link: "/",
    isSublink: false,

  },
  {
    id: 3,
    name: "Modiweek",
    link: "/",
    isSublink: false,
  },
  {
    id: 4,
    name: "Plus Size",
    link: "/",
    isSublink: false,
  },
  {
    id: 5,
    name: "Sustainability",
    link: "/",
    isSublink: false,
  }
]
export const filtters = [
  {
    id: 1,
    name: 'Sort By',
    list: [{title:'LTH', name:'lth'}, {title:'HTL', name:'htl'}],
  },
  {
    id: 2,
    name: 'Size',
    list: [{title:'XS / US (0-4)', name:'xs'}, {title:'S / US (4-6)', name:'s'}, {title:'M / US (6-10)', name:'m'}, {title:'L / US (10-14)', name:'l'}, {title:'XL / US (12-16)', name:'xl'}, {title:'XXL / US (16-20)', name:'xxl'}, {title:'XXXL / US (20-24)', name:'xxxl'}],
  },
  {
    id: 3,
    name: 'Color',
    list: [{title:'Red', name:'red'}, {title:'Green', name:'green'}, {title:'Blue', name:'blue'}, {title:'White', name:'white'}, {title:'Black', name:'black'}, {title:'Yellow', name:'yellow'}, {title:'Orange', name:'orange'}, {title:'Purple', name:'purple'}, {title:'Pink', name:'pink'}, {title:'Gray', name:'gray'}, {title:'Brown', name:'brown'}],
  },
  {
    id: 4,
    name: 'Collection',
    list: [{title:'In stock', name:'in-stock'}, {title:'Out of stock', name:'out-of-stock'}],
  },
  {
    id: 5,
    name: 'Fabric',
    list: [{title:'Cotton', name:'cotton'}, {title:'Linen', name:'linen'}, {title:'Wool', name:'wool'}, {title:'Silk', name:'silk'}, {title:'Cashmere', name:'cashmere'}],
  },
]

export const products = [
  {
    id: 1,
    title: 'Tailored Stretch',
    subTitle: 'Turn It Up Pants',
    type: 'dress',
    price: 100,
    img: Img12,
    colors: ['#0C0C0C', '#7DC3EB', '#748C70']
  },
  {
    id: 2,
    title: 'Technical Silk',
    subTitle: 'Make A Splash',
    type: 'dress',
    price: 100,
    img: Img11,
    colors: ['#909225', '#19418E', '#0C0C0C']
  },
  {
    id: 3,
    title: 'Cool Weave',
    subTitle: 'Anywhere Dress',
    type: 'dress',
    price: 100,
    img: Img10,
    colors: ['#D0A5EA', '#909225', '#748C70']
  },
  {
    id: 4,
    title: 'Elastic Waist',
    subTitle: 'Turn It Up Pants',
    type: 'pant',
    price: 100,
    img: Img21,
    colors: ['#0C0C0C', '#7DC3EB', '#748C70']
  },
  {
    id: 5,
    title: 'Tailored Stretch',
    subTitle: 'Turn It Up Pants',
    type: 'pant',
    price: 100,
    img: Img22,
    colors: ['#909225', '#19418E', '#0C0C0C']
  },
  {
    id: 6,
    title: 'Tailored Stretch',
    subTitle: 'Turn It Up Pants',
    type: 'pant',
    price: 100,
    img: Img23,
    colors: ['#D0A5EA', '#909225', '#748C70']
  },
  {
    id: 7,
    title: 'High Tillie',
    subTitle: 'Turn It Up Pants',
    type: 'pant',
    price: 100,
    img: Img24,
    colors: ['#0C0C0C', '#7DC3EB', '#748C70']
  },
  {
    id: 8,
    title: 'Technical Silk',
    subTitle: 'Turn It Up Pants',
    type: 'pant',
    price: 100,
    img: Img25,
    colors: ['#909225', '#19418E', '#0C0C0C']
  },
  {
    id: 9,  
    title: 'Cool Weave',
    subTitle: 'Turn It Up Pants',
    type: 'pant',
    price: 100,
    img: Img26,
    colors: ['#D0A5EA', '#909225', '#748C70']
  }
]