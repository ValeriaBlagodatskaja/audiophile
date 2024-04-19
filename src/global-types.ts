export interface ProductType {
  category: string
  categoryImage: {
    dsktop: string
    mobile: string
    tablet: string
  }
  description: string
  features: string
  gallery: {
    first: {
      image: {
        desktop: string
        mobile: string
        tablet: string
      }
    }
    second: {
      image: {
        desktop: string
        mobile: string
        tablet: string
      }
    }
    third: {
      image: {
        desktop: string
        mobile: string
        tablet: string
      }
    }
  }
  id: number
  image: {
    desktop: string
    mobile: string
    tablet: string
  }
  includes: { item: string; quantity: number }[]
  name: string
  new: boolean
  others: {
    images: {
      lg: string
      md: string
      sm: string
    }
    name: string
    slug: string
  }[]
  price: number
  slug: string
}
