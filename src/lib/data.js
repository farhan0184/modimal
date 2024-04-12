import { Img19, Img20 } from "@/assets/imgIndex"
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